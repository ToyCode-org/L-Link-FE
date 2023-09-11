import React from "react";
import styled from "styled-components";
import { Character } from "@/types";
import { commonStyles } from "../common/component-style";
import { getPublicImage } from "@/util/getPubliceImage";
import Image from "next/image";
import Link from "next/link";

interface Props {
  characters: Character[];
}

export const AllCharacters = ({ characters }: Props) => {
  type CharactersInfo = {
    [key: string]: Character[];
  };
  // sort를 통해 불필요한 연산을 늘리고싶지 않아
  // object를 사용해 코드가 조금 길어지더라도 조금이라도 빠르게 설계
  let characterNameByServer: CharactersInfo = {};
  characters.forEach(info => {
    if (!characterNameByServer[info.ServerName]) {
      characterNameByServer[info.ServerName] = [info];
    } else {
      characterNameByServer[info.ServerName] = [
        ...characterNameByServer[info.ServerName],
        info,
      ];
    }
  });

  const objectKeys = Object.keys(characterNameByServer);

  return (
    <Container>
      {objectKeys.map((server, index) => {
        return (
          <React.Fragment key={index}>
            <ServerNameTag>{server}</ServerNameTag>
            <GridBox>
              {characterNameByServer[server].map((subCharacters, index) => {
                const {
                  ServerName,
                  ItemAvgLevel,
                  CharacterName,
                  CharacterLevel,
                  CharacterClassName,
                } = subCharacters;
                return (
                  <CharacterCard
                    key={index}
                    style={commonStyles.innerContent}
                    href={`search-character?character-name=${CharacterName}`}
                  >
                    <CardInnerFlex>
                      <Image
                        src={getPublicImage(`class/${CharacterClassName}`)}
                        width={50}
                        height={50}
                        alt="직업이미지"
                      />
                      <CardInfo>
                        <InfoBody>
                          <GuildName>{ServerName}</GuildName>
                          <span>{CharacterClassName}</span>
                        </InfoBody>
                        <InfoBody>
                          <CombatLvl>Lv.{CharacterLevel}</CombatLvl>
                          <span>{ItemAvgLevel}</span>
                        </InfoBody>
                      </CardInfo>
                    </CardInnerFlex>
                    <CardFooter>{CharacterName}</CardFooter>
                  </CharacterCard>
                );
              })}
            </GridBox>
          </React.Fragment>
        );
      })}
    </Container>
  );
};

const Container = styled.div``;

const GridBox = styled.ul`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 330px 330px;
  grid-row-gap: 30px;
`;

const ServerNameTag = styled.p`
  padding: 5px;
  border: 1px solid #7b7b7b;
  border-radius: 5px;
  background-color: black;
  font-weight: bold;
`;

const CharacterCard = styled(Link)`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const CardInnerFlex = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;

  & img {
    border-radius: 25px;
  }
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
`;

const InfoBody = styled.div`
  margin-left: 15px;

  & span {
    margin-right: 10px;
  }
`;

const GuildName = styled.span`
  color: skyblue;
`;

const CombatLvl = styled.span``;

const CardFooter = styled.span`
  padding-bottom: 10px;
  margin-left: 10px;
  font-weight: bold;
`;
