import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SignUpSocial() {
  const [jwtToken, setJwtToken] = useState(null);
  const [responseData, setResponseData] = useState(null);
  const navigate = useNavigate();

  /** @description 리디엑션 후 분리된 토큰 전송 */
  const sendJwtToBackend = async (token) => {
    try {
      const response = await axios.get(`http://goochul.iptime.org:8070/OAuth/social`, {
        params: { jwt: token },
      });

      setResponseData(response.data);
      console.log('JWT 인증 성공:', response.data);

      localStorage.setItem('accessToken', response.data.access);
      localStorage.setItem('refreshToken', response.data.refresh);

      navigate('/signUp/social/form');
    } catch (error) {
      console.error('JWT 인증 실패:', error);
    }
  };

  /** @description 현재 URL에서 쿼리스트링 파라미터(?token)추출. (jwt와 쿼리스트링 분리) */
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const tokenFromUrl = queryParams.get('token');
    if (tokenFromUrl) {
      setJwtToken(tokenFromUrl);

      // URL에서 토큰을 제거하고 URL 정리
      const newUrl = window.location.pathname;
      window.history.replaceState({}, '', newUrl);
      sendJwtToBackend(tokenFromUrl);
    }
  }, []);

  useEffect(() => {
    if (jwtToken) {
      localStorage.setItem('jwtToken', jwtToken);
    }
  }, [jwtToken]);

  return (
    <div>
      <h1>Signup Social</h1>

      {jwtToken ? (
        <div>
          <h2>JWT Token:</h2>
          <p>{jwtToken}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      {responseData && (
        <div>
          <h2>Server Response:</h2>
          <p>Access Token: {responseData.access}</p>
          <p>Refresh Token: {responseData.refresh}</p>
          <p>User ID: {responseData.id}</p>
        </div>
      )}
    </div>
  );
}
