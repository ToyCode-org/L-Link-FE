"use client";
import Router from "next/router";

export const goHome = () => {
  Router.push("/");
};
export const goSearchCharacter = (name: string) => {
  Router.push(`/search-character?${name}`);
};
export const goGuildRankings = () => {
  Router.push("/guild-rankings");
};
export const goRankings = () => {
  Router.push("/rankings");
};
