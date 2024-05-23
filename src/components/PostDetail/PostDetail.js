import { useState, useEffect } from 'react';
import PostDetailUI from './PostDetail.presenter';

const boardImages = Array(3).fill('http://via.placeholder.com/388x510.png');

// DB currentPosts에서 가져오는 데이터

function PostDetail({ post }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [like, setLike] = useState(post.isLike || false);
  const [bookMark, setBookMark] = useState(post.isBookMark || false);

  /* 사진 슬라이드 효과
  const [style, setStyle] = useState({
    transform: `translateX(-${currentIndex}00%)`,
    transition: `all 0.4s ease-in-out`,
  });
  */

  // 사진 루프
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? boardImages.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === boardImages.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {}, [like]);

  useEffect(() => {}, [bookMark]);
  // 변경사항 전송

  return (
    <PostDetailUI
      currentIndex={currentIndex}
      boardImages={boardImages}
      setLike={setLike}
      setBookMark={setBookMark}
      prevSlide={prevSlide}
      nextSlide={nextSlide}
      post={post}
      like={like}
      bookMark={bookMark}
    />
  );
}

export default PostDetail;
