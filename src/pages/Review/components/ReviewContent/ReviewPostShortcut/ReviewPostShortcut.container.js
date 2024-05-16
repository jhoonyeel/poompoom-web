import ReviewPostShortcutUI from './ReviewPostShortcut.presenter';

function ReviewPostShortcut({ post, onPostClick, onMouseEnter, onMouseLeave }) {
  return (
    <ReviewPostShortcutUI
      post={post}
      onPostClick={onPostClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  );
}

export default ReviewPostShortcut;
