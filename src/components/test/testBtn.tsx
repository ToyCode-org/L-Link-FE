import { loaAPI } from '@/api/loa/loaAPI';

export const TestBtn = () => {
  const test = async () => {
    const data = await loaAPI.getCharacters('기가막힌댱');
    return data;
  };
  return <button onClick={test}>테스트버튼</button>;
};
