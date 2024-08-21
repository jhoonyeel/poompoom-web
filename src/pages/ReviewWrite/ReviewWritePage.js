import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import axios from '../../apis/axios';
import DummyPhoto from '../../assets/DummyPhoto.svg';
import { useFetchProfilePicture } from '../../hooks/useFetchProfilePicture';
import { profilePictureState } from '../../recoil/atoms';
import { CATEGORIES } from '../../shared/categories';

export default function ReviewWritePage() {
  const [reviewData, setReviewData] = useState({
    content: '',
    price: '',
    source: '',
    category: '',
    reviewType: 'RECEIVED',
  });
  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReviewData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);

    const previewUrls = files.map((file) => URL.createObjectURL(file));
    setPreviewImages(previewUrls);
    setCurrentImageIndex(0); // Reset the current index when new images are added
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { content, price, source, category, reviewType } = reviewData;

    // Validate form fields
    if (!content || !price || !source || !category || !reviewType) {
      // eslint-disable-next-line no-alert
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
    });

    // FormData 객체를 생성하여 데이터를 담기
    const formData = new FormData();
    formData.append('body', new Blob([jsonBody], { type: 'application/json' }));
    if (images.length) {
      images.forEach((image) => {
        formData.append('photos', image);
      });
    }

    try {
      const response = await axios.post(`/review/create`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Success:', response.data);
      navigate('/review');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const nextImage = (e) => {
    e.stopPropagation(); // 이벤트 전파 방지
    setCurrentImageIndex((prevIndex) => (prevIndex === previewImages.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = (e) => {
    e.stopPropagation(); // 이벤트 전파 방지
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? previewImages.length - 1 : prevIndex - 1));
  };

  // 프로필 사진을 가져오는 커스텀 훅 호출
  useFetchProfilePicture();

  // Recoil 상태에서 프로필 사진 경로를 읽어옴
  const profilePicture = useRecoilValue(profilePictureState);

  return (
    <Form onSubmit={handleSubmit}>
      <Top>
        <Title>새 무드뷰 만들기</Title>
        <SubmitButton type="submit">업로드하기</SubmitButton>
      </Top>
      <Bottom>
        <ImageUploadSection>
          <ImagePlaceholder onClick={() => document.getElementById('imageInput').click()}>
            {previewImages.length > 0 ? (
              <>
                <img src={previewImages[currentImageIndex]} alt={`preview ${currentImageIndex}`} />
                <ArrowLeft onClick={prevImage}>&#8249;</ArrowLeft>
                <ArrowRight onClick={nextImage}>&#8250;</ArrowRight>
                <Dots>
                  {previewImages.map((_, index) => (
                    <Dot active={index === currentImageIndex} />
                  ))}
                </Dots>
              </>
            ) : (
              <img src={DummyPhoto} alt="placeholder" />
            )}
          </ImagePlaceholder>
          <ImageInput id="imageInput" type="file" multiple onChange={handleImageChange} />
        </ImageUploadSection>
        <ContentSection>
          <Info>
            <AuthorCircleBox>
              <AuthorImg src={profilePicture} alt="프로필 사진" />
            </AuthorCircleBox>
            <User>@poompoom_in_love</User>
            <RadioButton
              type="button"
              $active={reviewData.reviewType === 'RECEIVED'}
              onClick={() => setReviewData((prevData) => ({ ...prevData, reviewType: 'RECEIVED' }))}
            >
              받은 선물
            </RadioButton>
            <RadioButton
              type="button"
              $active={reviewData.reviewType === 'GIVEN'}
              onClick={() => setReviewData((prevData) => ({ ...prevData, reviewType: 'GIVEN' }))}
            >
              준 선물
            </RadioButton>
          </Info>
          <Textarea
            name="content"
            placeholder="문구를 입력해주세요..."
            value={reviewData.content}
            onChange={handleInputChange}
          />
          <AdditionalInfo>
            <CategoryTitle>
              <img alt="카테고리 선택 아이콘" />
              <InfoHeader>카테고리 선택</InfoHeader>
            </CategoryTitle>
            <GridBox>
              {CATEGORIES.map((cat) => (
                <CategoryButton
                  key={cat}
                  type="button"
                  onClick={() => setReviewData((prevData) => ({ ...prevData, category: cat }))}
                >
                  {cat}
                </CategoryButton>
              ))}
            </GridBox>
            <FlexBox>
              <InfoHeader>제품 정보(링크)</InfoHeader>
              <InfoInput name="source" type="text" value={reviewData.source} onChange={handleInputChange} />
            </FlexBox>
            <FlexBox>
              <InfoHeader>가격</InfoHeader>
              <InfoInput name="price" type="text" value={reviewData.price} onChange={handleInputChange} />
            </FlexBox>
          </AdditionalInfo>
        </ContentSection>
      </Bottom>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 20px auto;
  border: 5px solid #072623;
  border-radius: 25px;
  background: #072623;
  box-shadow:
    0px 4px 60px rgba(0, 0, 0, 0.25),
    inset 0px 0px 80px #022622;
`;
const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Title = styled.h3`
  color: white;
  font-weight: bold;
  padding: 12px 20px;
`;
const SubmitButton = styled.button`
  font-size: 16px;
  font-weight: bold;
  padding: 12px 20px;
  color: white;
  background-color: inherit;
  border: none;
  cursor: pointer;
  display: flex;
`;

const Bottom = styled.div`
  width: 100%;
  display: flex;
`;

const ImageUploadSection = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;
const ImagePlaceholder = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 0px 0px 25px 25px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
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
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  font-size: 24px;
  color: white;
  cursor: pointer;
  user-select: none;
`;
const ArrowRight = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  font-size: 24px;
  color: white;
  cursor: pointer;
  user-select: none;
`;
const Dots = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
`;
const Dot = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${({ active }) => (active ? 'white' : 'rgba(255, 255, 255, 0.5)')};
  border-radius: 50%;
  margin: 0 4px;
  transition: background-color 0.3s;
`;

const ContentSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 2% 4%;
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const AuthorCircleBox = styled.div`
  position: relative;
  z-index: 1;
  width: 100px;
  height: 100px;
  border: 10px solid #ddd;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const AuthorImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지 비율을 유지하며 자를 때 사용 */
`;

const User = styled.div`
  font-family: 'Oleo Script Swash Caps', system-ui;
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 115%;
  color: #ffffff;
  display: flex;
  align-items: center;
  flex: 1;
`;
const RadioButton = styled.button`
  color: #ffffff;
  background-color: ${({ $active }) => ($active ? 'rgba(255, 255, 255, 0.25)' : 'inherit')};
  border: 2px solid #ffffff;
  border-radius: 27px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 12px;
  margin-bottom: 20px;
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
const AdditionalInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`;
const CategoryTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  margin-bottom: 20px;
`;
const CategoryButton = styled.button`
  padding: 10px;
  background-color: #f0f0f0;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #d0d0d0;
  }
`;
const FlexBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
`;
const InfoHeader = styled.h3`
  font-size: 1em;
  color: #ffffff;
  width: 150px;
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
