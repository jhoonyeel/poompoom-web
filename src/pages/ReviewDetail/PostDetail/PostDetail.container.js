import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../../apis/axios';
import ReviewDetailUI from './PostDetail.presenter';

export default function PostDetail() {
  const [like, setLike] = useState(false);
  const [bookMark, setBookMark] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const { reviewId } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // 현재 이미지 인덱스 관리
  const navigate = useNavigate();

  const fetchReview = async () => {
    try {
      const response = await axios.get(`/review/${reviewId}`);
      const { data } = response;
      setSelectedPost(data);
      setLike(data.isLikedPost);
      setBookMark(data.isBookmarked);
    } catch (err) {
      console.log('fetch failed');
    }
  };
  useEffect(() => {
    fetchReview();
  }, [reviewId]);

  const handleLike = async () => {
    const previousLikeStatus = like; // 현재 상태를 저장

    // Optimistic UI 업데이트: 서버 응답 전에 UI를 먼저 업데이트
    setLike((l) => !l);

    try {
      const response = await axios.post(`/like/${reviewId}`);
      console.log(response);

      if (response.status !== 200) {
        throw new Error('Failed to toggle like');
      }
    } catch (error) {
      console.error('Error while toggling like:', error);
      setLike(previousLikeStatus); // 서버 요청 실패 시 이전 상태로 복구
      // eslint-disable-next-line no-alert
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

  if (!selectedPost) {
    return <div>Loading...</div>; // 로딩 중임을 표시합니다.
  }

  // 이전 이미지로 이동
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? selectedPost.photos.length - 1 : prevIndex - 1));
  };
  // 다음 이미지로 이동
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === selectedPost.photos.length - 1 ? 0 : prevIndex + 1));
  };

  const onUpdate = () => {
    navigate(`/review/update/${reviewId}`, { state: selectedPost }); // 수정 페이지로 이동
  };
  const onDelete = async () => {
    try {
      // eslint-disable-next-line no-alert
      alert('삭제하시겠습니까?');
      const response = await axios.post(`/review/delete/${reviewId}`);
      console.log(response);
      console.log(`Review ${reviewId} deleted successfully`);
      navigate('/review'); // 삭제 후 리뷰 목록 페이지로 이동
    } catch (error) {
      console.error('Failed to delete review', error);
      // 추가적인 에러 처리 로직을 여기에 추가할 수 있습니다.
    }
  };

  return (
    <ReviewDetailUI
      reviewId={reviewId}
      currentImageIndex={currentImageIndex}
      prevImage={prevImage}
      nextImage={nextImage}
      onUpdate={onUpdate}
      onDelete={onDelete}
      like={like}
      bookMark={bookMark}
      handleLike={handleLike}
      handleBookmark={handleBookmark}
      formatDate={formatDate}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...selectedPost}
    />
  );
}
