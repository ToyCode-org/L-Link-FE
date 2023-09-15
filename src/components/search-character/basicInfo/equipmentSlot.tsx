import styled from "styled-components";
import Image from "next/image";
import { getPublicImage } from "@/util/getPubliceImage";
import {
  GradeLevel,
  gradeBackground,
  gradeColor,
  gradeName,
} from "../itemInfo";
import { Equipment } from "@/types";

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
  const tooltipes = JSON.parse(equipmentInfo.Tooltip);
  const grade: GradeLevel = tooltipes.Element_001.value.slotData.iconGrade;
  const qualityValue = tooltipes.Element_001.value.qualityValue;
  return (
    <EquipmentItem>
      <div>
        <ItemType>{equipmentInfo.Type}</ItemType>
        <Image
          src={equipmentInfo.Icon}
          width={50}
          height={50}
          style={{ background: `${gradeBackground[grade]}` }}
          alt="avater"
        />
        <QualityProgress value={qualityValue} max={100} />
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
  const tooltipes = JSON.parse(equipmentInfo.Tooltip);
  const grade: GradeLevel = tooltipes.Element_001.value.slotData.iconGrade;
  const qualityValue = tooltipes.Element_001.value.qualityValue;
  return (
    <EquipmentItem>
      <div>
        <ItemType>
          {equipmentInfo.Type === "어빌리티 스톤" ? "스톤" : equipmentInfo.Type}
        </ItemType>
        <Image
          src={equipmentInfo.Icon}
          width={50}
          height={50}
          style={{ background: `${gradeBackground[grade]}` }}
          alt="avater"
        />
        {qualityValue >= 0 ? (
          <>
            <QualityProgress value={qualityValue} max={100} />
            <ProgressValue>{qualityValue}</ProgressValue>
          </>
        ) : null}
      </div>
      <div>
        <ItemName style={{ color: `${gradeColor[grade]}` }}>
          {gradeName[grade]}
        </ItemName>
        <Stats>
          <li>fte</li>
        </Stats>
      </div>
    </EquipmentItem>
  );
};

const EquipmentItem = styled.div`
  margin-bottom: 5px;
  display: flex;

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

const QualityProgress = styled.progress`
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

const ItemName = styled.div`
  margin: 0 10px;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 12px;
`;

const Stats = styled.div``;
