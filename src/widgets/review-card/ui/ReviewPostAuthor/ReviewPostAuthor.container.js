import { useNavigatePath } from '../../../../shared/hooks/useNavigatePath';
import ReviewPostAuthorUI from './ReviewPostAuthor.presenter';

export default function ReviewPostAuthor({ profilePhoto, nickname, reviewType, isContentHovered }) {
  const navigatePath = useNavigatePath();

  return (
    <ReviewPostAuthorUI
      profilePhoto={profilePhoto}
      nickname={nickname}
      reviewType={reviewType}
      isContentHovered={isContentHovered}
      navigatePath={navigatePath}
    />
  );
}
