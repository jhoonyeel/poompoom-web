import { useLocation } from 'react-router-dom';
import { useNavigatePath } from '../../../../shared/hooks/useNavigatePath';
import ProfileMenuBoxUI from './ProfileMenuBox.presenter';

export default function ProfileMenuBox() {
  const location = useLocation();
  const navigatePath = useNavigatePath();

  return <ProfileMenuBoxUI currentPath={location.pathname} navigatePath={navigatePath} />;
}
