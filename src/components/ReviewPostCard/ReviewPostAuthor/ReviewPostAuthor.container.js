import { useLogin } from '../../../hooks/useLogin';
import { useNavigatePath } from '../../../hooks/useNavigatePath';
import ReviewPostAuthorUI from './ReviewPostAuthor.presenter';

export default function ReviewPostAuthor({ profilePhoto, nickname, reviewType, isFollowed, isContentHovered }) {
  const { userData: currentUser } = useLogin();
  const navigatePath = useNavigatePath();

  return (
    <ReviewPostAuthorUI
      profilePhoto={profilePhoto}
      nickname={nickname}
      currentUser={currentUser}
      reviewType={reviewType}
      isContentHovered={isContentHovered}
      isFollowed={isFollowed}
      navigatePath={navigatePath}
    />
  );
}
