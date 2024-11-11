// useAuthRedirect.js
import { useNavigate } from 'react-router-dom';

const useAuthRedirect = () => {
  const navigate = useNavigate();

  const redirectToLogin = () => {
    console.error('Refresh Token이 만료되었습니다. 사용자를 로그아웃 시킵니다.');
    // 예: 로그아웃 처리 및 로그인 페이지로 리디렉션
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userData');
    // Redirect to login page or show message
    navigate('/login');
    // eslint-disable-next-line no-alert
    alert('Refresh Token이 만료되었습니다. 다시 로그인해주세요.');
  };

  return { redirectToLogin };
};

export default useAuthRedirect;
