/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React, { useRef, useState } from 'react';
import styled from 'styled-components';

export default function PostCreateModal({ onClose, onSubmit, postType, ClickedDate }) {
  const [postData, setPostData] = useState({
    title: '',
    content: '',
    createdAt: new Date().toISOString(), // 게시글 작성 시 현재 날짜 및 시간 추가
    type: postType,
    id: new Date(),
  });
  const contentRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePaste = (e) => {
    const clipboardItems = e.clipboardData.items;
    for (let i = 0; i < clipboardItems.length; i++) {
      const item = clipboardItems[i];
      if (item.type.startsWith('image/')) {
        const file = item.getAsFile();
        const reader = new FileReader();

        reader.onload = (event) => {
          insertImage(event.target.result);
        };

        reader.readAsDataURL(file);
        e.preventDefault();
      }
    }
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        insertImage(event.target.result);
      };
      reader.readAsDataURL(file);
    });
  };

  const insertImage = (imageUrl) => {
    const contentEditable = contentRef.current;
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);

    const img = document.createElement('img');
    img.src = imageUrl;
    img.style.maxWidth = '100%';
    img.style.height = 'auto';

    range.insertNode(img);
    range.collapse(false);

    selection.removeAllRanges();
    selection.addRange(range);

    saveContent();
  };

  const saveContent = () => {
    const contentEditable = contentRef.current;
    setPostData((prevData) => ({ ...prevData, content: contentEditable.innerHTML }));
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
        {ClickedDate && <Label>일정 날짜: {new Date(ClickedDate).toLocaleDateString()}</Label>}
        <Form onSubmit={handleSubmit}>
          <Label>
            제목:
            <Input name="title" value={postData.title} onChange={handleInputChange} required />
          </Label>
          <Label>
            본문:
            <ContentEditable
              ref={contentRef}
              contentEditable
              onInput={saveContent}
              onPaste={handlePaste}
              placeholder="여기에 본문을 작성하세요..."
            />
          </Label>
          <ImageUploadButton>
            사진 추가:
            <input type="file" accept="image/*" multiple onChange={handleImageUpload} />
          </ImageUploadButton>
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
  z-index: 2000;
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

const ContentEditable = styled.div`
  padding: 8px;
  margin-top: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-height: 150px;
  overflow-y: auto;
  white-space: pre-wrap;
`;

const ImageUploadButton = styled.div`
  margin-top: 8px;

  input[type='file'] {
    display: block;
  }
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
