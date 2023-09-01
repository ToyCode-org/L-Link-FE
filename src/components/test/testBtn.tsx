import { loaAPI } from "@/api/loa/loaAPI";

export const TestBtn = () => {
  const characterName = "기가막힌댱";
  const serverName = "루페온";
  const test1 = async () => {
    const data = await loaAPI.getCharacters(characterName);
    // console.log(data);
    return data;
  };

  const test2 = async () => {
    const data = await loaAPI.getArmories(characterName);
    // console.log(data);
    return data;
  };
  const test3 = async () => {
    const data = await loaAPI.getProfilesByArmories(characterName);
    // console.log(data);
    return data;
  };
  const test4 = async () => {
    const data = await loaAPI.getEquipmentByArmories(characterName);
    // console.log(data);
    return data;
  };
  const test5 = async () => {
    const data = await loaAPI.getAvatarsByArmories(characterName);
    // console.log(data);
    return data;
  };
  const test6 = async () => {
    const data = await loaAPI.getCombatSkillsByArmories(characterName);
    // console.log(data);
    return data;
  };
  const test7 = async () => {
    const data = await loaAPI.getEngravingsByArmories(characterName);
    // console.log(data);
    return data;
  };
  const test8 = async () => {
    const data = await loaAPI.getCardsByArmories(characterName);
    // console.log(data);
    return data;
  };
  const test9 = async () => {
    const data = await loaAPI.getGemsByArmories(characterName);
    // console.log(data);
    return data;
  };
  const test10 = async () => {
    const data = await loaAPI.getColosseumsByArmories(characterName);
    // console.log(data);
    return data;
  };
  const test11 = async () => {
    const data = await loaAPI.getCollectiblesByArmories(characterName);
    // console.log(data);
    return data;
  };
  const test12 = async () => {
    const data = await loaAPI.getGuildRankings(serverName);
    // console.log(data);
    return data;
  };
  const test13 = async () => {
    const data = await loaAPI.getChallengeAbyssDungeonsByGameContents();
    // console.log(data);
    return data;
  };
  const test14 = async () => {
    const data = await loaAPI.getChallengeGuardianRaidsByGameContents();
    // console.log(data);
    return data;
  };
  const test15 = async () => {
    const data = await loaAPI.getCalenderByGameContents();
    // console.log(data);
    return data;
  };

  return (
    <div>
      <p>버튼 테스트</p>
      <button onClick={test1}>getCharacters</button>
      <button onClick={test2}>getArmories</button>
      <button onClick={test3}>getProfilesByArmories</button>
      <button onClick={test4}>getEquipmentByArmories</button>
      <button onClick={test5}>getAvatarsByArmories</button>
      <button onClick={test6}>getCombatSkillsByArmories</button>
      <button onClick={test7}>getEngravingsByArmories</button>
      <button onClick={test8}>getCardsByArmories</button>
      <button onClick={test9}>getGemsByArmories</button>
      <button onClick={test10}>getColosseumsByArmories</button>
      <button onClick={test11}>getCollectiblesByArmories</button>
      <button onClick={test12}>getGuildRankings</button>
      <button onClick={test13}>getChallengeAbyssDungeonsByGameContents</button>
      <button onClick={test14}>getChallengeGuardianRaidsByGameContents</button>
      <button onClick={test15}>getCalenderByGameContents</button>
    </div>
  );
};
