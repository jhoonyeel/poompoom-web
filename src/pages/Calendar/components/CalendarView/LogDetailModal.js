import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
import LogCreateModal from './LogCreateModal';

export default function LogDetailModal({ log, onClose, ClickedDate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = async () => {
    try {
      await axios.post(`/post/${log.id}/delete`);
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  const handleConfirmDelete = () => {
    setIsDeleting(true);
  };

  const closeDeleteConfirmation = () => {
    setIsDeleting(false);
  };

  if (isEditing) {
    return (
      <LogCreateModal
        onClose={() => setIsEditing(false)}
        onSubmit={async (updatedLog) => {
          try {
            await axios.post(`/post/${log.id}/update`, updatedLog);
            setIsEditing(false);
            onClose();
          } catch (error) {
            console.error(error);
          }
        }}
        ClickedDate={ClickedDate}
      />
    );
  }

  return (
    <Modal>
      <ModalContent>
        <ModalHeader>{log.title}</ModalHeader>
        <DetailBody>
          <p>{log.body}</p>
          <DateDisplay>일정 날짜: {new Date(ClickedDate).toLocaleDateString('ko-KR')}</DateDisplay>
        </DetailBody>
        {log.photos && (
          <ImagePreviewContainer>
            {log.photos.map((photo, index) => (
              <ImagePreview key={index} src={photo} alt={`Photo ${index}`} />
            ))}
          </ImagePreviewContainer>
        )}

        <ButtonContainer>
          <Button onClick={handleEdit}>수정</Button>
          <Button onClick={handleConfirmDelete}>삭제</Button>
        </ButtonContainer>

        <Button onClick={onClose}>닫기</Button>
      </ModalContent>

      {isDeleting && (
        <DeleteConfirmation>
          <p>정말 삭제하시겠습니까?</p>
          <ButtonContainer>
            <Button onClick={handleDelete}>예</Button>
            <Button onClick={closeDeleteConfirmation}>아니오</Button>
          </ButtonContainer>
        </DeleteConfirmation>
      )}
    </Modal>
  );
}

const DeleteConfirmation = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  text-align: center;
  z-index: 1100;

  & p {
    font-size: 1rem;
    color: #333;
    margin-bottom: 20px;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3000;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 24px;
  border-radius: 8px;
  width: 600px;
  height: 600px;
  overflow-y: auto;
`;

const ButtonContainer = styled.div``;

const Button = styled.button``;

const ImagePreviewContainer = styled.div``;

const ImagePreview = styled.img``;

const DateDisplay = styled.div`
  font-size: 0.9rem;
  color: #555;
  margin-top: 10px;
`;

const DetailBody = styled.div`
  margin-bottom: 20px;

  & p {
    font-size: 1rem;
    color: #333;
    line-height: 1.5;
  }
`;

const ModalHeader = styled.h2``;
