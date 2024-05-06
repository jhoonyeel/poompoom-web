function ReviewPostBackground({ post, onPostClick, onMouseEnter, onMouseLeave }) {
  return (
    <div>
      <button type="button" onClick={() => onPostClick(post)} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <img src="http://via.placeholder.com/250x330.png" alt="Post 사진" /> {/* 250x330, 220x300 */}
      </button>
    </div>
  );
}

export default ReviewPostBackground;
