import { useState } from 'react';
import styled from 'styled-components';
import PortalContainer from '../../../../components/common/PortalContainer';

export default function DatePlanModal({ isModalOpen, closeModal }) {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted content:', contents);
    closeModal(); // 모달 닫기
  };

  return (
    <PortalContainer isVisible={isModalOpen} id="date-modal-root">
      <ModalBackdrop onClick={closeModal} />
      <ModalContainer>
        <form onSubmit={handleSubmit}>
          <ContentList>
            {contents.map((content, index) => (
              <ContentItem key={index}>
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
                      style={{ display: 'none' }}
                    />
                    <Button onClick={() => document.getElementById(`file-upload-${index}`).click()}>이미지 추가</Button>
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
            ))}
          </ContentList>
          <SubmitButton type="submit">저장</SubmitButton>
        </form>
      </ModalContainer>
    </PortalContainer>
  );
}

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const ContentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ContentItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TextInput = styled.input`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
  height: 100px;
`;

const ImageInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Button = styled.button`
  padding: 8px 12px;
  background-color: #ababab;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 10px;
`;

const ImagePreview = styled.img`
  max-width: 100%;
  max-height: 200px;
  margin-top: 10px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #ababab;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
`;
