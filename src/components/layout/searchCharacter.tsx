import styled from "styled-components";
import { SearchIcon } from "../common/icons";
import { FormEvent } from "@/types";
import { useRouter } from "next/navigation";

export const SearchCharacter = () => {
  const router = useRouter();
  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    const element = document.getElementById(
      "search-character-name",
    ) as HTMLInputElement;
    const name = element.value;
    element.value = "";
    router.push(`/search-character?character-name=${name}`);
  };

  return (
    <SearchWrap onSubmit={onSubmitHandler}>
      <SearchInput
        id="search-character-name"
        type="text"
        placeholder="캐릭터명을 입력해주세요"
        autoComplete="off"
      />
      <SearchBtn type="submit">
        <SearchIcon />
      </SearchBtn>
    </SearchWrap>
  );
};

const SearchWrap = styled.form`
  margin: 0 25px 0 25px;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 0 10px 0 10px;
  width: 350px;
  height: 30px;
  border-radius: 10px;
  border: none;
`;

const SearchBtn = styled.button`
  padding: 0;
  border: none;
  border-color: none;
  background-color: none;
  & svg {
    position: absolute;
    transform: translate(-30px, -12px);
    width: 25px;
    height: 25px;
    color: #535353;
    cursor: pointer;
    &:hover {
      color: black;
    }
  }
`;
