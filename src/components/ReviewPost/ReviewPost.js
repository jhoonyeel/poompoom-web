import { useState } from 'react';
import ReviewPostBackground from '../ReviewPostBackground/ReviewPostBackground';
import ReviewPostShortcut from '../ReviewPostShortcut/ReviewPostShortcut';
import ReviewPostBody from '../ReviewPostBody/ReviewPostBody';

function ReviewPost({ post, onPostClick }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };
  return (
    <div className="post-item">
      <ReviewPostBackground onClick={() => onPostClick(post)} onMouseEnter={handleMouseEnter} />
      <ReviewPostBody expanded={isExpanded} />
      <ReviewPostShortcut
        onClick={() => onPostClick(post)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
}

export default ReviewPost;
