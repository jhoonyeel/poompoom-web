import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewDetailUI from './PostDetail.presenter';
import PostCommentList from '../PostComment/PostCommentList/PostCommentList';

export default function PostDetail() {
  const [review, setReview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bookMark, setBookMark] = useState(false);
  const [like, setLike] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const { reviewId } = useParams();

  const boardImages = [
    'http://via.placeholder.com/390x510.png',
    'http://via.placeholder.com/390x510.png',
    'http://via.placeholder.com/390x510.png',
  ];

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
        setReview(data);
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
      <ReviewDetailUI
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...review}
        currentIndex={currentIndex}
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        boardImages={boardImages}
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
