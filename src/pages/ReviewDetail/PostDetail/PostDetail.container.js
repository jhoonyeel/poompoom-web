import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../../apis/axios';
import ReviewDetailUI from './PostDetail.presenter';

export default function PostDetail() {
  const [like, setLike] = useState(false);
  const [bookMark, setBookMark] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const { reviewId } = useParams();
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

  const handleLike = () => setLike((l) => !l);
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

  const onUpdate = () => {
    navigate(`/review/update/${reviewId}`); // 수정 페이지로 이동
  };

  const onDelete = async () => {
    try {
      // eslint-disable-next-line no-alert
      alert('삭제하시겠습니까?');
      await axios.delete(`/review/delete/${reviewId}`);
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
