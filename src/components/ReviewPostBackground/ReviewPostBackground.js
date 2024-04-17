function ReviewPostBackground({ post, onPostClick, onMouseEnter }) {
  return (
    <div>
      <button type="button" onClick={() => onPostClick(post)} onMouseEnter={onMouseEnter}>
        <img src="http://via.placeholder.com/150x150.png" alt="Post 사진" />
      </button>
    </div>
  );
}

export default ReviewPostBackground;
