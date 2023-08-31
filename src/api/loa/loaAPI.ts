import axios from 'axios';

// api 저장소
// https://developer-lostark.game.onstove.com/usage-guide#API-AUCTIONS

const LOSTARK = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LOSTARK_API_HOST,
});

LOSTARK.interceptors.request.use(config => {
  const lostArkJWT = process.env.NEXT_PUBLIC_LOSTARK_API_KEY;
  config.headers.Authorization = `bearer ${lostArkJWT}`;
  config.headers.Accept = 'application/json';
  return config;
});

export const loaAPI = {
  getCharacters: (characterName: string) => LOSTARK.get(`/characters/${characterName}/siblings`),
};
