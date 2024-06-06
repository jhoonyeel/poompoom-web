import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReviewPostAuthorUI from './ReviewPostAuthor.presenter';

export default function ReviewPostAuthor({ nickName, isHovered }) {
  const [isFollow, setIsFollow] = useState(false);
  const handleFollow = () => {
    setIsFollow((s) => !s);
  };

  const navigate = useNavigate();

  return (
    <ReviewPostAuthorUI
      nickName={nickName}
      navigate={navigate}
      isHovered={isHovered}
      isFollow={isFollow}
      handleFollow={handleFollow}
    />
  );
}
