function ReviewPostBackground({ post, onPostClick, onMouseEnter, onMouseLeave }) {
  return (
    <div>
      <button type="button" onClick={() => onPostClick(post)} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <img src="http://via.placeholder.com/150x150.png" alt="Post 사진" />
      </button>
    </div>
  );
}

export default ReviewPostBackground;
