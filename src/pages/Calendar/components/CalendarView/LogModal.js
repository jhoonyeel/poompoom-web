import React, { useState } from 'react';
import styled from 'styled-components';

export default function LogModal({ onClose, onSubmit, postType, ClickedDate, initialLogData = {} }) {
  const [logData, setLogData] = useState({
    title: initialLogData.title || '',
    body: initialLogData.body || '',
    photos: initialLogData.photos || [],
    createdAt: new Date().toISOString(),
    type: postType,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLogData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setLogData((prevData) => ({
      ...prevData,
      photos: [...prevData.photos, ...imageUrls],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSubmit(logData);
    onClose();
    console.log('로그 데이터:', logData);

    /* try {
      if (initialLogData.id) {
        // Update existing log
        await axios.post(`/post/${initialLogData.id}/update`, {
          body: logData.body,
        });
        console.log('게시글 수정');
      } else {
        // Create new log
        const { data } = await axios.post('/post/create', {
          req: {
            calendarScheduleId: logData.calendarScheduleId,
            title: logData.title,
            body: logData.body,
          },
          photos: logData.photos,
        });
        console.log('게시글 생성.', data);
      }
   
    } catch (error) {
      console.error(error);
    } */
  };

  return (
    <Modal>
      <ModalContent>
        <ModalHeader>{initialLogData.id ? '로그 수정' : '로그 작성'}</ModalHeader>
        <Form onSubmit={handleSubmit}>
          {ClickedDate && <Label>선택한 날짜: {new Date(ClickedDate).toLocaleDateString()}</Label>}
          <Label>
            제목:
            <Input
              name="title"
              value={logData.title}
              onChange={handleInputChange}
              placeholder="제목을 입력하세요"
              required={!initialLogData.id} // 수정 시 제목은 변경 불가
              disabled={!!initialLogData.id}
            />
          </Label>
          <Label>
            본문:
            <Textarea
              name="body"
              value={logData.body}
              onChange={handleInputChange}
              placeholder="본문 내용을 입력하세요..."
              required
            />
          </Label>
          {!initialLogData.id && (
            <Label>
              사진 추가:
              <ImageUploadButton>
                <input type="file" accept="image/*" multiple onChange={handleImageUpload} />
              </ImageUploadButton>
            </Label>
          )}
          <ImagePreviewContainer>
            {logData.photos.map((photo, index) => (
              <ImagePreview key={index} src={photo} alt={`Uploaded ${index}`} />
            ))}
          </ImagePreviewContainer>
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
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 500px;
  padding: 20px;
`;

const ModalHeader = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Label = styled.label`
  font-size: 0.9rem;
  color: #555;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  color: #333;
  outline: none;
  transition: border 0.2s;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 4px rgba(0, 123, 255, 0.3);
  }
`;

const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  color: #333;
  resize: vertical;
  min-height: 100px;
  outline: none;
  transition: border 0.2s;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 4px rgba(0, 123, 255, 0.3);
  }
`;

const ImageUploadButton = styled.div`
  position: relative;
  display: inline-block;
  overflow: hidden;
  cursor: pointer;

  & input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }

  &:after {
    content: '사진 선택';
    display: inline-block;
    padding: 10px 20px;
    border: 1px solid #007bff;
    background: #007bff;
    color: #fff;
    border-radius: 8px;
    transition: background 0.2s;
  }

  &:hover:after {
    background: #0056b3;
  }
`;

const ImagePreviewContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const ImagePreview = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;

  &:first-of-type {
    background: #007bff;
    color: #fff;
  }

  &:first-of-type:hover {
    background: #0056b3;
  }

  &:last-of-type {
    background: #ddd;
    color: #333;
  }

  &:last-of-type:hover {
    background: #bbb;
  }
`;
