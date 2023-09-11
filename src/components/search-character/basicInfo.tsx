import styled from "styled-components";
import { CharacterArmories } from "@/types";
import Image from "next/image";

interface Props {
  characterArmories: CharacterArmories;
}

export const BasicInfo = ({ characterArmories }: Props) => {
  const {
    ArmoryAvatars,
    // ArmoryCard,
    // ArmoryEngraving,
    // ArmoryEquipment,
    // ArmoryGem,
    // ArmoryProfile,
  } = characterArmories;
  return (
    <Container>
      <p>basicInfo</p>
      <div>
        {ArmoryAvatars.map((v, i) => {
          return (
            <div key={i}>
              <div>{v.Type}</div>
              <div>{v.Name}</div>
              <Image src={v.Icon} width={50} height={50} alt="avater" />
            </div>
          );
        })}
      </div>
    </Container>
  );
};

const Container = styled.div``;
