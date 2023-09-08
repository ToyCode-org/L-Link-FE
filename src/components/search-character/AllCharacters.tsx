import React from "react";
import styled from "styled-components";
import { Character } from "@/types";

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
            <p>{server}</p>
            {characterNameByServer[server].map((subCharacters, index) => {
              const {
                ServerName,
                ItemAvgLevel,
                CharacterName,
                CharacterLevel,
                CharacterClassName,
              } = subCharacters;
              return (
                <li key={index}>
                  <div>
                    <div>직업이미지</div>
                    <div>
                      <div>{ServerName}</div>
                      <div>{CharacterClassName}</div>
                    </div>
                    <div>
                      <div>{CharacterLevel}</div>
                      <div>{ItemAvgLevel}</div>
                    </div>
                  </div>
                  <div>{CharacterName}</div>
                </li>
              );
            })}
          </React.Fragment>
        );
      })}
    </Container>
  );
};

const Container = styled.div``;
