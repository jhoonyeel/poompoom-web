import ReviewPostBackgroundUI from './ReviewPostBackground.presenter';

function ReviewPostBackground({ post, onPostClick, onMouseEnter, onMouseLeave }) {
  return (
    <ReviewPostBackgroundUI
      post={post}
      onPostClick={onPostClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  );
}

export default ReviewPostBackground;
