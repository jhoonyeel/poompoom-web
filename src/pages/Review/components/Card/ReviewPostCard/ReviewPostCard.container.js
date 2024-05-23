import { useState } from 'react';
import ReviewPostCardUI from './ReviewPostCard.presenter';
import Confetti from '../ReviewConfetti/ReviewConfetti.container';

function ReviewPostCard({ post, onPostClick }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <ReviewPostCardUI
        post={post}
        onPostClick={onPostClick}
        isHovered={isHovered}
        setIsHovered={setIsHovered}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
      <Confetti isHovered={isHovered} />
    </div>
  );
}
export default ReviewPostCard;
