import styled, { keyframes } from 'styled-components';
import PostDetail from '../PostDetail/PostDetail';

function PointModal({ post, onClose, onConfirm }) {
  return (
    <Container className="modal">
      <div className="modal-content">
        <h2>포스트 확인</h2>
        <PostDetail post={post} />
        <button type="button" onClick={onClose}>
          닫기
        </button>
        <button type="button" onClick={() => onConfirm(post)}>
          확인
        </button>
      </div>
    </Container>
  );
}

export default PointModal;

const zoomIn = keyframes`
  from {
    transform: scale(0.5);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const Container = styled.div`
  position: fixed;
  top: 10%;
  left: 16%;
  transform: translate(-50%, -50%);
  background-color: #fff; /* 배경에 투명도 추가 */
  padding: 20px;
  border-radius: 5px;
  z-index: 1001; // 모달이 백드롭 위에 나타나도록
  animation: ${zoomIn} 0.3s ease-out forwards; // Zoom in 애니메이션 적용
`;
