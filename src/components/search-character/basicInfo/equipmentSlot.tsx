import styled from "styled-components";
import Image from "next/image";
import { getPublicImage } from "@/util/getPubliceImage";
import {
  GradeLevel,
  gradeBackground,
  gradeColor,
  gradeName,
} from "../itemInfo";
import { qualityCheck } from "../itemInfo";

// types
import { Equipment } from "@/types";
import { ToolTip, EquipmentData, IndentStringGroup } from "..";

interface Props {
  type: string;
}

export const BlankEquipment = ({ type }: Props) => {
  return (
    <EquipmentItem>
      <div>
        <ItemType>{type === "어빌리티 스톤" ? "스톤" : type}</ItemType>
        <Image
          src={getPublicImage(`equipment/blank-slot`)}
          width={50}
          height={50}
          alt="blank-equipmnet"
        />
      </div>
    </EquipmentItem>
  );
};

interface EquipmentInfo {
  equipmentInfo: Equipment;
}
export const EquipmentSlot = ({ equipmentInfo }: EquipmentInfo) => {
  const tooltips = JSON.parse(equipmentInfo.Tooltip);
  const grade: GradeLevel = tooltips.Element_001.value.slotData.iconGrade;
  const qualityValue = tooltips.Element_001.value.qualityValue;
  return (
    <EquipmentItem>
      <div>
        <ItemType>{equipmentInfo.Type}</ItemType>
        <Image
          src={equipmentInfo.Icon}
          width={50}
          height={50}
          style={{ background: `${gradeBackground[grade]}` }}
          alt="item"
        />
        <QualityProgress
          value={qualityValue}
          max={100}
          $quality={qualityCheck(qualityValue)}
        />
        <ProgressValue>{qualityValue}</ProgressValue>
      </div>
      <ItemName style={{ color: `${gradeColor[grade]}` }}>
        {equipmentInfo.Name}
      </ItemName>
    </EquipmentItem>
  );
};

interface AccessoryInfo {
  equipmentInfo: Equipment;
}

export const AccessorySlot = ({ equipmentInfo }: AccessoryInfo) => {
  const tooltips = JSON.parse(equipmentInfo.Tooltip);
  const typeName =
    equipmentInfo.Type === "어빌리티 스톤" ? "스톤" : equipmentInfo.Type;
  const grade: GradeLevel = tooltips.Element_001.value.slotData.iconGrade;
  const qualityValue = tooltips.Element_001.value.qualityValue;

  let stat: string[];
  let equipmentData: EquipmentData[] = [];

  // TODO : tooltip[value] type err : any type 수정 필요
  const getIndentStringGroup = (tooltip: ToolTip | any) => {
    const keys = Object.keys(tooltip);

    for (const value of keys) {
      if (tooltip[value].type === "IndentStringGroup") {
        return value;
      }
    }
  };

  const getEquipments = (contentStr: IndentStringGroup) => {
    const equipFirst = contentStr.Element_000.contentStr;
    const equipSecond = contentStr.Element_001.contentStr;
    const equipThird = contentStr.Element_002.contentStr;

    let text = `${equipFirst}${equipSecond}${equipThird}`;
    let parser = new DOMParser();
    let doc = parser.parseFromString(text, "text/html");
    // replaceAll은 호출될 때마다 regex를 컴파일하기 때문에
    // 성능에 부정적 영향을 줄 수 있음. 다른 parsing 방법 필요
    let result: string | string[] = doc.body.innerText
      .split(" ")
      .join("")
      .replaceAll("]", " ");
    result = result.split("[");
    result.shift();

    let equipLevel = result.map(value => {
      const data = value.split(" 활성도+");
      return {
        equipName: data[0],
        level: data[1],
      };
    });
    return equipLevel;
  };

  const indentStringGroupKey = getIndentStringGroup(tooltips) as string;
  switch (typeName) {
    case "팔찌": {
      stat = [""];
      break;
    }
    case "스톤": {
      stat = tooltips.Element_004.value.Element_001.split("<BR>");
      const equipState =
        tooltips[indentStringGroupKey].value.Element_000.contentStr;
      equipmentData = getEquipments(equipState);
      break;
    }
    default: {
      stat = tooltips.Element_005.value.Element_001.split("<BR>");
      const equipState = tooltips.Element_006.value.Element_000.contentStr;
      equipmentData = getEquipments(equipState);
      break;
    }
  }

  return (
    <EquipmentItem>
      <div>
        <ItemType>{typeName}</ItemType>
        <Image
          src={equipmentInfo.Icon}
          width={50}
          height={50}
          style={{ background: `${gradeBackground[grade]}` }}
          alt="item"
        />
        {qualityValue >= 0 ? (
          <>
            <QualityProgress
              value={qualityValue}
              max={100}
              $quality={qualityCheck(qualityValue)}
            />
            <ProgressValue>{qualityValue}</ProgressValue>
          </>
        ) : null}
      </div>
      <StatsWrap>
        <ItemName style={{ color: `${gradeColor[grade]}` }}>
          {gradeName[grade]}
        </ItemName>
        <Stats>
          {stat.map((statValue, index) => {
            return <li key={index}>{statValue}</li>;
          })}
        </Stats>
      </StatsWrap>
      <EngravingStats style={typeName !== "팔찌" ? {} : { display: "none" }}>
        {equipmentData.map((value, index) => {
          return (
            <li key={index}>
              <span>{value.level}</span>
              {value.equipName}
            </li>
          );
        })}
      </EngravingStats>
    </EquipmentItem>
  );
};

const EquipmentItem = styled.div`
  margin-bottom: 5px;
  display: flex;
  align-items: center;

  & img {
    border: 1px solid white;
    border-radius: 10px;
  }
`;
const ItemType = styled.span`
  padding: 2px;
  position: absolute;
  font-size: 10px;
  background-color: #52525276;
  border-radius: 10px 0 0 0;
`;

const QualityProgress = styled.progress<{ $quality: string }>`
  appearance: none;
  position: absolute;
  transform: translate(-51px, 45px);
  width: 50px;
  height: 10px;
  border: 1px solid white;
  border-radius: 3px;
  &::-webkit-progress-bar {
    background: black;
  }
  &::-webkit-progress-value {
    background-color: ${props => props.$quality};
  }
`;
const ProgressValue = styled.div`
  position: absolute;
  transform: translate(0px, -12px);
  width: 50px;
  height: 10px;
  font-size: 10px;
  text-align: center;
`;

const StatsWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ItemName = styled.div`
  margin: 0 10px;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 12px;
`;

const Stats = styled.div`
  margin: 0 10px;
  font-size: 12px;
`;

const EngravingStats = styled.div`
  margin: 0 10px;
  font-size: 12px;

  & li {
    & span {
      margin-right: 5px;
      background-color: red;
      width: 20px;
      height: 20px;
      border-radius: 5px;
    }
  }
`;
