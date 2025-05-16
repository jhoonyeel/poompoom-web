import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as LogFooter } from '@shared/assets/Footer.svg';
import { ReactComponent as Logo } from '@shared/assets/SmallLogo.svg';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  padding: 0;
  margin: 0;

  background-color: #f0f0f0;
  overflow: auto; /* Enable scrolling */
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 516px;
  height: 1000px;

  padding: 0;

  margin: 100px auto 50px auto;
`;

export const HeaderText = styled.div`
  height: 44px;
  font-size: 32px;
  margin: 0;
  padding: 70px 0;
`;

export const Header = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
  margin: 0;
  padding: 0;

  font-size: 32px;
  font-weight: bold;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;
`;

export const LogoWrapper = styled.div`
  margin: 0 1rem;
`;

export const LogoSvg = styled(Logo)`
  position: absolute;
  left: 61px;
  top: 53px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin: 0;
  width: 100%;
`;

export const Label = styled.label`
  position: absolute;
  top: ${(props) => (props.isFocused ? '0' : '20px')};
  left: 5px;
  font-size: ${(props) => (props.isFocused ? '12px' : '28px')};
  color: ${(props) => (props.isFocused ? '#000' : '#888')};
  transition: all 0.2s ease-in-out;
  padding: 0;
  margin: 0;
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

export const StayLogin = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 12px;
`;

export const StayLoginLabel = styled.label`
  margin-left: 5px;
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
  margin-top: 20px;
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
  margin-top: 20px;
  text-decoration: none;
  color: black;
  font-weight: bold;
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
