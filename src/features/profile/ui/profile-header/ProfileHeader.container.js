import { useNavigatePath } from '@shared/hooks/useNavigatePath.js';
import axios from '@shared/lib/axios.js';
import { useEffect, useState } from 'react';
import ProfileHeaderUI from './ProfileHeader.presenter.js';

const ProfileHeader = () => {
  const [profile, setProfile] = useState('');
  const userData = JSON.parse(localStorage.getItem('userData'));
  const memberId = userData?.memberId;

  const navigatePath = useNavigatePath();

  const fetchData = async () => {
    try {
      const response = await axios.get(`profile/${memberId}`);
      setProfile(response.data);

      console.log('프로필헤더', response.data);
    } catch (error) {
      console.log('에러', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [memberId]);

  return <ProfileHeaderUI profile={profile} navigatePath={navigatePath} />;
};

export default ProfileHeader;
