/* eslint-disable camelcase */
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import profileDummyPhoto from '../../../shared/assets/ProfilePhoto.svg';
import { getOneReview } from '../api/getOneReview';
import { updateReview } from '../api/updateReview';
import placeholderPhoto from '../assets/DummyPhoto.svg';
import { useFetchProfilePicture } from '../hooks/useFetchProfilePicture';
import { useLogin } from '../hooks/useLogin';
import { CATEGORIES, ITEM } from '../model/constants';
import * as S from './ReviewEdit.style';

export default function ReviewEdit() {
  const { reviewId } = useParams(); // 리뷰 ID를 URL에서 가져옵니다 (수정 모드일 때 필요).
  const navigate = useNavigate();

  const [reviewData, setReviewData] = useState({
    price: '',
    source: '',
    reviewType: 'RECEIVED',
    content: '',
    category: CATEGORIES[0],
    item: ITEM[0],
    item_url: '',
    nickname: '',
    profileImage: '',
  });
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [existingImages, setExistingImages] = useState([]); // 기존 이미지
  const [newImages, setNewImages] = useState([]); // 새로 추가된 이미지
  const [deletedImages, setDeletedImages] = useState([]); // 삭제된 기존 이미지

  const { userData } = useLogin();
  const profilePhoto = useFetchProfilePicture(userData?.memberId); // 프로필 사진을 가져오는 커스텀 훅 호출

  // `allImages`는 기존 이미지와 새로 추가된 이미지를 결합한 배열
  const allImages = [...existingImages, ...newImages.map((file) => URL.createObjectURL(file))];

  // 기존 데이터 가져오기
  useEffect(() => {
    const loadReviewData = async () => {
      try {
        const data = await getOneReview(reviewId); // API 호출
        const { body, price, whereBuy, hashTags, reviewType, photos, item_url, item, nickname, profileImage } = data;
        console.log(body);
        setReviewData({
          content: body,
          price: price.toString(),
          source: whereBuy,
          category: hashTags[0].name,
          reviewType,
          item,
          item_url,
          nickname,
          profileImage,
        });
        setExistingImages(photos);
      } catch (error) {
        console.error('리뷰 데이터를 가져오는 중 에러:', error);
      }
    };
    loadReviewData();
  }, [reviewId]);

  const handleManageImage = (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    setNewImages((prev) => [...prev, ...files]); // 새 이미지를 배열 뒤에 추가
    setActiveImageIndex(0);
  };

  const handleDeleteImage = () => {
    if (activeImageIndex < existingImages.length) {
      // 기존 이미지를 삭제
      const imageToDelete = existingImages[activeImageIndex];
      setDeletedImages((prev) => [...prev, imageToDelete.id]); // 삭제할 기존 이미지 ID를 저장
      setExistingImages((prev) => prev.filter((_, idx) => idx !== activeImageIndex)); // 기존 이미지에서 삭제
    } else {
      // 새로운 이미지를 삭제
      const newImageIndex = activeImageIndex - existingImages.length; // newImages 배열 내 인덱스 계산
      setNewImages((prev) => prev.filter((_, idx) => idx !== newImageIndex)); // 새 이미지에서 삭제
    }

    // activeImageIndex 조정
    setActiveImageIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  // 폼 변경
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReviewData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (existingImages.length === 0) {
      alert('이미지를 최소 하나 이상 추가해주세요.');
      return;
    }

    const { content, price, source, category, reviewType, item, item_url } = reviewData;
    if (!content || !price || !source || !category || !reviewType) {
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
      willDeletePhoto: deletedImages,
    });

    // 파일 업로드를 지원하는 multipart 요청을 생성하기 위해 formData 객체 생성
    const formData = new FormData();
    formData.append('body', new Blob([jsonBody], { type: 'application/json' }));

    // 새로 추가된 이미지 파일을 추가
    newImages.forEach((image) => {
      formData.append('photos', image);
    });

    try {
      const response = await updateReview(reviewId, formData); // API 호출
      console.log('Success:', response);
      navigate(`/review/${reviewId}`);
    } catch (error) {
      console.error('리뷰 업데이트 중 에러:', error);
    }

    navigate(`/review/${reviewId}`);
  };

  const nextImage = (e) => {
    e.stopPropagation(); // 이벤트 전파 방지
    // 마지막 인덱스면 사진 추가
    if (activeImageIndex === allImages.length - 1) {
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
    <S.Wrapper>
      <S.ReviewEditForm onSubmit={handleSubmit}>
        <S.Header>
          <S.Title>무드뷰 수정하기</S.Title>
          <S.SubmitBtn type="submit">수정하기</S.SubmitBtn>
        </S.Header>
        <S.HeaderLine />
        <S.BodyContainer>
          <S.ReviewImageContainer>
            <S.ReviewImageBox onClick={() => document.getElementById('imageInput').click()}>
              {allImages.length > 0 ? (
                <>
                  <img
                    src={
                      activeImageIndex < existingImages.length
                        ? allImages[activeImageIndex]?.photoPath // 기존 이미지의 URL
                        : URL.createObjectURL(allImages[activeImageIndex]) // 새 이미지의 미리보기 URL
                    }
                    alt={`preview ${activeImageIndex} 이미지`}
                  />
                  {activeImageIndex > 0 && <S.ArrowLeft onClick={prevImage}>‹</S.ArrowLeft>}
                  <S.ArrowRight onClick={nextImage}>
                    {activeImageIndex === allImages.length - 1 ? <S.AddIcon /> : '›'}
                  </S.ArrowRight>
                  <S.DeleteButton
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteImage();
                    }}
                  >
                    &times;
                  </S.DeleteButton>
                  <S.Dots>
                    {allImages.map((_, index) => (
                      <S.Dot
                        active={index === activeImageIndex}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveImageIndex(index);
                        }}
                      />
                    ))}
                  </S.Dots>
                </>
              ) : (
                <img src={placeholderPhoto} alt="placeholder" />
              )}
            </S.ReviewImageBox>
            <S.ImageInput id="imageInput" type="file" multiple onChange={handleManageImage} />
          </S.ReviewImageContainer>
          <S.ReviewContentContainer>
            <S.ReviewContentHeader>
              <S.AuthorCircleBox>
                <S.AuthorImg src={profilePhoto || profileDummyPhoto} alt="프로필 이미지" />
              </S.AuthorCircleBox>
              <S.Nickname>{reviewData.nickname}</S.Nickname>
              <S.ReviewTypeBtn
                type="button"
                $active={reviewData.reviewType === 'RECEIVED'}
                onClick={() => setReviewData((prevData) => ({ ...prevData, reviewType: 'RECEIVED' }))}
              >
                받은 선물
              </S.ReviewTypeBtn>
              <S.ReviewTypeBtn
                type="button"
                $active={reviewData.reviewType === 'GIVEN'}
                onClick={() => setReviewData((prevData) => ({ ...prevData, reviewType: 'GIVEN' }))}
              >
                준 선물
              </S.ReviewTypeBtn>
            </S.ReviewContentHeader>
            <S.ReviewContent
              name="content"
              placeholder="문구를 입력해주세요..."
              value={reviewData.content}
              onChange={handleInputChange}
            />
            <S.ReviewInfoContainer>
              <S.Line />
              <S.CategoryHeader>
                <S.CategorySelectIcon />
                <S.CategoryTitle>카테고리 선택</S.CategoryTitle>
              </S.CategoryHeader>
              <S.CategoryContainer>
                {CATEGORIES.map((cat) => (
                  <S.CategoryBtn
                    key={cat}
                    type="button"
                    $active={reviewData.category === cat}
                    onClick={() => setReviewData((prevData) => ({ ...prevData, category: cat }))}
                  >
                    {cat}
                  </S.CategoryBtn>
                ))}
              </S.CategoryContainer>
              <S.Line />
              <S.CategoryHeader>
                <S.CategorySelectIcon />
                <S.CategoryTitle>품목 선택</S.CategoryTitle>
              </S.CategoryHeader>
              <S.CategoryContainer>
                {ITEM.map((itemSell) => (
                  <S.CategoryBtn
                    key={itemSell}
                    type="button"
                    $active={reviewData.item === itemSell}
                    onClick={() => setReviewData((prevData) => ({ ...prevData, item: itemSell }))}
                  >
                    {itemSell}
                  </S.CategoryBtn>
                ))}
              </S.CategoryContainer>
              <S.Line />
              <S.AdditionalInfoContainer>
                <S.LabelContainer>
                  <S.InfoTitle>구매처</S.InfoTitle>
                  <S.InfoInput name="source" type="text" value={reviewData.source} onChange={handleInputChange} />
                </S.LabelContainer>
                <S.LabelContainer>
                  <S.InfoTitle>아이템</S.InfoTitle>
                  <S.InfoInput name="item" type="text" onChange={handleInputChange} />
                </S.LabelContainer>
                <S.LabelContainer>
                  <S.InfoTitle>제품 정보(링크)</S.InfoTitle>
                  <S.InfoInput name="item_url" type="text" value={reviewData.item_url} onChange={handleInputChange} />
                </S.LabelContainer>
                <S.LabelContainer>
                  <S.InfoTitle>가격</S.InfoTitle>
                  <S.InfoInput name="price" type="text" value={reviewData.price} onChange={handleInputChange} />
                </S.LabelContainer>
              </S.AdditionalInfoContainer>
            </S.ReviewInfoContainer>
          </S.ReviewContentContainer>
        </S.BodyContainer>
      </S.ReviewEditForm>
    </S.Wrapper>
  );
}
