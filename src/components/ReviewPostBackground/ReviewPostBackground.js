function ReviewPostBackground({ post, onPostClick, onMouseEnter }) {
  return (
    <div>
      <button type="button" onClick={() => onPostClick(post)} onMouseEnter={onMouseEnter}>
        <img
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kakaocorp.com%2Fpage%2Fservice%2Fservice%2FKakaoTalkGift&psig=AOvVaw2gPrMdRaAyubxjz5FvMBlU&ust=1713371882204000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPDnrJWWx4UDFQAAAAAdAAAAABAD"
          alt="Post 사진"
        />
      </button>
    </div>
  );
}

export default ReviewPostBackground;
