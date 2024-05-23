import { useState } from 'react';
import ReviewPostCardUI from './ReviewPostCard.presenter';

function ReviewPostCard({ post, onPostClick }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <ReviewPostCardUI
      post={post}
      onPostClick={onPostClick}
      isHovered={isHovered}
      handleMouseEnter={handleMouseEnter}
      handleMouseLeave={handleMouseLeave}
    />
  );
}

export default ReviewPostCard;
