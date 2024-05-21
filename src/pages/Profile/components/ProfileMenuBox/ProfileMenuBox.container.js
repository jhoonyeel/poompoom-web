/* 프로필 네비게이션 바 */
import { useNavigate } from 'react-router-dom';
import ProfileMenuBoxUI from './ProfileMenuBox.presenter';

function ProfileMenuBox() {
  const navigate = useNavigate();

  const handleOnClick = (path) => () => {
    navigate(path);
  };
  return <ProfileMenuBoxUI handleOnClick={handleOnClick} />;
}

export default ProfileMenuBox;
