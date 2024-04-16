function ReviewPostBackground({ post, onPostClick, onMouseEnter }) {
  return (
    <div>
      <button type="button" onClick={() => onPostClick(post)} onMouseEnter={onMouseEnter}>
        <img src=".png" alt="Post 사진" />
      </button>
      <h3>Post 이미지(글 지우기)</h3>
    </div>
  );
}

export default ReviewPostBackground;
