import styled from "styled-components";
import { CharacterArmories, Equipment } from "@/types";
import {
  BlankEquipment,
  EquipmentSlot,
  AccessorySlot,
  MountedEngraving,
} from "./basicInfo/equipmentSlot";

interface Props {
  characterArmories: CharacterArmories;
}

export const BasicInfo = ({ characterArmories }: Props) => {
  const {
    // ArmoryAvatars,
    // ArmoryCard,
    ArmoryEngraving,
    ArmoryEquipment,
    // ArmoryGem,
    // ArmoryProfile,
  } = characterArmories;

  let EQUIPMENTS: (string | Equipment)[] = [
    "투구",
    "어깨",
    "상의",
    "하의",
    "장갑",
    "무기",
    "목걸이",
    "귀걸이",
    "귀걸이",
    "반지",
    "반지",
    "팔찌",
    "어빌리티 스톤",
  ];

  ArmoryEquipment.forEach(item => {
    const idx = EQUIPMENTS.indexOf(item.Type);
    if (idx !== -1) EQUIPMENTS[idx] = item;
  });

  const equipments = [
    EQUIPMENTS[0],
    EQUIPMENTS[1],
    EQUIPMENTS[2],
    EQUIPMENTS[3],
    EQUIPMENTS[4],
    EQUIPMENTS[5],
  ];
  const accessories = [
    EQUIPMENTS[6],
    EQUIPMENTS[7],
    EQUIPMENTS[8],
    EQUIPMENTS[9],
    EQUIPMENTS[10],
    EQUIPMENTS[11],
    EQUIPMENTS[12],
  ];

  return (
    <Container>
      <EquipmentNav>
        <li>장비</li>
        <li>보석</li>
      </EquipmentNav>
      <Content>
        <Equipments>
          <EquipmentList>
            {equipments.map((item, index) => {
              if (typeof item === "string") {
                return <BlankEquipment key={index} type={item} />;
              }
              return <EquipmentSlot key={index} equipmentInfo={item} />;
            })}
            <MountedEngraving armoryEngraving={ArmoryEngraving} />
          </EquipmentList>
          <Accessory>
            {accessories.map((item, index) => {
              if (typeof item === "string") {
                return <BlankEquipment key={index} type={item} />;
              }
              return <AccessorySlot key={index} equipmentInfo={item} />;
            })}
          </Accessory>
        </Equipments>
      </Content>
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

const Content = styled.div``;

const Equipments = styled.div`
  display: flex;
`;

const EquipmentList = styled.div`
  width: 340px;
`;
const Accessory = styled.div`
  width: 340px;
`;
