import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, SidebarTitle } from '../Style';
import PostDetailModal from '../../CalendarView/PostDetailModal';

export default function PoomPoomLog({ posts }) {
  const [selectedPostIndex, setSelectedPostIndex] = useState(null); // 현재 선택된 게시글의 인덱스

  // 최신 게시글 순으로 정렬 및 상위 6개 추출
  const recentPostsWithImages = Object.values(posts)
    .flat()
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 6);

  const handleLogBoxClick = (index) => {
    setSelectedPostIndex(index); // 선택된 게시글 인덱스 설정
  };

  const closePostDetailModal = () => {
    setSelectedPostIndex(null); // 모달 닫기
  };

  const moveToNextPost = () => {
    setSelectedPostIndex((prevIndex) => (prevIndex + 1) % recentPostsWithImages.length); // 다음 게시글
  };

  const moveToPreviousPost = () => {
    setSelectedPostIndex((prevIndex) => (prevIndex - 1 + recentPostsWithImages.length) % recentPostsWithImages.length); // 이전 게시글
  };

  return (
    <Container>
      <SidebarTitle>&lt; 품품로그 &gt;</SidebarTitle>
      <LogContainer>
        {recentPostsWithImages.map((post, index) => (
          <LogBox key={index} onClick={() => handleLogBoxClick(index)}>
            {post.images && post.images[0] && <Thumbnail src={post.images[0]} alt={`Post ${index} Thumbnail`} />}
            <HoverDate>
              {new Date(post.createdAt).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' })}
            </HoverDate>
          </LogBox>
        ))}
      </LogContainer>
      {selectedPostIndex !== null && (
        <PostDetailModal
          post={recentPostsWithImages[selectedPostIndex]}
          onClose={closePostDetailModal}
          onNext={moveToNextPost}
          onPrevious={moveToPreviousPost}
          showNavigation // 내비게이션 버튼 표시
        />
      )}
    </Container>
  );
}

const LogContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 80px);
  grid-template-rows: repeat(2, 80px);
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const LogBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;

  img {
    transition: all 0.2s ease-out;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover img {
    opacity: 0.3; /* 이미지 어두워지게 설정 */
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HoverDate = styled.div`
  position: absolute;
  color: white;
  font-size: 14px;
  font-weight: bold;
  display: none;
  ${LogBox}:hover & {
    display: block;
  }
`;
