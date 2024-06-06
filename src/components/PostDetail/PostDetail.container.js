import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostDetailUI from './PostDetail.presenter';
import PostCommentList from '../PostComment/PostCommentList/PostCommentList';

const profileImage = 'http://via.placeholder.com/90x90.png' && '';

export default function PostDetail() {
  const reviewId = 18;
  console.log('아이디!', reviewId);
  const [review, setReview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bookMark, setBookMark] = useState();
  const [like, setLike] = useState();
  const [selectedPost, setSelectedPost] = useState();

  const boardImages = Array(3).fill('http://via.placeholder.com/390x510.png') && [];

  // 사진 루프
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? boardImages.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === boardImages.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await axios.get(`/review/${reviewId}`);
        const { data } = response;
        setReview(response.data);
        setSelectedPost(data);
        setLike(data.isLike);
        setBookMark(data.isBookMark);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchReview();
  }, [reviewId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <PostDetailUI
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...review}
        currentIndex={currentIndex}
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        boardImages={boardImages}
        profileImage={profileImage}
        like={like}
        bookMark={bookMark}
        setLike={setLike}
        setBookMark={setBookMark}
        selectedPost={selectedPost}
      />
      <PostCommentList />
    </div>
  );
}
