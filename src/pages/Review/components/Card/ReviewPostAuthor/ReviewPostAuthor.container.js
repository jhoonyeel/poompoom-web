import { useState } from 'react';
import { useNavigatePath } from '../../../../../hooks/useNavigatePath';
import ReviewPostAuthorUI from './ReviewPostAuthor.presenter';

export default function ReviewPostAuthor({ profilePhoto, nickname, reviewType, isHovered }) {
  const [isFollow, setIsFollow] = useState(false);
  const handleFollow = () => {
    setIsFollow((follow) => !follow);
  };

  const navigatePath = useNavigatePath();

  return (
    <ReviewPostAuthorUI
      profilePhoto={profilePhoto}
      nickname={nickname}
      reviewType={reviewType}
      isHovered={isHovered}
      navigatePath={navigatePath}
      isFollow={isFollow}
      handleFollow={handleFollow}
    />
  );
}
