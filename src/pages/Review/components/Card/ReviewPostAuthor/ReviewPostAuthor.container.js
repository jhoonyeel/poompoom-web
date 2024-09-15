import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReviewPostAuthorUI from './ReviewPostAuthor.presenter';

export default function ReviewPostAuthor({ profilePhoto, nickname, reviewType, isHovered }) {
  const [isFollow, setIsFollow] = useState(false);
  const handleFollow = () => {
    setIsFollow((follow) => !follow);
  };

  const navigate = useNavigate();
  const handleOnClick = (path) => () => {
    navigate(path);
  };

  return (
    <ReviewPostAuthorUI
      profilePhoto={profilePhoto}
      nickname={nickname}
      reviewType={reviewType}
      isHovered={isHovered}
      handleOnClick={handleOnClick}
      isFollow={isFollow}
      handleFollow={handleFollow}
    />
  );
}
