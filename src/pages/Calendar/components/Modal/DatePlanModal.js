/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import styled from 'styled-components';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export default function DatePlanModal({ isOpen, closeModal, onSubmit }) {
  const [contents, setContents] = useState([
    { type: 'text', value: '' },
    { type: 'image', value: '' },
    { type: 'url', value: '' },
  ]);

  const handleInputChange = (index, value) => {
    const updatedContents = [...contents];
    updatedContents[index].value = value;
    setContents(updatedContents);
  };

  const handleFileChange = (index, file) => {
    const updatedContents = [...contents];
    updatedContents[index].value = file ? URL.createObjectURL(file) : '';
    setContents(updatedContents);
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedContents = Array.from(contents);
    const [removed] = reorderedContents.splice(result.source.index, 1);
    reorderedContents.splice(result.destination.index, 0, removed);

    setContents(reorderedContents);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(contents); // 최종 데이터 제출
  };

  return (
    <ModalContainer isOpen={isOpen}>
      <form onSubmit={handleSubmit}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="contents">
            {(provided) => (
              <ContentList ref={provided.innerRef} {...provided.droppableProps}>
                {contents.map((content, index) => (
                  <Draggable key={`content-${index}`} draggableId={`content-${index}`} index={index}>
                    {(dragProvided) => (
                      <ContentItem
                        ref={dragProvided.innerRef}
                        {...dragProvided.draggableProps}
                        {...dragProvided.dragHandleProps}
                      >
                        {content.type === 'text' && (
                          <TextInput
                            type="text"
                            placeholder="텍스트 입력"
                            value={content.value}
                            onChange={(e) => handleInputChange(index, e.target.value)}
                          />
                        )}
                        {content.type === 'image' && (
                          <ImageInput>
                            <input
                              id={`file-upload-${index}`}
                              type="file"
                              accept="image/*"
                              onChange={(e) => handleFileChange(index, e.target.files[0])}
                              style={{ display: 'none' }} // input 자체는 숨기고
                            />
                            <Button onClick={() => document.getElementById(`file-upload-${index}`).click()}>
                              이미지 추가
                            </Button>
                            {content.value && <ImagePreview src={content.value} alt="Preview" />}
                          </ImageInput>
                        )}
                        {content.type === 'url' && (
                          <TextInput
                            type="url"
                            placeholder="URL 입력"
                            value={content.value}
                            onChange={(e) => handleInputChange(index, e.target.value)}
                          />
                        )}
                      </ContentItem>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ContentList>
            )}
          </Droppable>
        </DragDropContext>
        <ButtonContainer>
          <button type="button" onClick={closeModal}>
            취소
          </button>
          <button type="submit">저장</button>
        </ButtonContainer>
      </form>
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  padding: 20px;
  z-index: 1000;
`;

const ContentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ContentItem = styled.div`
  background-color: #f9f9f9;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const TextInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  font-size: 14px;
  color: #333333;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const ImageInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    display: inline-block;
    padding: 10px 16px;
    background-color: #007bff;
    color: #ffffff;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    text-align: center;

    &:hover {
      background-color: #0056b3;
    }
  }

  input[type='file'] {
    display: none;
  }
`;

const ImagePreview = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 16px;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: #0056b3;
  }
`;
