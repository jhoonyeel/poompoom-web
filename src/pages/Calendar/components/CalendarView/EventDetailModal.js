import React, { useState } from 'react';
import styled from 'styled-components';
import PostDetailModal from './PostDetailModal';

export default function EventDetailModal({ event, posts, onClose, onWritePost }) {
  const [selectedPostId, setSelectedPostId] = useState(''); // 선택된 게시글 ID
  const [isPostDetailModalOpen, setIsPostDetailModalOpen] = useState(false); // 게시글 상세 모달 상태

  const handlePostSelection = (e) => {
    const newPostId = e.target.value; // 선택된 게시글 ID
    console.log('Selected Post ID:', newPostId); // 디버깅용 로그
    setSelectedPostId(newPostId); // 선택된 게시글 ID 저장
  };

  const handlePostView = () => {
    if (selectedPostId) {
      setIsPostDetailModalOpen(true); // 게시글 상세 모달 열기
    }
  };

  const closePostDetail = () => {
    setIsPostDetailModalOpen(false); // 게시글 조회 모달 닫기
  };

  // 선택된 게시글 찾기
  const selectedPost = posts.find((post) => String(post.id) === String(selectedPostId)) || null;

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
            <strong>메모:</strong> {event.memo}
          </Detail>
          {posts.length > 0 && (
            <Detail>
              <strong>게시글:</strong>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <select
                  onChange={handlePostSelection}
                  value={selectedPostId} // 드롭다운의 value 속성을 selectedPostId와 동기화
                  style={{ marginRight: '8px' }}
                >
                  <option value="" disabled>
                    게시글 선택
                  </option>
                  {posts.map((post) => (
                    <option key={post.id} value={String(post.id)}>
                      {post.title}
                    </option>
                  ))}
                </select>
                <ViewButton
                  onClick={handlePostView}
                  disabled={!selectedPostId} // 선택된 게시글이 없으면 버튼 비활성화
                >
                  게시글 조회
                </ViewButton>
              </div>
            </Detail>
          )}
          <ButtonContainer>
            <Button onClick={onClose}>닫기</Button>
            <Button onClick={onWritePost}>게시글 작성하기</Button>
          </ButtonContainer>
        </ModalContent>
      </Modal>
      {isPostDetailModalOpen && selectedPost && <PostDetailModal post={selectedPost} onClose={closePostDetail} />}
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
  background: #28a745;
  color: white;
  border: none;
  padding: 6px 12px;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background: #218838;
  }
  &:disabled {
    background: #6c757d;
    cursor: not-allowed;
  }
`;
