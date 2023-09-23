import styled from "styled-components";
import Image from "next/image";
import {
  gradeBackground,
  gradeNumber,
  GradeLevel,
  GradeName,
} from "../itemInfo";
import { ComponentLabel } from "@/components/common/components";
import { DOMparsedData } from "@/util/DOMparser";

import { ArmoryGem } from "@/types";

interface Props {
  gemList: ArmoryGem;
}

export const GemSlot = ({ gemList }: Props) => {
  if (!gemList) return;

  const { Effects, Gems } = gemList;

  const getGemClassCount = () => {
    type GemData = {
      [key: string]: number;
    };
    let gemData: GemData = {};

    Gems.forEach(data => {
      const gemNameSplit = DOMparsedData(data.Name).innerText.split(" ");
      const gemClass = gemNameSplit[1][0] + gemNameSplit[1][1];
      if (!gemData[gemClass]) {
        gemData[gemClass] = 1;
      } else {
        gemData[gemClass] += 1;
      }
    });
    const gemClassList = Object.keys(gemData);
    const result = gemClassList.map(v => [v, gemData[v]]);
    return result;
  };

  return (
    <Container>
      <ComponentLabel>
        장착 보석{" "}
        <LabelSideInfo>
          (
          {getGemClassCount().map((v, index) => {
            return (
              <span key={index}>
                {index === 0 ? "" : " / "}
                {`${v[1]} ${v[0]}`}
              </span>
            );
          })}
          )
        </LabelSideInfo>
      </ComponentLabel>
      <SimpleGemList>
        {Gems.map((value, index) => {
          const { Level, Icon, Grade, Name } = value;
          const gradeLevel = gradeNumber[Grade as GradeName] as GradeLevel;
          const gemName = DOMparsedData(Name).innerText.split(" ");
          const gemClass = gemName[1][0] + gemName[1][1];

          return (
            <li key={index}>
              <Image
                src={Icon}
                width={50}
                height={50}
                alt="보석"
                style={{ background: `${gradeBackground[gradeLevel]}` }}
              />
              <span>{`${Level} ${gemClass}`}</span>
              <GemHoverInfo>
                <p></p>
              </GemHoverInfo>
            </li>
          );
        })}
      </SimpleGemList>
      <ComponentLabel>보석 상세</ComponentLabel>
      <GemInfoList>
        {Effects.map((value, index) => {
          const { Icon, Name, Description } = value;
          return (
            <GemList key={index}>
              <Image src={Icon} width={50} height={50} alt="보석" />
              <GemInfo>
                <p>{Name}</p>
                <span>{Description}</span>
              </GemInfo>
            </GemList>
          );
        })}
      </GemInfoList>
    </Container>
  );
};

const Container = styled.div``;

const LabelSideInfo = styled.span`
  font-size: 13px;
  color: orange;
`;

const SimpleGemList = styled.div`
  display: flex;

  & li {
    margin: 0 5px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & img {
      border-radius: 5px;
      cursor: pointer;
    }
  }
  & span {
    font-size: 12px;
    font-weight: bold;
  }
`;

const GemInfoList = styled.div`
  display: grid;
  grid-template-columns: 330px 330px;
  grid-gap: 20px;
`;
const GemList = styled.li`
  display: flex;
  align-items: center;

  & img {
    margin-right: 10px;
    border-radius: 5px;
  }
`;
const GemInfo = styled.div`
  display: flex;
  flex-direction: column;

  & p {
    margin: 0;
    font-weight: bold;
  }
  & span {
    font-size: 13px;
  }
`;

const GemHoverInfo = styled.div``;
