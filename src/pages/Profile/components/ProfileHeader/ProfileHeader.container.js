import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../../../apis/axios';
import { useNavigatePath } from '../../../../hooks/useNavigatePath';
import ProfileHeaderUI from './ProfileHeader.presenter';

export default function ProfileHeader() {
  const [profile, setProfile] = useState('');
  const { id } = useParams();

  const navigatePath = useNavigatePath();

  const fetchData = async () => {
    try {
      console.log('profile/1 API 실행');
      const response = await axios.get(`profile/1`);
      setProfile(response.data);

      console.log('데이터', response.data);
    } catch (error) {
      console.log('에러', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [id]);

  return <ProfileHeaderUI profile={profile} navigatePath={navigatePath} />;
}
