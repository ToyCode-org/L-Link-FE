"use client";
import router from "next/router";
// Next 13 ~ app directory에서는 next/router로 사용 불가
// import {useRouter} from "next/navigation"과 "use client" 키워드를 통해
// 사용할 컴포넌트에서만 적용 가능
// 필자가 기존에 사용했던 router.ts 파일에 루트를 모아놓는 것 불가

export const goHome = () => {
  router.push("/");
};
export const goSearchCharacter = (name: string) => {
  router.push(`/search-character?${name}`);
};
export const goGuildRankings = () => {
  router.push("/guild-rankings");
};
export const goRankings = () => {
  router.push("/rankings");
};
