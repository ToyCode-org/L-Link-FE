"use client";
import styled from "styled-components";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { loaAPI } from "@/api/loa/loaAPI";
import Image from "next/image";
import { CharacterArmories, Characters } from "@/types";

type getUserInfo = {
  characters: Characters;
  characterArmories: CharacterArmories | null;
};

export default function SearchCharacter() {
  const characterName = useSearchParams().get("character-name") as string;
  const [{ characters, characterArmories }, setUserInfo] =
    useState<getUserInfo>({
      characters: [],
      characterArmories: null,
    });
  const getCharacterInfo = async (name: string) => {
    const allCharacters = loaAPI.getCharacters(name);
    const getCharacterArmories = loaAPI.getArmories(name);
    const getUserInfo = await Promise.all([
      allCharacters,
      getCharacterArmories,
    ]);

    if (!getUserInfo[0].data) {
      setUserInfo(prev => ({
        ...prev,
        characters: [],
        characterArmories: null,
      }));
      return alert("검색결과가 없습니다.");
    }

    setUserInfo(prev => ({
      ...prev,
      characters: getUserInfo[0].data,
      characterArmories: getUserInfo[1].data,
    }));
  };

  useEffect(() => {
    getCharacterInfo(characterName);
  }, [characterName]);

  // console.log(characters, characterArmories);

  if (characterArmories === null) {
    return (
      <Container>
        <div
          style={{ textAlign: "center", fontWeight: "bold", fontSize: "20px" }}
        >
          존재하지 않는 캐릭터입니다.
        </div>
      </Container>
    );
  }

  const {
    ServerName,
    GuildName,
    CharacterClassName,
    Title,
    CharacterLevel,
    ItemAvgLevel,
    ExpeditionLevel,
    PvpGradeName,
    TownLevel,
    TownName,
    CharacterImage,
  } = characterArmories.ArmoryProfile;
  const profileInfo = [
    ["서버", ServerName],
    ["길드", GuildName || " - "],
    ["클래스", CharacterClassName],
    ["칭호", Title || " - "],
    ["전투", CharacterLevel],
    ["아이템", ItemAvgLevel],
    ["원정대", ExpeditionLevel],
    ["PVP", PvpGradeName || " - "],
    ["영지", `Lv.${TownLevel}${TownName}`],
  ];

  return (
    <Container>
      <NameBox>
        <p>{characterName}</p>
        <span></span>
        {/* TODO : 갱신버튼 등 추가 예정 */}
      </NameBox>
      <InterfaceBox>
        <UserProfile>
          <UserData>
            <ul>
              {profileInfo.map((list, index) => {
                return (
                  <li key={index}>
                    <span>{list[0]}</span> <span>{list[1]}</span>
                  </li>
                );
              })}
            </ul>
            <Image
              width={150}
              height={200}
              src={CharacterImage}
              alt="character-image"
              priority
            />
          </UserData>
          <UserCollections>
            <p>수집형 포인트</p>
            <div></div>
          </UserCollections>
        </UserProfile>
        <div>
          {/* 임시 리스트 */}
          <nav>
            {characters.map((v, i) => {
              return <li key={i}>{v.CharacterName}</li>;
            })}
          </nav>
        </div>
      </InterfaceBox>
    </Container>
  );
}

const Container = styled.div`
  padding: 15px;
  background-color: black;
  border-radius: 15px;
`;

const NameBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #7b7b7b;
  border-radius: 5px;

  & p {
    padding: 0 10px 0 10px;
    font-size: 18px;
    font-weight: bold;
  }
`;

const InterfaceBox = styled.div``;
const UserProfile = styled.div``;

const UserData = styled.div``;
const UserCollections = styled.div``;
