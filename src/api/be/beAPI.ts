import axios from "axios";

// 외부 API의 캐싱을 위해 구현 예정 (express or NestJS) - 미정
const BACKEND = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API,
});

BACKEND.interceptors.request.use(config => {
  return config;
});

export const baseAPI = {
  getCalenderCaches: () => BACKEND.get(`/calender`),
  getDungeonsAndRaidsCaches: () => BACKEND.get(`/challenge-dungeons`),
};
