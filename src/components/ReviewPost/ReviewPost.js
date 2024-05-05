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
      <ReviewPostBackground
        post={post}
        onPostClick={onPostClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <ReviewPostBody expanded={isExpanded} />
      <ReviewPostShortcut
        post={post}
        onPostClick={onPostClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
}

export default ReviewPost;
