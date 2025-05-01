import { useState } from 'react';
import styled from 'styled-components';

const user = JSON.parse(localStorage.getItem('userData'));

export default function EventCreateModal({ onClose, onSubmit }) {
  const [eventData, setEventData] = useState({
    title: '',
    category: null, // 카테고리 객체를 저장
    startDate: '',
    endDate: '',
    writer: '',
    createdAt: new Date().toISOString(), // 알람 생성용 작성시간 추가
  });

  const categories = [
    { color: '#4B0082', label: '남자친구' },
    { color: '#cc2200', label: '여자친구' },
    { color: '#FFD700', label: 'OO데이' },
    { color: '#FF69B4', label: 'n주년' },
    { color: '#4169E1', label: '일반데이트' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleCategoryChange = (category) => {
    setEventData({ ...eventData, category, memo: '' }); // 전체 객체를 저장
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (eventData.endDate < eventData.startDate) {
      alert('종료 날짜는 시작 날짜보다 늦어야 합니다.');
      return;
    }
    const eventToSubmit = {
      ...eventData,
      ...(eventData.memo !== undefined && { memo: eventData.memo }),
      // 카테고리 종류에 따른 메모 필드 추가
      writer: user?.memberId,
    };
    onSubmit(eventToSubmit);
    onClose();
  };

  const selectedCategoryLabel = eventData.category?.label;
  const isMemoVisible = ['남자친구', '여자친구'].includes(selectedCategoryLabel);

  return (
    <Modal>
      <ModalContent>
        <ModalHeader>새로운 일정을 생성하세요</ModalHeader>
        <Form onSubmit={handleFormSubmit}>
          <Label>
            제목:
            <Input type="text" name="title" value={eventData.title} onChange={handleInputChange} required />
          </Label>
          <Label>
            카테고리:
            <div style={{ display: 'flex', alignItems: 'center', marginTop: 8 }}>
              <CategorySelector>
                {categories.map((cat) => (
                  <CategoryButton
                    key={cat.color}
                    color={cat.color}
                    isSelected={eventData.category?.color === cat.color}
                    onClick={() => handleCategoryChange(cat)}
                    type="button"
                  />
                ))}
              </CategorySelector>
              {selectedCategoryLabel && <SelectedLabel>{`Selected: ${selectedCategoryLabel}`}</SelectedLabel>}
            </div>
          </Label>
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <Label>
              시작 날짜:
              <Input type="date" name="startDate" value={eventData.startDate} onChange={handleInputChange} required />
            </Label>
            <Label>
              종료 날짜:
              <Input type="date" name="endDate" value={eventData.endDate} onChange={handleInputChange} required />
            </Label>
          </div>
          {isMemoVisible && (
            <Label>
              메모:
              <Textarea name="memo" value={eventData.memo} onChange={handleInputChange} maxLength={800} />
            </Label>
          )}
          {/* 개인 일정(태그-남자친구,여자친구)의 경우 메모만 존재하며 게시글 및 회고록 작성 불가 */}
          {/* value:eventData.memo - 객체 내 속성 부재 시 undefined 반환됨 */}
          <div style={{ display: 'flex' }}>
            <SubmitButton type="submit">저장</SubmitButton>
            <CancelButton type="button" onClick={onClose}>
              취소
            </CancelButton>
          </div>
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
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 24px;
  border-radius: 8px;
  width: 400px;
`;

const ModalHeader = styled.h2`
  margin-bottom: 16px;
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
  font-weight: bold;
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
`;

const CategorySelector = styled.div`
  display: flex;
  gap: 8px;
`;

const CategoryButton = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${(props) => props.color};
  border: ${(props) => (props.isSelected ? '2px solid black' : '1px solid #ccc')};
  cursor: pointer;
`;

const SelectedLabel = styled.span`
  font-size: 14px;
  color: #555;
`;

const SubmitButton = styled.button`
  flex: 1;
  background: #007bff;
  color: white;
  border: none;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #0056b3;
  }
`;

const CancelButton = styled.button`
  flex: 1;
  background: #ccc;
  color: black;
  border: none;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #aaa;
  }
`;
