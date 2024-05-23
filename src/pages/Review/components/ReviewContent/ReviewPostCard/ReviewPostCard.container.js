import { useState } from 'react';
import ReviewPostCardUI from './ReviewPostCard.presenter';
import Confetti from '../ReviewConfetti/ReviewConfetti.container';

function ReviewPostCard({ post, onPostClick }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  return (
    <div>
      <ReviewPostCardUI
        post={post}
        onPostClick={onPostClick}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
      <Confetti isExpanded={isExpanded} />
    </div>
  );
}
export default ReviewPostCard;
