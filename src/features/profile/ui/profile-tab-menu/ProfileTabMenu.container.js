import { useNavigatePath } from '@shared/hooks/useNavigatePath';
import { useLocation } from 'react-router-dom';
import ProfileTabMenuUI from './ProfileTabMenu.presenter';

const ProfileMenuBox = () => {
  const location = useLocation();
  const navigatePath = useNavigatePath();

  return <ProfileTabMenuUI currentPath={location.pathname} navigatePath={navigatePath} />;
};

export default ProfileMenuBox;
