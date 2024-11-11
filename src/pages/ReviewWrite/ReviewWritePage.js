import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import axios from '../../apis/axios';
import DummyPhoto from '../../assets/DummyPhoto.svg';
import { useFetchProfilePicture } from '../../hooks/useFetchProfilePicture';
import { useNavigatePath } from '../../hooks/useNavigatePath';
import { profilePictureState } from '../../recoil/atoms';
import { CATEGORIES } from '../../shared/categories';

export default function ReviewWritePage({ mode = 'create' }) {
  const { reviewId } = useParams(); // 리뷰 ID를 URL에서 가져옵니다 (수정 모드일 때 필요).
  const location = useLocation(); // 전달된 데이터를 받아오기 위해 useLocation 사용

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
  const [willDeletePhoto, setWillDeletePhoto] = useState([]);

  const navigatePath = useNavigatePath();

  // 프로필 사진을 가져오는 커스텀 훅 호출
  useFetchProfilePicture();
  // Recoil 상태에서 프로필 사진 경로를 읽어옴
  const profilePicture = useRecoilValue(profilePictureState);

  useEffect(() => {
    if (mode === 'edit' && reviewId) {
      // location.state에 데이터가 있는지 확인하고 초기화
      if (location.state) {
        const data = location.state;
        setReviewData({
          content: data.body,
          price: data.price.toString(),
          source: data.whereBuy || '',
          category: data.hashTags[0].name || '',
          reviewType: data.reviewType || 'RECEIVED',
        });
        // 기존 사진 미리보기 설정
        if (data.photos && data.photos.length > 0) {
          const imageUrls = data.photos.map((photo) => photo.photoPath); // photoPath만 추출
          setPreviewImages(imageUrls);
        }
      } else {
        // 수정 모드에서 기존 리뷰 데이터를 불러옵니다.
        const fetchReviewData = async () => {
          try {
            console.log('/review/${} API 실행');
            const response = await axios.get(`/review/${reviewId}`);
            const { data } = response;
            setReviewData({
              content: data.body.body,
              price: data.body.price.toString(),
              source: data.body.whereBuy || '',
              category: data.body.hashTags.name[0] || '',
              reviewType: data.body.reviewType || 'RECEIVED',
            });
            // 기존 사진 미리보기 설정
            if (data.photos && data.photos.length > 0) {
              const imageUrls = data.photos.map((photo) => photo.photoPath); // photoPath만 추출
              setPreviewImages(imageUrls);
            }
          } catch (error) {
            console.error('Failed to fetch review data:', error);
          }
        };
        fetchReviewData();
      }
    }
  }, [mode, reviewId, location.state]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReviewData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    // 새로 선택된 이미지 파일의 미리보기 URL을 생성
    const newImageUrl = URL.createObjectURL(files[0]);

    // images 배열에서 currentImageIndex에 해당하는 이미지 파일을 교체
    setImages((prevImages) => {
      const updatedImages = [...prevImages];
      if (currentImageIndex >= updatedImages.length) {
        updatedImages.push(files[0]); // 현재 인덱스가 범위를 초과하면 새로 추가
      } else {
        // eslint-disable-next-line prefer-destructuring
        updatedImages[currentImageIndex] = files[0]; // 현재 인덱스의 이미지만 교체
      }
      return updatedImages;
    });

    // previewImages 배열에서 currentImageIndex에 해당하는 이미지 미리보기를 교체
    setPreviewImages((prevPreviewImages) => {
      const updatedPreviewImages = [...prevPreviewImages];
      if (currentImageIndex >= updatedPreviewImages.length) {
        updatedPreviewImages.push(newImageUrl); // 현재 인덱스가 범위를 초과하면 새로 추가
      } else {
        updatedPreviewImages[currentImageIndex] = newImageUrl; // 현재 인덱스의 미리보기 이미지만 교체
      }
      return updatedPreviewImages;
    });

    // 이미지를 수정할 때, 수정된 이미지의 ID를 찾아서 기존 배열에서 해당 ID를 제거
    setWillDeletePhoto((prev) => {
      // currentImageIndex에 해당하는 ID를 찾아서 제거
      return prev.filter((id) => id !== images[currentImageIndex].id);
    });
  };

  const handleDeleteImage = () => {
    if (images.length === 0) return; // 이미지가 없을 때는 아무 작업도 하지 않음

    // 현재 이미지의 ID를 willDeletePhoto 배열에 추가
    setWillDeletePhoto((prev) => [...prev, images[currentImageIndex].id]);
    setImages((prevImages) => prevImages.filter((_, index) => index !== currentImageIndex));
    setPreviewImages((prevPreviewImages) => prevPreviewImages.filter((_, index) => index !== currentImageIndex));
    setCurrentImageIndex(0); // 이미지 삭제 후 인덱스를 초기화
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { content, price, source, category, reviewType } = reviewData;

    // Validate form fields
    if (!content || !price || !source || !category || !reviewType) {
      // eslint-disable-next-line no-alert
      alert('모든 필드를 입력해주세요.');
      return;
    }

    // 새로운 이미지를 담는 배열
    const newImages = images.filter((image) => typeof image === 'object');
    console.log(newImages);

    // JSON 객체 생성
    const jsonBody = JSON.stringify({
      body: content,
      price: parseFloat(price),
      willDeletePhoto, // 삭제할 사진 ID 리스트
      whereBuy: source,
      category,
      reviewType,
    });

    /// formData로 새로 추가된 이미지 파일을 처리
    const formData = new FormData();
    formData.append('body', new Blob([jsonBody], { type: 'application/json' }));

    // newImages.forEach((image) => {
    //   formData.append('photos', image);
    // });
    console.log('newImages: ', newImages);
    console.log('images: ', images);
    console.log('previewImages: ', previewImages);

    // 수정 모드에서는 기존 이미지를 유지하면서 변경된 이미지를 업데이트
    if (mode === 'edit') {
      // 기존 이미지 유지 로직
      images.forEach((image) => {
        // 새로운 파일이거나 기존에 변경된 이미지만 추가
        console.log(images);

        if (typeof image === 'object') {
          formData.append(`photos`, image); // 기존 이미지는 string URL로 나타나기 때문에 새로 추가된 파일만 FormData에 추가
        }
      });
    } else {
      // 새로 추가할 이미지가 있으면 formData에 추가
      // eslint-disable-next-line no-lonely-if
      if (images.length) {
        images.forEach((image) => {
          formData.append('photos', image);
        });
      }
    }

    try {
      let response;
      if (mode === 'create') {
        response = await axios.post(`/review/create`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      } else if (mode === 'edit' && reviewId) {
        response = await axios.post(`/review/update/${reviewId}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      }
      console.log('Success:', response.data);
      navigatePath(`/review/${reviewId}`);
    } catch (error) {
      console.error('Error:', error);
      console.error('formData:', formData);
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

  return (
    <Form onSubmit={handleSubmit}>
      <Top>
        <Title>{mode === 'create' ? '새 무드뷰 만들기' : '무드뷰 수정하기'}</Title>
        <SubmitButton type="submit">{mode === 'create' ? '업로드하기' : '수정하기'}</SubmitButton>
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
                    <Dot
                      active={index === currentImageIndex}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(index);
                      }}
                    />
                  ))}
                </Dots>
                <DeleteButton
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteImage();
                  }}
                >
                  &times;
                </DeleteButton>
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
            <User>@test</User>
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
                  $active={reviewData.category === cat}
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
  cursor: pointer;
  pointer-events: auto; /* Dot이 클릭 가능하도록 설정 */
  user-select: none; /* 텍스트 선택을 방지하여 커서가 깜빡이지 않도록 설정 */
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
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
  background-color: ${({ $active }) => ($active ? '#007bff' : '#f0f0f0')};
  color: ${({ $active }) => ($active ? '#ffffff' : '#000000')};
  border: 1px solid ${({ $active }) => ($active ? '#007bff' : '#e0e0e0')};
  border-radius: 5px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
  &:hover {
    background-color: ${({ $active }) => ($active ? '#0056b3' : '#d0d0d0')};
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
