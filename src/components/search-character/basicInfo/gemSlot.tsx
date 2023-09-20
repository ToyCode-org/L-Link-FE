import styled from "styled-components";
import Image from "next/image";
import { ArmoryGem } from "@/types";

interface Props {
  gemList: ArmoryGem;
}

export const GemSlot = ({ gemList }: Props) => {
  const { Effects, Gems } = gemList;

  return (
    <Container>
      <p>효과</p>
      {Effects.map((value, index) => {
        const { Name, Description } = value;
        return <li key={index}>{`${Name} ${Description}`}</li>;
      })}
      <p>보석이미지 base</p>
      {Gems.map((value, index) => {
        const { Level, Icon } = value;
        return (
          <li key={index}>
            <Image src={Icon} width={50} height={50} alt="보석" />
            <span>{Level}레벨</span>
          </li>
        );
      })}
    </Container>
  );
};

const Container = styled.div``;
