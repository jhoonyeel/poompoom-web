import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import axios from '../apis/axios';
import { profilePictureState } from '../recoil/atoms';

export function useFetchProfilePicture() {
  const [profilePicture, setProfilePicture] = useRecoilState(profilePictureState);

  const userData = JSON.parse(localStorage.getItem('userData'));
  const memberId = userData.memberId;

  useEffect(() => {
    async function fetchProfilePicture() {
      try {
        const response = await axios.get(`/profile/${memberId}`);

        setProfilePicture(response.data.profileImagePath); // API 응답에 맞게 경로 수정
      } catch (error) {
        console.error('Failed to fetch profile picture:', error);
      }
    }

    // 프로필 사진이 없을 때만 요청을 보내도록 조건 추가
    if (!profilePicture) {
      fetchProfilePicture();
    }
  }, [profilePicture, setProfilePicture]);
}
