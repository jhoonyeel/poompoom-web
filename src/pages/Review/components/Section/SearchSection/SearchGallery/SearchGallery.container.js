/* 페이지 주소를 받아와서 다른 data 전송 */
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import useModal from '../../../../../../hooks/useModal';
import SearchGalleryUI from './SearchGallery.presenter';

// 각 페이지에 사용할 정적 데이터 객체들 ( 프로토타입 이후 제대로 된 권한분기 사용.. )
const posts = Array.from({ length: 7 }, (_, index) => ({
  id: index + 1,
  title: `${[index + 1]} 번째 포스트`,
  excerpt: `${[index + 1]} 번째 포스트의 요약입니다.`,
  content: `${[index + 1]} 번째 포스트의 내용입니다.`,
}));

const myPosts = Array.from({ length: 7 }, (_, index) => ({
  id: index + 1,
  title: `${[index + 1]} 번째 내 포스트`,
  excerpt: `${[index + 1]} 번째 포스트의 요약입니다.`,
  content: `${[index + 1]} 번째 포스트의 내용입니다.`,
}));

const likePosts = Array.from({ length: 7 }, (_, index) => ({
  id: index + 1,
  title: `${[index + 1]} 번째 좋아요 포스트`,
  excerpt: `${[index + 1]} 번째 포스트의 요약입니다.`,
  content: `${[index + 1]} 번째 포스트의 내용입니다.`,
  isLike: 'true',
}));

const bookmarkPosts = Array.from({ length: 7 }, (_, index) => ({
  id: index + 1,
  title: `${[index + 1]} 번째 북마크 포스트`,
  excerpt: `${[index + 1]} 번째 포스트의 요약입니다.`,
  content: `${[index + 1]} 번째 포스트의 내용입니다.`,
  isBookMark: 'true',
}));

const recentPosts = Array.from({ length: 7 }, (_, index) => ({
  id: index + 1,
  title: `${[index + 1]} 번째 최근본 포스트`,
  excerpt: `${[index + 1]} 번째 포스트의 요약입니다.`,
  content: `${[index + 1]} 번째 포스트의 내용입니다.`,
}));

function SearchGallery() {
  const location = useLocation();
  const [selectedPost, setSelectedPost] = useState(null);
  const { isOpen: isModalOpen, openModal, closeModal } = useModal(); // useModal 훅 사용

  const postsMap = {
    '/profile': myPosts,
    '/profile/recent': recentPosts,
    '/profile/like': likePosts,
    '/profile/bookmark': bookmarkPosts,
    '/review': posts,
  };

  const currentPosts = postsMap[location.pathname] || posts;
  // 페이지 별 props로 넘겨주는 data 변경 (useRouter, useLocation 사용)
  console.log(`currentPosts: ${currentPosts}`);

  const handlePostClick = (post) => {
    setSelectedPost(post);
    openModal(); // 모달 열기 함수 호출
  };

  const handleConfirmPost = (post) => {
    /**
     * 여기서 포스트 확인 동작을 수행하거나 추가적인 로직을 수행할 수 있습니다.
     * 포스트를 서버에 저장하거나 업데이트합니다.
     * 포스트를 삭제합니다.
     * 포스트에 대한 추가적인 정보를 보여줍니다.
     * 모달이 아닌 다른 UI 요소를 업데이트합니다.
     */
    console.log('포스트 확인:', post.title);
  };

  return (
    <SearchGalleryUI
      currentPosts={currentPosts}
      handlePostClick={handlePostClick}
      handleConfirmPost={handleConfirmPost}
      selectedPost={selectedPost}
      isModalOpen={isModalOpen}
      closeModal={closeModal}
    />
  );
}

export default SearchGallery;
