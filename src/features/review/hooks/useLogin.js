import { useEffect, useState } from 'react';
import { useNavigatePath } from '../../../shared/hooks/useNavigatePath';
import { login as authServiceLogin, logout as authServiceLogout } from '../../login/api/authService';

export function useLogin() {
  const [userData, setUserData] = useState(null); // userData 상태 관리
  const navigatePath = useNavigatePath();

  // 페이지 새로고침 시 로컬 스토리지에서 userData 불러오기
  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData)); // 로컬 스토리지에서 불러와 상태에 저장
    }
  }, []);

  // authService에서 authServiceLogin를 호출
  const login = async (username, password) => {
    try {
      const { userData: newUserData } = await authServiceLogin(username, password); // 새로 받은 userData를 다른 이름으로 할당
      setUserData(newUserData); // 로그인 성공 시 상태 업데이트
      localStorage.setItem('userData', JSON.stringify(newUserData)); // 로컬 스토리지에 저장

      navigatePath('/'); // 로그인 후 페이지 이동
    } catch (error) {
      console.error('Login failed', error);
      // eslint-disable-next-line no-alert
      alert('로그인에 실패했습니다. 다시 시도해주세요.');
    }
  };

  // authService에서 authService를Logout 호출
  const logout = () => {
    authServiceLogout(); // 로컬 스토리지와 Recoil에서 토큰과 사용자 정보 제거
    setUserData(null); // 상태 초기화
    navigatePath('/login'); // 로그아웃 후 로그인 페이지로 이동
  };

  return { userData, login, logout }; // userData, login, logout 반환
}
