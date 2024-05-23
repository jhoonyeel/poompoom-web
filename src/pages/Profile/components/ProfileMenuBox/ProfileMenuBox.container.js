/* 프로필 네비게이션 바 */
import { useLocation, useNavigate } from 'react-router-dom';
import ProfileMenuBoxUI from './ProfileMenuBox.presenter';

function ProfileMenuBox() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleOnClick = (path) => () => {
    navigate(path);
  };
  return <ProfileMenuBoxUI handleOnClick={handleOnClick} currentPath={location.pathname} />;
}

export default ProfileMenuBox;
