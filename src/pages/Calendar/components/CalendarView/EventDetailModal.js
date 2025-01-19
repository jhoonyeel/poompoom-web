import React, { useState } from 'react';
import styled from 'styled-components';
import PostDetailModal from './PostDetailModal';
import LogDetailModal from './LogDetailModal';

export default function EventDetailModal({
  event,
  posts,
  logs,
  onClose,
  onWritePlan,
  onWriteLog,
  ClickedDate,
  setPostType,
  postType,
}) {
  const [selectedItemId, setSelectedItemId] = useState(''); // 선택된 ID
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false); // 상세 모달 상태

  const handleSelection = (e, type) => {
    const newId = e.target.value;
    setSelectedItemId(newId);
    setPostType(type);
  };

  const handleView = () => {
    if (selectedItemId) {
      setIsDetailModalOpen(true);
    }
  };

  const closeDetailModal = () => {
    setIsDetailModalOpen(false);
    setSelectedItemId('');
    setPostType('');
  };

  const selectedItem =
    postType === 'post'
      ? posts?.find((post) => String(post.id) === String(selectedItemId)) || null
      : logs?.find((log) => String(log.id) === String(selectedItemId)) || null;

  const shouldHideMemoAndPostButton = ['남자친구', '여자친구'].includes(event.category.label);

  return (
    <>
      <Modal>
        <ModalContent>
          <ModalHeader>{event.title}</ModalHeader>
          <Detail style={{ color: event.category.color }}>
            <strong style={{ color: 'black' }}>카테고리:</strong> {event.category.label}
          </Detail>
          <Detail>
            <strong>날짜:</strong> {event.startDate} ~ {event.endDate}
          </Detail>
          <Detail>
            {ClickedDate && `선택: ${new Date(ClickedDate).toLocaleDateString('ko-KR', { day: 'numeric' })}`}
          </Detail>
          {shouldHideMemoAndPostButton && (
            <Detail>
              <strong>메모:</strong> {event.memo}
            </Detail>
          )}

          {Array.isArray(posts) && posts.length > 0 && (
            <Detail>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <select
                  onChange={(e) => handleSelection(e, 'post')}
                  value={setPostType === 'post' ? selectedItemId : ''}
                  style={{ marginRight: '8px' }}
                >
                  <option value="" disabled>
                    플랜 선택
                  </option>
                  {posts.map((post) => (
                    <option key={post.id} value={String(post.id)}>
                      {post.title}
                    </option>
                  ))}
                </select>
              </div>
            </Detail>
          )}
          {Array.isArray(logs) && logs.length > 0 && (
            <Detail>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <select
                  onChange={(e) => handleSelection(e, 'log')}
                  value={setPostType === 'log' ? selectedItemId : ''}
                  style={{ marginRight: '8px' }}
                >
                  <option value="" disabled>
                    회고록 선택
                  </option>
                  {logs.map((log) => (
                    <option key={log.id} value={String(log.id)}>
                      {log.title}
                    </option>
                  ))}
                </select>
              </div>
            </Detail>
          )}

          <ViewButton onClick={handleView} disabled={!selectedItemId}>
            상세보기
          </ViewButton>
          {!shouldHideMemoAndPostButton && (
            <ButtonContainer>
              <Button onClick={onWritePlan}>데이트 플랜 작성하기</Button>
              <Button onClick={onWriteLog}>회고록 작성하기</Button>
            </ButtonContainer>
          )}
          <ButtonContainer>
            <Button onClick={onClose}>닫기</Button>
          </ButtonContainer>
        </ModalContent>
      </Modal>

      {isDetailModalOpen && selectedItem && postType === 'post' && (
        <PostDetailModal post={selectedItem} onClose={closeDetailModal} />
      )}

      {isDetailModalOpen && selectedItem && postType === 'log' && (
        <LogDetailModal log={selectedItem} onClose={closeDetailModal} ClickedDate={ClickedDate} />
      )}
    </>
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
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 24px;
  border-radius: 8px;
  width: 400px;
`;

const ModalHeader = styled.h2`
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: bold;
`;

const Detail = styled.p`
  margin: 8px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
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

const ViewButton = styled.button`
  width: fit-content;
  height: 32px;
  padding: 6px;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background: rgb(174, 213, 159);
  }
  &:disabled {
    background: #6c757d;
    cursor: not-allowed;
  }
`;
