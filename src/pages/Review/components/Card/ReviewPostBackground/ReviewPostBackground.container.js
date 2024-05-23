import ReviewPostBackgroundUI from './ReviewPostBackground.presenter';

function ReviewPostBackground({ post, onPostClick, onMouseEnter, onMouseLeave, isHovered, setIsHovered }) {
  return (
    <div>
      <ReviewPostBackgroundUI
        post={post}
        onPostClick={onPostClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        isHovered={isHovered}
        setIsHovered={setIsHovered}
      />
    </div>
  );
}

export default ReviewPostBackground;
