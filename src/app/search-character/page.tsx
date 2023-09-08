"use client";
import styled from "styled-components";
import { commonStyles } from "@/components/common/component-style";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { loaAPI } from "@/api/loa/loaAPI";
import { CharacterArmories, Characters } from "@/types";
import { AllCharacters } from "@/components/search-character/AllCharacters";
import { UserProfile } from "@/components/search-character/userProfile";

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
    const getAllCharacters = loaAPI.getCharacters(name);
    const getCharacterArmories = loaAPI.getArmories(name);
    const getUserInfo = await Promise.all([
      getAllCharacters,
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

  if (characterArmories === null) {
    return (
      <ContentWrap>
        <div
          style={{ textAlign: "center", fontWeight: "bold", fontSize: "20px" }}
        >
          존재하지 않는 캐릭터입니다.
        </div>
      </ContentWrap>
    );
  }

  // console.log("아머리", characterArmories);
  // console.log("캐릭터", characters);

  const detailInfoNav = ["세팅", "스킬", "수집", "보유 캐릭터"];

  return (
    <ContentWrap>
      <NameBox style={commonStyles.container}>
        <p>{characterName}</p>
        <span></span>
        {/* TODO : 갱신버튼 등 추가 예정 */}
      </NameBox>
      <InterfaceBox>
        <UserProfile characterArmories={characterArmories} />
        <DetailInfo style={commonStyles.container}>
          <DetailInfoNav>
            {detailInfoNav.map((infos, index) => {
              return <li key={index}>{infos}</li>;
            })}
          </DetailInfoNav>
          <AllCharacters characters={characters} />
        </DetailInfo>
      </InterfaceBox>
    </ContentWrap>
  );
}

const ContentWrap = styled.div`
  padding: 15px;
`;

const NameBox = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & p {
    margin-left: 15px;
    padding: 0 10px 0 10px;
    font-size: 18px;
    font-weight: bold;
  }
`;

const InterfaceBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

// const UserProfileWrap = styled.div``;

// const UserData = styled.div`
//   margin-bottom: 20px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: #15181d; // res image 배경색
//   border: 1px solid #7b7b7b;
//   border-radius: 10px;

//   & img {
//     border-radius: 10px;
//   }
// `;

// const CharacterInfo = styled.ul`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-evenly;
//   width: 140px;
//   height: 260px;
//   font-size: 13px;
//   & li {
//     padding-left: 10px;
//     width: max-content;
//     & span:first-child {
//       margin-right: 10px;
//       padding: 5px;
//       background-color: black;
//       border-radius: 5px;
//     }
//   }
// `;

// const UserCollections = styled.div`
//   display: flex;
//   flex-direction: column;

//   & p {
//     margin: 0;
//     padding: 5px;
//     background-color: #15181d;
//     border-radius: 10px 10px 0 0;
//     text-align: center;
//   }
// `;

// const CollectionList = styled.div`
//   padding: 5px;
//   display: flex;
//   justify-content: center;

//   & li {
//     margin: 0 5px 0 5px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;

//     & img {
//       border-radius: 5px;
//     }
//   }
// `;

const DetailInfo = styled.div`
  padding: 10px;
  width: 680px;
  border: 1px solid #7b7b7b;
  border-radius: 10px;
`;

const DetailInfoNav = styled.nav`
  display: flex;
  justify-content: center;

  & li {
    width: 100px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #15181d;
    font-weight: bold;
  }
`;
