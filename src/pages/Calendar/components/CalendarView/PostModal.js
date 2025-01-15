import React, { useState } from 'react';
import styled from 'styled-components';

export default function PostModal({ onClose, onSubmit }) {
  const [postData, setPostData] = useState({
    title: '',
    content: '',
    images: [], // 이미지 파일을 저장하는 배열
    createdAt: new Date().toISOString(), // 게시글 작성 시 현재 날짜 및 시간 추가
    selectedDate: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file)); // 이미지 미리보기 URL 생성
    setPostData((prevData) => ({
      ...prevData,
      images: [...prevData.images, ...imageUrls],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(postData);
    onClose();
  };

  return (
    <Modal>
      <ModalContent>
        <ModalHeader>게시글 작성</ModalHeader>
        <Form onSubmit={handleSubmit}>
          <Label>
            제목:
            <Input name="title" value={postData.title} onChange={handleInputChange} required />
          </Label>
          <Label>
            본문:
            <Textarea
              name="content"
              value={postData.content}
              onChange={handleInputChange}
              placeholder="여기에 본문을 작성하세요..."
              required
            />
          </Label>
          <Label>
            사진 추가:
            <ImageUploadButton>
              <input type="file" accept="image/*" multiple onChange={handleImageUpload} />
            </ImageUploadButton>
          </Label>
          <ImagePreviewContainer>
            {postData.images.map((image, index) => (
              <ImagePreview key={index} src={image} alt={`Uploaded ${index}`} />
            ))}
          </ImagePreviewContainer>
          <Label>
            날짜 선택:
            <Input
              type="date"
              name="selectedDate"
              value={postData.selectedDate || ''}
              onChange={(e) => setPostData({ ...postData, selectedDate: e.target.value })}
            />
          </Label>
          <DateDisplay>
            선택한 날짜:{' '}
            {postData.selectedDate ? new Date(postData.selectedDate).toLocaleDateString() : '날짜를 선택해주세요'}
          </DateDisplay>
          <ButtonContainer>
            <Button type="submit">저장</Button>
            <Button type="button" onClick={onClose}>
              취소
            </Button>
          </ButtonContainer>
        </Form>
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
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000; /* 높은 z-index로 EventDetailModal 위에 렌더링 */
`;

const ModalContent = styled.div`
  background: white;
  padding: 24px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const ModalHeader = styled.h2`
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: bold;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;

const Input = styled.input`
  padding: 8px;
  margin-top: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  padding: 8px;
  margin-top: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
  height: 150px;
`;

const ImageUploadButton = styled.div`
  margin-top: 8px;

  input[type='file'] {
    display: block;
  }
`;

const ImagePreviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`;

const ImagePreview = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 4px;
  object-fit: cover;
  border: 1px solid #ccc;
`;

const DateDisplay = styled.div`
  font-size: 12px;
  color: #666;
  text-align: right;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #0056b3;
  }
`;
