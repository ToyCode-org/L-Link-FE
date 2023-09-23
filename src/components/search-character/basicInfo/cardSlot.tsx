import styled from "styled-components";
import { ComponentLabel } from "@/components/common/components";
import Image from "next/image";
import { getPublicImage } from "@/util/getPubliceImage";

import { ArmoryCard } from "@/types";

interface Props {
  cardList: ArmoryCard;
}
export const CardSlot = ({ cardList }: Props) => {
  if (!cardList) return;

  //   console.log(cardList);
  const cards = cardList.Cards;

  return (
    <Container>
      <ComponentLabel>카드</ComponentLabel>
      <CardBox>
        {cards.map((data, index) => {
          const { Icon } = data;
          return (
            <li key={index}>
              <Image src={Icon} width={110} height={200} alt="card" />
              <CardAwake
                src={getPublicImage("card/awake-card")}
                width={110}
                height={80}
                alt="awake"
              />
            </li>
          );
        })}
      </CardBox>
    </Container>
  );
};

const Container = styled.div``;

const CardBox = styled.div`
  display: flex;

  & li {
    margin-right: 4px;
  }
`;

const CardAwake = styled(Image)`
  object-position: 0px 5px;
`;
