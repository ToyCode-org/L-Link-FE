import styled from "styled-components";
import Image from "next/image";
import { ArmoryGem } from "@/types";
import {
  gradeBackground,
  gradeNumber,
  GradeLevel,
  GradeName,
} from "../itemInfo";

interface Props {
  gemList: ArmoryGem;
}

export const GemSlot = ({ gemList }: Props) => {
  const { Gems } = gemList;

  return (
    <Container>
      {Gems.map((value, index) => {
        const { Level, Icon, Grade } = value;
        const gradeLevel = gradeNumber[Grade as GradeName] as GradeLevel;
        // const thisEffect = Effects[index];

        return (
          <li key={index}>
            <Image
              src={Icon}
              width={50}
              height={50}
              alt="보석"
              style={{ background: `${gradeBackground[gradeLevel]}` }}
            />
            <span>{Level}레벨</span>
          </li>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  & li {
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
  }
`;
