import React from 'react';
import styled from 'styled-components';

export default function PostDetailModal({ post, onClose }) {
  console.log('PostDetailModal Opened:', post);

  return (
    <Modal>
      <ModalContent>
        <ModalHeader>{post.title}</ModalHeader>
        <Content>
          <TextContent>{post.content}</TextContent>
          {post.images && post.images.length > 0 && (
            <ImageGallery>
              {post.images.map((image, index) => (
                <Image key={index} src={image} alt={`Uploaded ${index}`} />
              ))}
            </ImageGallery>
          )}
        </Content>
        <ButtonContainer>
          <Button onClick={onClose}>닫기</Button>
        </ButtonContainer>
      </ModalContent>
    </Modal>
  );
}

// Styled Components
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

const ModalHeader = styled.h2`
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: bold;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const TextContent = styled.p`
  white-space: pre-line;
  line-height: 1.5;
`;

const ImageGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 4px;
  object-fit: cover;
  border: 1px solid #ccc;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background: #0056b3;
  }
`;
