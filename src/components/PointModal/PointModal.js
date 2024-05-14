import styled from 'styled-components';
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

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff; /* 배경에 투명도 추가 */
  padding: 20px;
  border-radius: 5px;
  z-index: 1000; /* 다른 요소 위에 나타나도록 높은 값 설정 */
`;
