import ReviewPostBackground from '../ReviewPostBackground/ReviewPostBackground.container';
import ReviewPostPreview from '../ReviewPostPreview/ReviewPostPreview.container';
import ReviewPostHashtags from '../ReviewPostHashtags/ReviewPostHashtags.container';
import ReviewPostAuthor from '../ReviewPostAuthor/ReviewPostAuthor.container';

function ReviewPostCardUI({ post, onPostClick, isExpanded, handleMouseEnter, handleMouseLeave }) {
  return (
    <div>
      <ReviewPostAuthor post={post} />
      <ReviewPostBackground
        post={post}
        onPostClick={onPostClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <ReviewPostHashtags />
      <ReviewPostPreview expanded={isExpanded} />
    </div>
  );
}

export default ReviewPostCardUI;
