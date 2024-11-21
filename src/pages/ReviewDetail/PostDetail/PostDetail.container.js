import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../../apis/axios';
import ReviewDetailUI from './PostDetail.presenter';

export default function PostDetail() {
  const [like, setLike] = useState(false);
  const [likeAmount, setLikeAmount] = useState(0); // 좋아요 수 상태 추가
  const [bookMark, setBookMark] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const { reviewId } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // 현재 이미지 인덱스 관리
  const navigate = useNavigate();

  const fetchReview = async () => {
    try {
      const response = await axios.get(`/review/${reviewId}`);
      console.log(response.data);
      const { data } = response;
      setSelectedPost(data);
      setLike(data.isLikedPost);
      setLikeAmount(data.likeAmount);
      setBookMark(data.isBookmarked);
    } catch (err) {
      console.log(`/review/${reviewId} 에러:`, err);
    }
  };
  useEffect(() => {
    fetchReview();
  }, [reviewId]);

  const handleLike = async () => {
    const previousLikeStatus = like; // 현재 상태를 저장
    const previousLikeAmount = likeAmount; // 기존 좋아요 수 저장

    // Optimistic UI 업데이트: 서버 응답 전에 UI를 먼저 업데이트
    setLike((prevLike) => {
      const newLikeStatus = !prevLike;
      setLikeAmount((prevAmount) => (newLikeStatus ? prevAmount + 1 : prevAmount - 1)); // 새로운 like 상태 기반으로 좋아요 수 업데이트
      return newLikeStatus;
    });

    try {
      const response = await axios.post(`/like/${reviewId}`);
      if (response.status !== 200) {
        throw new Error('Failed to toggle like');
      }
    } catch (error) {
      console.error(`/like/${reviewId} 에러:`, error);
      setLike(previousLikeStatus); // 서버 요청 실패 시 이전 상태로 복구
      setLikeAmount(previousLikeAmount); // 서버 요청 실패 시 이전 좋아요 수로 복구
      alert('좋아요를 처리하는 중 오류가 발생했습니다. 다시 시도해 주세요.');
    }
  };
  const handleBookmark = () => setBookMark((b) => !b);

  const formatDate = (dateArray) => {
    const date = new Date(
      dateArray[0],
      dateArray[1] - 1,
      dateArray[2],
      dateArray[3],
      dateArray[4],
      dateArray[5],
      dateArray[6],
    );
    return date.toLocaleDateString('ko-KR').replace(/\./g, '').replace(/ /g, '.');
  };

  // 이전 이미지로 이동
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? selectedPost.photos.length - 1 : prevIndex - 1));
  };
  // 다음 이미지로 이동
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === selectedPost.photos.length - 1 ? 0 : prevIndex + 1));
  };

  const onUpdate = () => {
    navigate(`/review/update/${reviewId}`);
  };
  const onDelete = async () => {
    try {
      alert('삭제하시겠습니까?');
      const response = await axios.post(`/review/delete/${reviewId}`);
      console.log(`Review ${reviewId} deleted successfully: `, response);
      navigate('/review');
    } catch (error) {
      console.error('Failed to delete review', error);
    }
  };

  if (!selectedPost) {
    return <div>Loading...</div>;
  }

  return (
    <ReviewDetailUI
      reviewId={reviewId}
      currentImageIndex={currentImageIndex}
      setCurrentImageIndex={setCurrentImageIndex}
      prevImage={prevImage}
      nextImage={nextImage}
      onUpdate={onUpdate}
      onDelete={onDelete}
      like={like}
      likeAmount={likeAmount}
      bookMark={bookMark}
      handleLike={handleLike}
      handleBookmark={handleBookmark}
      formatDate={formatDate}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...selectedPost}
    />
  );
}
