import styled from "styled-components";
import { CharacterArmories } from "@/types";
import Image from "next/image";

interface Props {
  characterArmories: CharacterArmories;
}

export const BasicInfo = ({ characterArmories }: Props) => {
  const {
    // ArmoryAvatars,
    // ArmoryCard,
    // ArmoryEngraving,
    ArmoryEquipment,
    // ArmoryGem,
    // ArmoryProfile,
  } = characterArmories;
  // console.log(characterArmories);

  return (
    <Container>
      <EquipmentNav>
        <li>장비</li>
        <li>보석</li>
      </EquipmentNav>
      <EquipmentList>
        {ArmoryEquipment.map((item, index) => {
          // console.log(JSON.parse(item.Tooltip));
          if (index !== ArmoryEquipment.length - 1)
            return (
              <EquipmentItem key={index}>
                <ItemType>
                  {item.Type === "어빌리티 스톤" ? "스톤" : item.Type}
                </ItemType>
                <Image src={item.Icon} width={50} height={50} alt="avater" />
                <ItemName>{item.Name}</ItemName>
              </EquipmentItem>
            );
        })}
      </EquipmentList>
    </Container>
  );
};

const Container = styled.div``;

const EquipmentNav = styled.nav`
  display: flex;
  margin-bottom: 15px;

  & li {
    width: 50px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #15181d;
    font-weight: bold;
    cursor: pointer;

    &:first-child {
      border-radius: 10px 0 0 10px;
    }
    &:last-child {
      border-radius: 0 10px 10px 0;
    }

    &:hover {
      background-color: #080a0c;
    }
  }
`;

const EquipmentList = styled.div``;

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
  font-size: 12px;
  background-color: #52525276;
  border-radius: 10px 0 0 0;
`;
const ItemName = styled.div`
  margin: 0 10px;
  display: flex;
  align-items: center;
`;
