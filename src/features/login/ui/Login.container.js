import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../shared/api/auth';
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

      // 로컬 스토리지에 저장된 userData 확인 (이미 login 함수에서 저장됨)
      const storedUserData = JSON.parse(localStorage.getItem('userData'));
      console.log('Stored User Data:', storedUserData);

      navigate('/');
    } catch (error) {
      // eslint-disable-next-line
      alert('입력 정보를 확인해주세요.');
      console.error('Login failed', error);
    }
  };

  const onKakaoLogin = () => {
    window.location.href = 'http://goochul.iptime.org:8070/oauth2/authorization/kakao';
  };

  return (
    <LoginUI
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      handleSubmitLogin={handleSubmitLogin}
      onKakaoLogin={onKakaoLogin}
    />
  );
}
