import axios from 'axios';
import React from 'react';

function ReissueButton() {
  const handleReissue = async () => {
    try {
      const refreshToken = localStorage.getItem('refreshToken'); // 리프레시 토큰 가져오기
      if (!refreshToken) {
        console.error('Refresh token not found');
        return;
      }

      // /reissue API 호출
      const response = await axios.post(
        '/reissue',
        {}, // 요청 본문 (필요시 데이터를 여기에 추가)
        {
          headers: {
            refresh: refreshToken,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );

      // 응답으로부터 새로운 토큰들을 저장
      const { access: newAccessToken, refresh: newRefreshToken } = response.data;

      if (newAccessToken) {
        localStorage.setItem('accessToken', newAccessToken); // 새로운 accessToken 저장
      }
      if (newRefreshToken) {
        localStorage.setItem('refreshToken', newRefreshToken); // 새로운 refreshToken 저장
      }

      console.log('Token reissued successfully:', response.data);
    } catch (error) {
      if (error.response) {
        console.error('Reissue error response:', error.response);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Reissue error:', error.message);
      }
    }
  };

  return (
    <button type="button" onClick={handleReissue}>
      Reissue Token
    </button>
  );
}

export default ReissueButton;
