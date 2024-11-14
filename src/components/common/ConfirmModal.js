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

const ModalText = styled.div``;
const ButtonContainer = styled.div``;
const CancelButton = styled.button``;
const ConfirmButton = styled.button``;
