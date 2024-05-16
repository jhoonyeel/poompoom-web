/* 페이지 주소를 받아와서 다른 data 전송 */
import React from 'react';
import styled, { keyframes } from 'styled-components';
import ReviewPost from '../ReviewPostCard/ReviewPostCard.container';
import PointModal from '../../../../../components/PointModal/PointModal.container';

function ReviewPostGalleryUI({
  currentPosts,
  handlePostClick,
  handleConfirmPost,
  selectedPost,
  isModalOpen,
  closeModal,
}) {
  return (
    <>
      <PostList>
        {currentPosts.map((post) => (
          <ReviewPost key={post.id} post={post} onPostClick={handlePostClick} />
        ))}
      </PostList>
      {isModalOpen && (
        <>
          <ModalBackdrop />
          <PointModal post={selectedPost} onClose={closeModal} onConfirm={handleConfirmPost} />
        </>
      )}
    </>
  );
}

export default ReviewPostGalleryUI;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const PostList = styled.div`
  display: flex;
  flex-wrap: wrap; /* 내용이 넘칠 때 줄바꿈 설정 */
  justify-content: space-between;
  padding: 0 10%;
  border: 3px solid #aaa;
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 배경에 투명도 추가 */
  z-index: 1000; /* 모달보다 앞에 표시되도록 높은 값 설정 */
  animation: ${fadeIn} 0.3s ease-out forwards; // Fade in 애니메이션 적용
`;
