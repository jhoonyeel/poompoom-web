import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../../assets/Login/SmallLogo.svg';

export const LogoSvg = styled(Logo)`
  position: absolute;
  left: 4rem;
  top: 3rem;
`;

export const Header = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 13rem;
  width: 100%;
`;

export const HeaderText = styled.div`
  height: 3rem;
  font-size: 2rem;
  margin: 0;
  padding: 4rem 0;
`;

export const TagButton = styled.button`
  background-color: #000;
  color: #fff;
  padding: 0.8rem;
  border-radius: 2px;
  border: 1px solid #000;
`;
export const TagText = styled.div`
  margin-left: 1rem;
  font-size: 1.3rem;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: auto;
  margin: 0;
  width: 100%;
`;

export const InputLabel = styled.label`
  position: absolute;
  top: ${(props) => (props.isFocused ? '0' : '1rem')};
  left: 0.3rem;
  font-size: ${(props) => (props.isFocused ? '0.8rem' : '1.8rem')};
  color: ${(props) => (props.isFocused ? '#000' : '#888')};
  transition: all 0.2s ease-in-out;
  cursor: text;
`;

export const InputContainer = styled.div`
  position: relative;
  margin-bottom: 1rem;
  width: 100%;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.6rem;
  padding-top: 1.6rem;
  border: none;
  border-bottom: 0.1rem solid #ccc;
  outline: none;
  font-size: 1rem;

  &:focus {
    border-bottom: 0.1rem solid #000;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 0.9rem;
  margin-top: 1rem;
`;

export const FileInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 2px;
  background-color: #f9f9f9;
  cursor: pointer;

  &::-webkit-file-upload-button {
    padding: 8px 12px;
    background-color: #3a3a3a;
    color: white;
    border: none;
    border-radius: 2px;
    cursor: pointer;
  }

  &::-webkit-file-upload-button:hover {
    background-color: #000;
  }
`;

export const VerButton = styled.button`
  background-color: #000;
  color: #fff;
  font-size: 1.1rem;
  padding: 0 1rem;
  margin-top: 1rem;
  margin-left: 1.2rem;
  border: #000;
  border-radius: 2px;
  cursor: pointer;
  width: 12.5rem;

  &:hover {
    background-color: #555;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 32rem;
  padding: 0;
  margin: auto;
  margin-bottom: 6rem;
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 3rem;
  padding: 0.6rem;
  background-color: #3a3a3a;
  color: white;
  border: #3a3a3a;
  border-radius: 2px;
  cursor: pointer;
  font-size: 1.3rem;
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const LinkInnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bold;
  padding: 0 0.5rem;

  &:hover {
    transform: scale(1.1);
  }
  &:visited {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
`;

export const Line = styled.div`
  text-decoration: none;
  color: black;
  font-weight: bold;
`;

export const LoverText = styled.div`
  font-size: 1.5rem;
  width: 45rem;
  padding: 1rem 0 4rem 0;
  margin: 0;
`;
