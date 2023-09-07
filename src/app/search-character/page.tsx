"use client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { loaAPI } from "@/api/loa/loaAPI";

export default function SearchCharacter() {
  const characterName = useSearchParams().get("character-name") as string;

  const getCharacterInfo = async (name: string) => {
    const allCharacters = await loaAPI.getCharacters(name);
    // console.log(allCharacters);
    // if(allCharacters.data === null) return some alert

    const characterArmories = await loaAPI.getArmories(name);
    // console.log(characterArmories);
    return [allCharacters, characterArmories];
    // characterArmories.data
    // =>
    // ArmoryAvatars *
    // ArmoryCard *
    // ArmoryEngraving *
    // ArmoryEquipment *
    // ArmoryGem *
    // ArmoryProfile ***
    // Collectibles **
  };

  useEffect(() => {
    getCharacterInfo(characterName);
  }, [characterName]);

  return (
    <div>
      <p>dl testt</p>
    </div>
  );
}
