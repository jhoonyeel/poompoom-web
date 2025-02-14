import { logout } from '../../../../apis/authService';
import ProfileEditUI from './ProfileEdit.presenter';

export default function ProfileEdit() {
  const handleLogout = () => {
    logout();

    window.location.href = '/';
  };

  return <ProfileEditUI handleLogout={handleLogout} />;
}
