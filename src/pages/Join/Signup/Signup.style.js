import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ReactComponent as LogFooter } from '../../../assets/Footer/Footer.svg';

import { ReactComponent as Logo } from '../../../assets/Login/SmallLogo.svg';

export const LogoSvg = styled(Logo)`
  position: absolute;
  left: 61px;
  top: 53px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: auto;
  margin: 0;
  width: 100%;
`;
export const HeaderText = styled.div`
  height: 44px;
  font-size: 32px;
  margin: 0;
  padding: 70px 0;
`;
export const InputLabel = styled.label`
  position: absolute;
  top: ${(props) => (props.isFocused ? '0' : '20px')};
  left: 5px;
  font-size: ${(props) => (props.isFocused ? '12px' : '28px')};
  color: ${(props) => (props.isFocused ? '#000' : '#888')};
  transition: all 0.2s ease-in-out;
`;

export const InputContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  padding-top: 25px;
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
  font-size: 16px;

  &:focus {
    border-bottom: 1px solid #000;
  }
`;

export const InputField = styled.input`
  width: 300px;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;

  &:hover {
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 516px;
  height: 1000px;

  padding: 0;

  margin: 100px auto 50px auto;
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 50px;
  padding: 10px;
  background-color: #3a3a3a;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 20px;
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

  &:hover {
    transform: scale(1.05);
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
  font-size: 24px;
  width: 715px;
  padding: 30px 0;
`;

export const FooterContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 0;
  margin: 0;
`;

export const FooterBenner = styled(LogFooter)`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  object-fit: cover; /* 화면을 채우도록 설정 */
`;

export const MenuContainer = styled.div`
  position: absolute;
  top: 15%;
  right: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const MenuText = styled.button`
  @import url('https://fonts.googleapis.com/css2?family=Shrikhand&display=swap');

  font-family: 'Shrikhand', cursive;
  font-size: 24px;
  background-color: transparent;
  color: #ffffff;

  border: none;
  padding: 4px;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;
