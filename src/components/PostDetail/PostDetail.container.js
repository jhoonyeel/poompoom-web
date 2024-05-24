import { useState, useEffect } from 'react';
import PostDetailUI from './PostDetail.persenter';

const boardImages = Array(3).fill('http://via.placeholder.com/388x510.png');
const profileImage = 'http://via.placeholder.com/105x105.png';
const profileName = '작성자';

export default function PostDetail({ selectedPost, onClose, onConfirm }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [like, setLike] = useState(selectedPost.isLike || false);
  const [bookMark, setBookMark] = useState(selectedPost.isBookMark || false);

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

  return (
    <PostDetailUI
      selectedPost={selectedPost}
      onClose={onClose}
      onConfirm={onConfirm}
      currentIndex={currentIndex}
      prevSlide={prevSlide}
      nextSlide={nextSlide}
      boardImages={boardImages}
      profileImage={profileImage}
      profileName={profileName}
      like={like}
      bookMark={bookMark}
      setLike={setLike}
      setBookMark={setBookMark}
    />
  );
}
