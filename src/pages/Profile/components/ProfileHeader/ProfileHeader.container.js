import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProfileHeaderUI from './ProfileHeader.presenter';

function ProfileHeader() {
  const [profile, setProfile] = useState('');
  const { id } = useParams();

  const navigate = useNavigate();
  const handleOnClick = (path) => () => {
    navigate(path);
  };

  const fetchData = async () => {
    try {
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

  return <ProfileHeaderUI handleOnClick={handleOnClick} profile={profile} />;
}

export default ProfileHeader;
