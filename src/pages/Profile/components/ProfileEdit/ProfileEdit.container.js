import { useNavigate } from 'react-router-dom';
import ProfileEditUI from './ProfileEdit.presenter';

function ProfileEdit() {
  const navigate = useNavigate();
  const handleOnClick = (path) => () => {
    navigate(path);
  };

  return <ProfileEditUI handleOnClick={handleOnClick} />;
}

export default ProfileEdit;
