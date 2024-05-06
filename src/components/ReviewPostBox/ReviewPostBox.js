import React, { useState } from 'react';
import styled from 'styled-components';
import ReviewPost from '../ReviewPost/ReviewPost';
import PointModal from '../PointModal/PointModal';
import useModal from '../../hooks/useModal';

function ReviewPostBox() {
  const [selectedPost, setSelectedPost] = useState(null);
  const { isOpen: isModalOpen, openModal, closeModal } = useModal(); // useModal 훅 사용

  // 정적인 콘텐츠를 포함한 posts 배열
  const posts = [
    {
      id: 1,
      title: '첫 번째 포스트',
      excerpt: '첫 번째 포스트의 요약입니다.',
      content: '첫 번째 포스트의 내용입니다.',
    },
    {
      id: 2,
      title: '두 번째 포스트',
      excerpt: '두 번째 포스트의 요약입니다.',
      content: '두 번째 포스트의 내용입니다.',
    },
    {
      id: 3,
      title: '세 번째 포스트',
      excerpt: '세 번째 포스트의 요약입니다.',
      content: '세 번째 포스트의 내용입니다.',
    },
    {
      id: 4,
      title: '네 번째 포스트',
      excerpt: '네 번째 포스트의 요약입니다.',
      content: '네 번째 포스트의 내용입니다.',
    },
    {
      id: 5,
      title: '다섯 번째 포스트',
      excerpt: '다섯 번째 포스트의 요약입니다.',
      content: '다섯 번째 포스트의 내용입니다.',
    },
    {
      id: 6,
      title: '여섯 번째 포스트',
      excerpt: '여섯 번째 포스트의 요약입니다.',
      content: '여섯 번째 포스트의 내용입니다.',
    },
    {
      id: 7,
      title: '일곱 번째 포스트',
      excerpt: '일곱 번째 포스트의 요약입니다.',
      content: '일곱 번째 포스트의 내용입니다.',
    },
  ];

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
    <>
      <PostList className="post-list">
        {posts.map((post) => (
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

export default ReviewPostBox;

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
`;
