import { useState } from 'react';
import PointModal from '../components/PointModal/PointModal';
import ReviewPost from '../components/ReviewPost/ReviewPost';
import QuickGift from '../components/QuickGift/QuickGift';
import ReviewPostHeader from '../components/ReviewPostHeader/ReviewPostHeader';

function Review() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
  ];

  const handlePostClick = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmPost = (post) => {
    // 여기서 포스트 확인 동작을 수행하거나 추가적인 로직을 수행할 수 있습니다.
    console.log('포스트 확인:', post.title);
    setIsModalOpen(false);
  };

  return (
    <div className="app">
      <ReviewPostHeader />
      {isModalOpen && <PointModal post={selectedPost} onClose={handleCloseModal} onConfirm={handleConfirmPost} />}
      <div className="post-list">
        {/* 포스트 목록을 렌더링 */}
        {posts.map((post) => (
          <ReviewPost key={post.id} post={post} onPostClick={handlePostClick} />
        ))}
      </div>
      <QuickGift />
    </div>
  );
}

export default Review;
