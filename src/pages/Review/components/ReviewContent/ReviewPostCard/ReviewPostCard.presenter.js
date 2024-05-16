import ReviewPostBackground from '../ReviewPostBackground/ReviewPostBackground.container';
import ReviewPostShortcut from '../ReviewPostShortcut/ReviewPostShortcut.container';
import ReviewPostBody from '../ReviewPostBody/ReviewPostBody.container';

function ReviewPostCardUI({ post, onPostClick, isExpanded, handleMouseEnter, handleMouseLeave }) {
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

export default ReviewPostCardUI;
