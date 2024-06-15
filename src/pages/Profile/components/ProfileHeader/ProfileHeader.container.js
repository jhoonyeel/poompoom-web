import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProfileHeaderUI from './ProfileHeader.presenter';

function ProfileHeader() {
  const navigate = useNavigate();
  const handleOnClick = (path) => () => {
    navigate(path);
  };

  const [Profile, setProfile] = useState('');
  const { id } = useParams();

  const profileImage = 'http://via.placeholder.com/105x105.png';

  const fetchData = async () => {
    try {
      const response = await axios.get(`profile/1`);

      console.log('데이터', response.data);
      setProfile(response.data);
    } catch (error) {
      console.log('에러', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return <ProfileHeaderUI handleOnClick={handleOnClick} Profile={Profile} profileImage={profileImage} />;
}

export default ProfileHeader;
