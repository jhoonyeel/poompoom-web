import React from 'react';
import styled from 'styled-components';

export default function PostDetailModal({ post, onClose, onNext, onPrevious, showNavigation }) {
  return (
    <Modal>
      <ModalContent>
        <ModalHeader>
          {showNavigation && <NavigationButton onClick={onPrevious}>&lt;</NavigationButton>}
          <TitleContainer>
            <Title>{post.title}</Title>
            <DateDisplay>
              {new Date(post.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
              })}
            </DateDisplay>
          </TitleContainer>

          {showNavigation && <NavigationButton onClick={onNext}>&gt;</NavigationButton>}
        </ModalHeader>
        <Content>
          <TextContent dangerouslySetInnerHTML={{ __html: post.content }} />
          {post.images && post.images.length > 0 && (
            <ImageGallery>
              {post.images.map((image, index) => (
                <Image key={index} src={image} alt={`Uploaded ${index}`} />
              ))}
            </ImageGallery>
          )}
        </Content>
        <CloseButton onClick={onClose}>닫기</CloseButton>
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

const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: bold;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Title = styled.h2`
  font-size: 18px;
  flex-grow: 1;
  text-align: center;
`;

const DateDisplay = styled.span`
  font-size: 14px;
  color: gray;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const TextContent = styled.div`
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

const NavigationButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 30px;
  margin: 0 50px;
`;

const CloseButton = styled.button`
  display: block;
  margin: 20px auto 0;
  padding: 10px 20px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
