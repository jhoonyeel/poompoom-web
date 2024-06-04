import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 40%;
  height: 100%;
  margin-left: 5%;
`;
export const SearchInputBox = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
export const SearchIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
  color: lightblue;
  z-index: 1;
  margin-right: 5px;
`;
export const MinusIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
  color: lightblue;
  z-index: 1;
`;
export const XCircleIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
  color: lightgray;
  z-index: 1;
  cursor: pointer;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 35%;
  font-size: 16px;
  border: 3px solid lightblue;
  border-radius: 20px;
  outline: none;
  padding-left: 70px;
  margin-left: -65px;
  margin-right: -40px;
`;

export const RecommendBox = styled.nav`
  background-color: white;
`;
export const RecommendParagraph = styled.p`
  padding: 20px;
`;
export const RecommendList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const RecommendItem = styled.li`
  border: 3px solid #f2f2f2;
  border-radius: 20px;
  margin: 0.5rem 1rem;
  padding: 0.3rem;
  cursor: pointer;
`;
