/* 페이지 주소를 받아와서 다른 data 전송 */
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SearchGalleryUI from './SearchGallery.presenter';

const posts = Array.from({ length: 7 }, (_, index) => ({
  id: index + 1,
  title: `${[index + 1]} 번째 포스트`,
  excerpt: `${[index + 1]} 번째 포스트의 요약입니다.`,
  content: `${[index + 1]} 번째 포스트의 내용입니다.`,
}));

export default function SearchGallery() {
  const navigate = useNavigate();
  const [selectedPost, setSelectedPost] = useState(null);

  const location = useLocation();

  const postsMap = {
    '/review': posts,
  };

  const currentPosts = postsMap[location.pathname] || posts;
  // 페이지 별 props로 넘겨주는 data 변경 (useRouter, useLocation 사용)
  console.log(`currentPosts: ${currentPosts}`);

  const handlePostClick = (post) => {
    setSelectedPost(post);
    navigate(`/review/post/1${post.id}`, { state: { post } });
  };

  return <SearchGalleryUI currentPosts={currentPosts} handlePostClick={handlePostClick} selectedPost={selectedPost} />;
}
