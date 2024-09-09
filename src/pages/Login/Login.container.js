import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../apis/authService';
import LoginUI from './Login.presenter';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      const { accessToken } = await login(username, password);
      console.log('Access Token: ', accessToken); // Debug log
      navigate('/');
    } catch (error) {
      // eslint-disable-next-line
      alert('입력 정보를 확인해주세요.');
      console.error('Login failed', error);
    }
  };

  const onGoogleLogin = () => {
    window.location.href = 'http://goochul.iptime.org:8070/oauth2/authorization/google';
  };

  return (
    <LoginUI
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      handleSubmitLogin={handleSubmitLogin}
      onGoogleLogin={onGoogleLogin}
    />
  );
}
