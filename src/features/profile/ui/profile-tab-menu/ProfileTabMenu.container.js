import { useNavigatePath } from '@shared/hooks/useNavigatePath.js';
import { useLocation } from 'react-router-dom';
import ProfileTabMenuUI from './ProfileTabMenu.presenter.js';

const ProfileMenuBox = () => {
  const location = useLocation();
  const navigatePath = useNavigatePath();

  return <ProfileTabMenuUI currentPath={location.pathname} navigatePath={navigatePath} />;
};

export default ProfileMenuBox;
