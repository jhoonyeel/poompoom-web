import { useLocation, useNavigate } from 'react-router-dom';
import ProfileMenuBoxUI from './ProfileMenuBox.presenter';

export default function ProfileMenuBox() {
  const location = useLocation();
  const navigate = useNavigate();
  const handleOnClick = (path) => () => {
    navigate(path);
  };

  return <ProfileMenuBoxUI handleOnClick={handleOnClick} currentPath={location.pathname} />;
}
