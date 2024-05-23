import styled, { keyframes } from 'styled-components';

export default function PointModalUI({ post, onClose, onConfirm }) {
  return (
    <ModalBackdrop>
      <Container>
        <h2>포스트 확인</h2>
        <div>
          <button type="button" onClick={onClose}>
            닫기
          </button>
          <button type="button" onClick={() => onConfirm(post)}>
            확인
          </button>
        </div>
      </Container>
    </ModalBackdrop>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
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

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 배경에 투명도 추가 */
  z-index: 1000; /* 모달보다 앞에 표시되도록 높은 값 설정 */
  animation: ${fadeIn} 0.3s ease-out forwards; // Fade in 애니메이션 적용
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  background-color: #fff; /* 배경에 투명도 추가 */
  padding: 20px;
  border-radius: 5px;
  z-index: 1001; // 모달이 백드롭 위에 나타나도록
  animation: ${zoomIn} 0.3s ease-out forwards; // Zoom in 애니메이션 적용
`;
