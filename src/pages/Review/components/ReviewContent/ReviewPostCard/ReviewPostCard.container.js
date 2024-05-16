import { useState } from 'react';
import ReviewPostCardUI from './ReviewPostCard.presenter';

function ReviewPostCard({ post, onPostClick }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };
  return (
    <ReviewPostCardUI
      post={post}
      onPostClick={onPostClick}
      isExpanded={isExpanded}
      handleMouseEnter={handleMouseEnter}
      handleMouseLeave={handleMouseLeave}
    />
  );
}

export default ReviewPostCard;
