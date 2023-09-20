"use client";
import styled from "styled-components";
import { commonStyles } from "@/components/common/component-style";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { loaAPI } from "@/api/loa/loaAPI";
import { CharacterArmories, Characters } from "@/types";
import { UserProfile } from "@/components/search-character/userProfile";
import { BasicInfo } from "@/components/search-character/basicInfo";
import { Skills } from "@/components/search-character/skills";
import { Collections } from "@/components/search-character/collections";
import { AllCharacters } from "@/components/search-character/AllCharacters";
import { useIndexHandler } from "@/hooks/useIndexHandler";
import { GemSlot } from "@/components/search-character/basicInfo/gemSlot";

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
      alert("검색결과가 없습니다.");
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

  const detailInfoNav = ["기본정보", "스킬", "수집", "보유 캐릭터"];
  const { indexNumber, indexHandler } = useIndexHandler();

  return (
    <ContentWrap>
      {characterArmories === null ? (
        <div
          style={{ textAlign: "center", fontWeight: "bold", fontSize: "20px" }}
        >
          존재하지 않는 캐릭터입니다.
        </div>
      ) : (
        <>
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
                  return (
                    <li key={index} onClick={() => indexHandler(index)}>
                      {infos}
                    </li>
                  );
                })}
              </DetailInfoNav>
              {indexNumber === 0 ? (
                <BasicInfo characterArmories={characterArmories} />
              ) : null}
              {indexNumber === 1 ? <Skills /> : null}
              {indexNumber === 2 ? <Collections /> : null}
              {indexNumber === 3 ? (
                <AllCharacters characters={characters} />
              ) : null}
              <GemSlot gemList={characterArmories.ArmoryGem} />
            </DetailInfo>
          </InterfaceBox>
        </>
      )}
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
