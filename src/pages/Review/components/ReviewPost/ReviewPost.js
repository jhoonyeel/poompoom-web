import { useState } from 'react';
import ReviewPostBackground from '../../../../components/ReviewPostBackground/ReviewPostBackground';
import ReviewPostShortcut from '../../../../components/ReviewPostShortcut/ReviewPostShortcut';
import ReviewPostBody from '../../../../components/ReviewPostBody/ReviewPostBody';

function ReviewPost({ post, onPostClick }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };
  return (
    <div>
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
