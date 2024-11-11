import { useLocation } from 'react-router-dom';
import { useNavigatePath } from '../../../../hooks/useNavigatePath';
import ProfileMenuBoxUI from './ProfileMenuBox.presenter';

export default function ProfileMenuBox() {
  const location = useLocation();
  const navigatePath = useNavigatePath();

  return <ProfileMenuBoxUI navigatePath={navigatePath} currentPath={location.pathname} />;
}
