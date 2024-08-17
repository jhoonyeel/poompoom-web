import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderText = styled.div``;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
  overflow: auto; /* Enable scrolling */
`;
export const Header = styled.h1`
  font-size: 32px;
  font-weight: bold;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  margin: 0 1rem;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70%;
  margin-top: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const Input = styled.input`
  margin-top: 5px;
  margin-bottom: 15px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const LoginButton = styled.button`
  padding: 10px;
  margin: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const StayLoginBtn = styled.button``;

export const LinkWrapper = styled.div``;
export const CustomLink = styled(Link)`
  margin-top: 20px;
  text-decoration: none;
  color: black;
  font-weight: bold;
  &:hover {
    font-size: 20px;
  }
  &:visited {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
`;
