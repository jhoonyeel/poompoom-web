/* eslint-disable camelcase */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../../apis/axios';
import { useFetchProfilePicture } from '../../../hooks/useFetchProfilePicture';
import { useLogin } from '../../../hooks/useLogin';
import { CATEGORIES } from '../../../shared/categories';
import { ITEM } from '../../../shared/item';
import ReviewWriteUI from './ReviewCreate.presenter';

export default function ReviewWritePage() {
  const [images, setImages] = useState([]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [reviewData, setReviewData] = useState({
    price: '',
    source: '',
    reviewType: 'RECEIVED',
    content: '',
    category: CATEGORIES[0],
    item: ITEM[0],
    item_url: '',
  });
  const navigate = useNavigate();

  const { userData } = useLogin();
  const profilePhoto = useFetchProfilePicture(userData?.memberId); // 프로필 사진을 가져오는 커스텀 훅 호출

  const handleManageImage = (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    setImages((prevImages) => [...prevImages, ...files]); // 새 이미지를 배열 뒤에 추가
    setActiveImageIndex(0);
  };

  const handleDeleteImage = () => {
    if (images.length === 0) return; // 이미지가 없을 때는 아무 작업도 하지 않음

    setImages((prevImages) => prevImages.filter((_, index) => index !== activeImageIndex));
    setActiveImageIndex((prevIndex) => Math.max(prevIndex - 1, 0)); // 삭제 후 이전 이미지로 이동
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReviewData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (images.length === 0) {
      alert('이미지를 최소 하나 이상 추가해주세요.');
      return;
    }

    const { content, price, source, category, reviewType, item, item_url } = reviewData;
    if (!content || !price || !source || !category || !reviewType || !item) {
      alert('모든 필드를 입력해주세요.');
      return;
    }

    // JSON 객체 생성
    const jsonBody = JSON.stringify({
      body: content,
      price: parseFloat(price),
      whereBuy: source,
      category,
      reviewType,
      item,
      item_url,
    });

    // 파일 업로드를 지원하는 multipart 요청을 생성하기 위해 formData 객체 생성
    const formData = new FormData();
    formData.append('body', new Blob([jsonBody], { type: 'application/json' }));

    images.forEach((image) => {
      formData.append('photos', image);
    });

    try {
      const response = await axios.post(`/review/create`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Success:', response.data);
      navigate('/review');
    } catch (error) {
      console.error('/review/create 에러:', error);
    }
  };

  const nextImage = (e) => {
    e.stopPropagation(); // 이벤트 전파 방지
    // 마지막 인덱스면 사진 추가
    if (activeImageIndex === images.length - 1) {
      document.getElementById('imageInput').click();
    } else {
      setActiveImageIndex((prevIndex) => prevIndex + 1);
    }
  };
  const prevImage = (e) => {
    e.stopPropagation(); // 이벤트 전파 방지
    setActiveImageIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <ReviewWriteUI
      images={images}
      activeImageIndex={activeImageIndex}
      reviewData={reviewData}
      setReviewData={setReviewData}
      setActiveImageIndex={setActiveImageIndex}
      profilePhoto={profilePhoto}
      handleManageImage={handleManageImage}
      handleDeleteImage={handleDeleteImage}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      nextImage={nextImage}
      prevImage={prevImage}
      CATEGORIES={CATEGORIES}
      ITEM={ITEM}
    />
  );
}
