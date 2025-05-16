import axios from '@shared/lib/axios.js';

/**
 * 현재 로그인된 사용자의 프로필 데이터를 가져옵니다.
 * @returns 프로필 데이터
 * src\constants\initialProfile.js
 */
export const getUserProfile = async () => {
  try {
    const response = await axios.get(`/profile/my`);
    return response.data; // 필요한 데이터만 반환
  } catch (error) {
    console.error('내 프로필 가져오기 에러:', error.message);
    throw error; // 호출한 쪽에서 에러를 처리할 수 있도록 재던짐
  }
};
