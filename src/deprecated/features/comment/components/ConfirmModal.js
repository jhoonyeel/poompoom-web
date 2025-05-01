import styled from 'styled-components';
import PortalContainer from './PortalContainer';

export default function ConfirmModal({ isOpen, closeModal, onConfirm, ModalMessage }) {
  return (
    <PortalContainer isVisible={isOpen} id="modal-root">
      <ModalBackdrop onClick={closeModal} />
      <Container>
        <ModalText>{ModalMessage}</ModalText>
        <ButtonContainer>
          <ConfirmButton onClick={onConfirm}>확인</ConfirmButton>
          <CancelButton onClick={closeModal}>취소</CancelButton>
        </ButtonContainer>
      </Container>
    </PortalContainer>
  );
}

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  z-index: 1000;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const ModalText = styled.div`
  font-size: 18px;
  margin-bottom: 20px;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const CancelButton = styled.button`
  background-color: #949494;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #b9b9b9;
  }
`;

const ConfirmButton = styled.button`
  background-color: rgba(230, 143, 143, 0.84);
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 154, 154, 0.84);
  }
`;
