import styled from "styled-components";
import { SearchCharacter } from "./searchCharacter";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();

  const goHome = () => {
    router.push("/");
  };
  const goGuildRankings = () => {
    router.push("/guild-rankings");
  };
  const goRankings = () => {
    router.push("/rankings");
  };
  const goStatistics = () => {
    router.push("/statistics");
  };

  return (
    <HeaderWrap>
      <HeaderTop>
        <Title onClick={goHome}>LoaLink</Title>
        <SearchCharacter />
      </HeaderTop>
      <HeaderNav>
        <li onClick={goHome}>홈</li>
        <li onClick={goGuildRankings}>길드</li>
        <li onClick={goRankings}>순위</li>
        <li onClick={goStatistics}>통계</li>
      </HeaderNav>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #0f0f0f;

  z-index: 1;
`;

const HeaderTop = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0 10px 0;
`;

const Title = styled.h1`
  width: fit-content;
  margin: 0;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    filter: brightness(0.5);
  }
`;

const HeaderNav = styled.nav`
  display: flex;
  justify-content: center;
  border-top: 1px solid #7b7b7b;
  border-bottom: 1px solid #7b7b7b;
  background-color: #1b1b1b;
  & li {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    width: 120px;
    height: 40px;
    cursor: pointer;
    &:hover {
      background-color: #2e2e2e;
    }
  }
`;
