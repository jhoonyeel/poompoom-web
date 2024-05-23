/* 페이지 주소를 받아와서 다른 data 전송 */
import React from 'react';
import styled from 'styled-components';
import PointModal from '../../../../../components/PointModal/PointModal.container';
import ReviewPostCard from '../../Card/ReviewPostCard/ReviewPostCard.container';

export default function SearchGalleryUI({
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
          <ReviewPostCard key={post.id} post={post} onPostClick={handlePostClick} />
        ))}
      </PostList>
      {isModalOpen && <PointModal post={selectedPost} onClose={closeModal} onConfirm={handleConfirmPost} />}
    </>
  );
}

const PostList = styled.div`
  display: flex;
  flex-wrap: wrap; /* 내용이 넘칠 때 줄바꿈 설정 */
  row-gap: 50px;
  column-gap: calc(30% / 3); // calc(30% / 3)
  padding: 2% 10%;
  border: 3px solid #aaa;
`;
