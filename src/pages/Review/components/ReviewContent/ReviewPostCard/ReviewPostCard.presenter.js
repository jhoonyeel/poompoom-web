import ReviewPostBackground from '../ReviewPostBackground/ReviewPostBackground.container';

import ReviewPostHashtags from '../ReviewPostHashtags/ReviewPostHashtags.container';
import ReviewPostAuthor from '../ReviewPostAuthor/ReviewPostAuthor.container';

function ReviewPostCardUI({ post, onPostClick, isExpanded, handleMouseEnter, handleMouseLeave, setIsExpanded }) {
  return (
    <div>
      <ReviewPostAuthor post={post} />
      <ReviewPostBackground
        post={post}
        onPostClick={onPostClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        expanded={isExpanded}
        setIsExpanded={setIsExpanded}
      />

      <ReviewPostHashtags />
    </div>
  );
}

export default ReviewPostCardUI;
