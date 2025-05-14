import { useLocation } from 'react-router-dom';
import { useNavigatePath } from '../../../../shared/hooks/useNavigatePath';
import ProfileTabMenuUI from './ProfileTabMenu.presenter';

export default function ProfileMenuBox() {
  const location = useLocation();
  const navigatePath = useNavigatePath();

  return <ProfileTabMenuUI currentPath={location.pathname} navigatePath={navigatePath} />;
}
