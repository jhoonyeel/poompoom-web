import { useNavigatePath } from '../../../../hooks/useNavigatePath';
import ProfileEditUI from './ProfileEdit.presenter';

export default function ProfileEdit() {
  const navigatePath = useNavigatePath();

  return <ProfileEditUI navigatePath={navigatePath} />;
}
