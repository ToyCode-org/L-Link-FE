import React from "react";
import styled from "styled-components";
import { Character } from "@/types";
import { commonStyles } from "../common/component-style";

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
                  <CharacterCard key={index} style={commonStyles.innerContent}>
                    <CardInnerFlex>
                      <div>직업이미지</div>
                      <div>
                        <CardInfo>
                          <div>{ServerName}</div>
                          <div>{CharacterClassName}</div>
                        </CardInfo>
                        <CardInfo>
                          <div>{CharacterLevel}</div>
                          <div>{ItemAvgLevel}</div>
                        </CardInfo>
                      </div>
                    </CardInnerFlex>
                    <div>{CharacterName}</div>
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

const CharacterCard = styled.li`
  display: flex;
  flex-direction: column;
`;

const CardInnerFlex = styled.div`
  display: flex;
  align-items: center;
`;

const CardInfo = styled.div`
  display: flex;
`;
