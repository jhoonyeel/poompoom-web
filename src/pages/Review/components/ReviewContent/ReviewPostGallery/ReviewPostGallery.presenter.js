/* 페이지 주소를 받아와서 다른 data 전송 */
import React from 'react';
import * as S from './ReviewPostGallery.styles';
import PointModal from '../../../../../components/PointModal/PointModal.container';
import ReviewPostCard from '../ReviewConfetti/ReviewConfetti.container';

function ReviewPostGalleryUI({
  currentPosts,
  handlePostClick,
  handleConfirmPost,
  selectedPost,
  isModalOpen,
  closeModal,
}) {
  // ReviewPostCard 가로로도 나타내기.
  return (
    <>
      <S.PostList>
        {currentPosts.map((post) => (
          <ReviewPostCard key={post.id} post={post} onPostClick={handlePostClick} />
        ))}
      </S.PostList>
      {isModalOpen && (
        <>
          <S.ModalBackdrop onClick={closeModal} />
          <PointModal post={selectedPost} onClose={closeModal} onConfirm={handleConfirmPost} />
        </>
      )}
    </>
  );
}

export default ReviewPostGalleryUI;
