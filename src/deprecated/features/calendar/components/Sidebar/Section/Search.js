import styled from 'styled-components';

export default function Search() {
  return <SearchBar placeholder="텍스트로 일정/로그 검색하기" />;
}

const SearchBar = styled.input`
  width: 246px;
  height: 26px;
  border: 2px solid #e0e0e0;
  border-radius: 20px;
  margin-top: 20px;
  padding: 0 10px;
  outline: none;
`;
