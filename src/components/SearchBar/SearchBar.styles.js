import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 40%;
`;
export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  user-select: none;

  /* Vertical Line */
  &::before {
    content: '';
    position: absolute;
    left: 36px;
    width: 2px;
    height: 24px;
    background-color: #06564e;
  }
`;
export const SearchInput = styled.input`
  padding-left: 44px;
  width: 100%;
  height: 40px;
  font-size: 16px;
  border: 3px solid ${({ hasSearchTerm, isFocused }) => (hasSearchTerm || isFocused ? '#d9d9d9' : '#06564e')};
  border-radius: ${({ hasSearchTerm, isFocused }) => (hasSearchTerm || isFocused ? '20px 20px 0 0' : '20px')};
  outline: none;
  user-select: none;

  &::placeholder {
    font-size: 14px;
  }
`;
export const DeleteBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 50px;
  width: 16px;
  height: 16px;
  background: none;
  border: none;
  color: #999;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: #555;
  }
`;

export const SearchBtn = styled.button`
  position: absolute;
  right: 8px;
  border: none;
  width: 24px;
  height: 24px;
  background-color: #06564e;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: rgba(6, 86, 78, 0.9);
  }
`;
