import { useEffect, useState } from 'react';
import axios from '../apis/axios';

export function useFetchProfilePicture(memberId) {
  const [profilePicture, setProfilePicture] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!memberId) {
      setLoading(false); // memberId가 없으면 로딩 종료
      return;
    }

    async function fetchProfilePicture() {
      try {
        const response = await axios.get(`/profile/${memberId}`);
        setProfilePicture(response.data.profileImagePath); // 프로필 사진 설정
      } catch (err) {
        console.error('Failed to fetch profile picture:', err);
        setError(err); // 에러 상태 저장
      } finally {
        setLoading(false); // 로딩 종료
      }
    }

    fetchProfilePicture();
  }, [memberId]); // memberId가 변경될 때마다 재호출

  return { profilePicture, loading, error };
}
