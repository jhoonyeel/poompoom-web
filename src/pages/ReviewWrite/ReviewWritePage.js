import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from '../../apis/axios';
import DummyPhoto from '../../assets/DummyPhoto.svg';
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

  const navigate = useNavigate();

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
      const response = await axios.post('/review/create', formData, {
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

  return (
    <Form onSubmit={handleSubmit}>
      <ImageUploadSection>
        <ImagePlaceholder onClick={() => document.getElementById('imageInput').click()}>
          {previewImages.length > 0 ? (
            previewImages.map((src, index) => <img src={src} alt={`preview ${index}`} />)
          ) : (
            <img src={DummyPhoto} alt="placeholder" />
          )}
        </ImagePlaceholder>
        <ImageInput id="imageInput" type="file" multiple onChange={handleImageChange} />
      </ImageUploadSection>
      <ContentSection>
        <User>@poompoom_in_love</User>
        <RadioButtonGroup>
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
        </RadioButtonGroup>
        <Textarea
          name="content"
          placeholder="문구를 입력해주세요..."
          value={reviewData.content}
          onChange={handleInputChange}
        />
        <AdditionalInfo>
          <InfoHeader>카테고리 선택</InfoHeader>
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
      <SubmitButton type="submit">업로드하기</SubmitButton>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ImageUploadSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const ImagePlaceholder = styled.div`
  width: 500px;
  height: 500px;
  border: 2px dashed #c0c0c0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
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

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const User = styled.div`
  font-family: 'Oleo Script Swash Caps', system-ui;
  font-size: 1.5em;
  color: #333333;
  margin-bottom: 10px;
`;

const RadioButtonGroup = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const RadioButton = styled.button`
  background-color: ${({ $active }) => ($active ? '#007bff' : '#e0e0e0')};
  color: ${({ $active }) => ($active ? '#ffffff' : '#333333')};
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin-right: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${({ $active }) => ($active ? '#0056b3' : '#c0c0c0')};
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 120px;
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
  color: #333333;
  margin-bottom: 10px;
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

const SubmitButton = styled.button`
  padding: 12px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  align-self: flex-end;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
