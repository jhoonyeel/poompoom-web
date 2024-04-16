function PointModal({ post, onClose, onConfirm }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>포스트 확인</h2>
        <p>{post.title}</p>
        <p>{post.content}</p>
        <button type="button" onClick={onClose}>
          닫기
        </button>
        <button type="button" onClick={() => onConfirm(post)}>
          확인
        </button>
      </div>
    </div>
  );
}

export default PointModal;
