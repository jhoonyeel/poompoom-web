import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import axios from '../../apis/axios';
import { ReactComponent as Add } from '../../assets/Add.svg';
import { ReactComponent as CategorySelect } from '../../assets/CategorySelect.svg';
import placeholderPhoto from '../../assets/DummyPhoto.svg';
import { useFetchProfilePicture } from '../../hooks/useFetchProfilePicture';
import { profilePictureState } from '../../recoil/atoms';
import { CATEGORIES } from '../../shared/categories';

export default function ReviewWritePage() {
  const { reviewId } = useParams(); // 리뷰 ID를 URL에서 가져옵니다 (수정 모드일 때 필요).
  const navigate = useNavigate();

  const [reviewData, setReviewData] = useState({
    price: '',
    source: '',
    reviewType: 'RECEIVED',
    content: '',
    category: CATEGORIES[0],
  });
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [existingImages, setExistingImages] = useState([]); // 기존 이미지
  const [newImages, setNewImages] = useState([]); // 새로 추가된 이미지
  const [deletedImages, setDeletedImages] = useState([]); // 삭제된 기존 이미지

  useFetchProfilePicture(); // 프로필 사진을 가져오는 커스텀 훅 호출
  const profilePhoto = useRecoilValue(profilePictureState); // Recoil 전역 상태에서 프로필 사진 경로를 읽어옴

  // `allImages`는 기존 이미지와 새로 추가된 이미지를 결합한 배열
  const allImages = [...existingImages, ...newImages.map((file) => URL.createObjectURL(file))];

  // 기존 데이터 가져오기
  const fetchReviewData = async () => {
    try {
      const response = await axios.get(`/review/${reviewId}`);
      console.log('Fetched data:', response.data);
      const { body, price, whereBuy, hashTags, reviewType, photos } = response.data;
      console.log(body);
      setReviewData({
        content: body,
        price: price.toString(),
        source: whereBuy,
        category: hashTags[0].name,
        reviewType,
      });
      setExistingImages(photos);
    } catch (error) {
      console.error(`/review/${reviewId} 에러:`, error);
    }
  };
  useEffect(() => {
    fetchReviewData();
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

    const { content, price, source, category, reviewType } = reviewData;
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
      const response = await axios.post(`/review/update/${reviewId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Success:', response.data);
      navigate(`/review/${reviewId}`);
    } catch (error) {
      console.error(`/review/update/${reviewId} 애러:`, error);
    }
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
    <Wrapper>
      <ReviewEditForm onSubmit={handleSubmit}>
        <Header>
          <Title>무드뷰 수정하기</Title>
          <SubmitBtn type="submit">수정하기</SubmitBtn>
        </Header>
        <BodyContainer>
          <ReviewImageContainer>
            <ReviewImageBox onClick={() => document.getElementById('imageInput').click()}>
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
                  {activeImageIndex > 0 && <ArrowLeft onClick={prevImage}>‹</ArrowLeft>}
                  <ArrowRight onClick={nextImage}>
                    {activeImageIndex === allImages.length - 1 ? <AddIcon /> : '›'}
                  </ArrowRight>
                  <DeleteButton
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteImage();
                    }}
                  >
                    &times;
                  </DeleteButton>
                  <Dots>
                    {allImages.map((_, index) => (
                      <Dot
                        active={index === activeImageIndex}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveImageIndex(index);
                        }}
                      />
                    ))}
                  </Dots>
                </>
              ) : (
                <img src={placeholderPhoto} alt="placeholder" />
              )}
            </ReviewImageBox>
            <ImageInput id="imageInput" type="file" multiple onChange={handleManageImage} />
          </ReviewImageContainer>
          <ReviewContentContainer>
            <ReviewContentHeader>
              <AuthorCircleBox>
                <AuthorImg src={profilePhoto} alt="프로필 이미지" />
              </AuthorCircleBox>
              <Nickname>@test</Nickname>
              <ReviewTypeBtn
                type="button"
                $active={reviewData.reviewType === 'RECEIVED'}
                onClick={() => setReviewData((prevData) => ({ ...prevData, reviewType: 'RECEIVED' }))}
              >
                받은 선물
              </ReviewTypeBtn>
              <ReviewTypeBtn
                type="button"
                $active={reviewData.reviewType === 'GIVEN'}
                onClick={() => setReviewData((prevData) => ({ ...prevData, reviewType: 'GIVEN' }))}
              >
                준 선물
              </ReviewTypeBtn>
            </ReviewContentHeader>
            <ReviewContent
              name="content"
              placeholder="문구를 입력해주세요..."
              value={reviewData.content}
              onChange={handleInputChange}
            />
            <ReviewInfoContainer>
              <CategoryHeader>
                <CategorySelectIcon />
                <CategoryTitle>카테고리 선택</CategoryTitle>
              </CategoryHeader>
              <CategoryContainer>
                {CATEGORIES.map((cat) => (
                  <CategoryBtn
                    key={cat}
                    type="button"
                    $active={reviewData.category === cat}
                    onClick={() => setReviewData((prevData) => ({ ...prevData, category: cat }))}
                  >
                    {cat}
                  </CategoryBtn>
                ))}
              </CategoryContainer>
              <AdditionalInfoContainer>
                <LabelContainer>
                  <InfoTitle>제품 정보(링크)</InfoTitle>
                  <InfoInput name="source" type="text" value={reviewData.source} onChange={handleInputChange} />
                </LabelContainer>
                <LabelContainer>
                  <InfoTitle>가격</InfoTitle>
                  <InfoInput name="price" type="text" value={reviewData.price} onChange={handleInputChange} />
                </LabelContainer>
              </AdditionalInfoContainer>
            </ReviewInfoContainer>
          </ReviewContentContainer>
        </BodyContainer>
      </ReviewEditForm>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 24px auto 0;
  min-width: 1028px;
  width: 80%;
`;
const ReviewEditForm = styled.form`
  display: flex;
  flex-direction: column;
  min-height: 580px;
  border-radius: 20px;
  background: #072623;
  box-shadow:
    0px 4px 60px rgba(0, 0, 0, 0.25),
    inset 0px 0px 80px #022622;
`;
const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
`;
const Title = styled.span`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;
const SubmitBtn = styled.button`
  padding: 12px 20px;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  background-color: inherit;
  border: none;
  cursor: pointer;
`;

const BodyContainer = styled.div`
  display: flex;
  flex: 1;
`;

const ReviewImageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 5;
`;
const ReviewImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  padding: 30px;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ImageInput = styled.input`
  display: none;
`;
const ArrowLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  user-select: none;
  cursor: pointer;
`;
const ArrowRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  user-select: none;
  cursor: pointer;
`;
const Dots = styled.div`
  display: flex;
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
`;
const Dot = styled.div`
  margin: 0 4px;
  width: 12px;
  height: 12px;
  background-color: ${({ active }) => (active ? '#fff' : 'rgba(255, 255, 255, 0.5)')};
  border-radius: 50%;
  transition: background-color 0.3s;
  user-select: none;
  pointer-events: auto; // Dot이 클릭 가능하도록 설정
  cursor: pointer;
`;
const AddIcon = styled(Add)`
  width: 32px;
  height: 32px;
`;
const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 12px;
  right: 12px;
  width: 32px;
  height: 32px;
  background: rgba(0, 0, 0, 0.6);
  transition: background-color 0.3s ease-in-out;
  border-radius: 50%;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.6);
  }
`;

const ReviewContentContainer = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  padding: 16px 30px 10px;
`;
const ReviewContentHeader = styled.div`
  display: flex;
  align-items: center;
`;
const AuthorCircleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-right: 30px;
  width: 50px;
  height: 50px;
  border: 5px solid #ddd;
  border-radius: 50%;
  overflow: hidden;
`;
const AuthorImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Nickname = styled.span`
  flex: 1;
  text-align: start;
  color: #fff;
  font-size: 28px;
  font-family: 'Oleo Script Swash Caps';
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;
`;
const ReviewTypeBtn = styled.button`
  padding: 8px 12px;
  background-color: ${({ $active }) => ($active ? 'rgba(255, 255, 255, 0.25)' : 'inherit')};
  border: 2px solid #fff;
  border-radius: 20px;
  color: #fff;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }

  &:first-of-type {
    margin-right: 10px;
  }
`;

const ReviewContent = styled.textarea`
  flex: 1;
  margin-top: 16px;
  padding: 12px;
  width: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  font-size: 16px;
  background-color: #f9f9f9;
  resize: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
  }
`;
const ReviewInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
`;
const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const CategoryTitle = styled.div`
  font-size: 16px;
  color: #fff;
`;
const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  margin-top: 12px;
`;
const CategoryBtn = styled.button`
  padding: 10px;
  background-color: ${({ $active }) => ($active ? '#007bff' : '#f0f0f0')};
  border: 1px solid ${({ $active }) => ($active ? '#007bff' : '#e0e0e0')};
  border-radius: 5px;
  border: none;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
  color: ${({ $active }) => ($active ? '#fff' : '#000')};
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: ${({ $active }) => ($active ? '#0056b3' : '#d0d0d0')};
  }
`;
const AdditionalInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
`;
const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  &:first-of-type {
    margin-bottom: 8px;
  }
`;
const CategorySelectIcon = styled(CategorySelect)`
  width: 26px;
  height: 100%;
  stroke: #fff;
`;
const InfoTitle = styled.span`
  font-size: 16px;
  color: #fff;
  min-width: 120px;
`;
const InfoInput = styled.input`
  font-size: 16px;
  padding: 8px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  flex: 1;
  background-color: #f9f9f9;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
  }
`;
