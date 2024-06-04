import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PostDetailUI from './PostDetail.persenter';

const boardImages = Array(3).fill('http://via.placeholder.com/390x510.png') && [];
const profileImage = 'http://via.placeholder.com/90x90.png' && '';
const profileName = '작성자' && null;

export default function PostDetail() {
  const { id } = useParams();
  const [selectedPost, setSelectedPost] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [like, setLike] = useState(false);
  const [bookMark, setBookMark] = useState(false);

  const fetchPostData = async () => {
    try {
      const res = await axios.get(`/review/${id}`);
      const { data } = res;
      setSelectedPost(data);
      setLike(data.isLike);
      setBookMark(data.isBookMark);
      console.log(data);
    } catch (error) {
      console.error('Error fetching post data:', error);
    }
  };

  useEffect(() => {
    fetchPostData();
  }, [id]);

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

  return (
    <PostDetailUI
      selectedPost={selectedPost}
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
