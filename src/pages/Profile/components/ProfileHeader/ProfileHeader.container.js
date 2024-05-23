import { useNavigate } from 'react-router-dom';
import ProfileHeaderUI from './ProfileHeader.presenter';

function ProfileHeader() {
  const navigate = useNavigate();
  const handleOnClick = (path) => () => {
    navigate(path);
  };
  return <ProfileHeaderUI handleOnClick={handleOnClick} />;
}

export default ProfileHeader;
