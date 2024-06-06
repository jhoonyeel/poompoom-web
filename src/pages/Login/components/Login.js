import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { axios, login, logout } from '../../../apis/authService';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [access, setAccess] = useState('');
  const navigate = useNavigate();

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      const { accessToken } = await login(username, password);
      console.log('Access Token: ', accessToken); // Debug log
      setAccess(accessToken);
      navigate('/');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const handleRefreshToken = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        '/reissue',
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('refreshToken')}`,
          },
        },
      );
      const { access: accessToken, refresh: refreshToken } = response.data;
      localStorage.setItem('accessToken', accessToken);
      if (refreshToken) {
        localStorage.setItem('refreshToken', refreshToken);
      }
      setAccess(accessToken);
    } catch (error) {
      console.error('Refresh token failed', error);
    }
  };

  const handleLogout = () => {
    logout();
    setAccess('');
    navigate('/login');
  };

  return (
    <Container>
      <CustomLink to="#">로그인 페이지</CustomLink>
      <FormContainer>
        <Form onSubmit={handleSubmitLogin}>
          <div>
            <Label>Username:</Label>
            <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <Label>Password:</Label>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <Button type="submit">Login</Button>
          <Button onClick={handleRefreshToken}>Refresh</Button>
          <Button onClick={handleLogout}>Logout</Button>
        </Form>
      </FormContainer>
      {access && (
        <TokenContainer>
          <TokenTitle>Access Token</TokenTitle>
          <TokenValue>{access}</TokenValue>
        </TokenContainer>
      )}
      <CustomLink to="../../SignUp">회원가입으로 이동</CustomLink>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
  overflow: auto; /* Enable scrolling */
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70%;
  margin-top: 20px;
`;

const Form = styled.form`
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

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
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

const TokenContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const TokenTitle = styled.h2`
  margin: 0 0 10px 0;
`;

const TokenValue = styled.p`
  word-break: break-all;
`;

const CustomLink = styled(Link)`
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
