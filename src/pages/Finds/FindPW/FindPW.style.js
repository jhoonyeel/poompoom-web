// FindPWStyled.js
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 516px;
  height: 1000px;
  margin: 100px auto 50px auto;
`;

export const Header = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
`;

export const HeaderText = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 300px;
  padding: 10px;
  margin-bottom: 15px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const Button = styled.button`
  width: 300px;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #454545;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`;
