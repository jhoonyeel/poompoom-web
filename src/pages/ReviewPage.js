import { useState } from 'react';
import styled from 'styled-components';
import PointModal from '../components/PointModal/PointModal';
import ReviewPost from '../components/ReviewPost/ReviewPost';
import QuickGift from '../components/QuickGift/QuickGift';
import ReviewPostHeader from '../components/ReviewPostHeader/ReviewPostHeader';
import useModal from '../hooks/useModal';

function ReviewPage() {
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
    <Container>
      <ReviewPostHeader />
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
      <QuickGift />
      <ButtonBox>
        <button type="button">↑</button> {/** 추후에 컴포넌트 사용 */}
      </ButtonBox>
    </Container>
  );
}

export default ReviewPage;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const PostList = styled.div`
  display: flex;
  flex-wrap: wrap; /* 내용이 넘칠 때 줄바꿈 설정 */
  justify-content: space-between;
  padding: 10%;
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

const ButtonBox = styled.div`
  position: fixed;
  bottom: 20px; /* 화면 하단과의 간격 조정 */
  right: 50px; /* 화면 우측과의 간격 조정 */
  z-index: 999; /* 다른 요소 위에 표시되도록 z-index 조정 */
  width: 5%;
`;
