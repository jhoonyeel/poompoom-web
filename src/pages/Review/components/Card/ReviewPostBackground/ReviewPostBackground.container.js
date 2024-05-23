import ReviewPostBackgroundUI from './ReviewPostBackground.presenter';

function ReviewPostBackground({ post, onPostClick, onMouseEnter, onMouseLeave, expanded, setIsExpanded }) {
  return (
    <div>
      <ReviewPostBackgroundUI
        post={post}
        onPostClick={onPostClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        expanded={expanded}
        setIsExpanded={setIsExpanded}
      />
    </div>
  );
}

export default ReviewPostBackground;
