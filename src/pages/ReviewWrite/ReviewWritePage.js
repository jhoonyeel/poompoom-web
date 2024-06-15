import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import DummyPhoto from '../../assets/DummyPhoto.svg';

export default function ReviewWritePage() {
  const [reviewType, setReviewType] = useState('RECEIVED');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState([]);
  const [price, setPrice] = useState('');
  const [source, setSource] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    if (!content || !price || !source || !category || !reviewType) {
      // eslint-disable-next-line no-alert
      alert('모든 필드를 입력해주세요.');
      return;
    }

    // FormData 객체를 생성하여 데이터를 담기
    const formData = new FormData();
    formData.append('body', content);
    formData.append('price', price);
    formData.append('whereBuy', source);
    formData.append('category', category);
    formData.append('reviewType', reviewType);
    if (images) {
      images.forEach((image) => {
        formData.append(`photos`, image);
      });
    }

    console.log(formData);
    // eslint-disable-next-line no-restricted-syntax
    for (const pair of formData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }
    try {
      const response = await axios.post('/review/create', formData);
      console.log('Success:', response.data);
      navigate('/review');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <ImageUploadSection>
        <ImagePlaceholder onClick={() => document.getElementById('imageInput').click()}>
          <img src={DummyPhoto} alt="placeholder" />
        </ImagePlaceholder>
        <ImageInput id="imageInput" type="file" multiple onChange={handleImageChange} />
      </ImageUploadSection>
      <ContentSection>
        <User>@poompoom_in_love</User>
        <RadioButtonGroup>
          <RadioButton type="button" $active={reviewType === 'RECEIVED'} onClick={() => setReviewType('RECEIVED')}>
            받은 선물
          </RadioButton>
          <RadioButton type="button" $active={reviewType === 'GIVEN'} onClick={() => setReviewType('GIVEN')}>
            준 선물
          </RadioButton>
        </RadioButtonGroup>
        <Textarea placeholder="문구를 입력해주세요..." value={content} onChange={(e) => setContent(e.target.value)} />
        <AdditionalInfo>
          <InfoHeader>카테고리 선택</InfoHeader>
          <GridBox>
            <CategoryButton type="button" onClick={() => setCategory('가벼운 선물')}>
              가벼운 선물
            </CategoryButton>
            <CategoryButton type="button" onClick={() => setCategory('100일')}>
              100일
            </CategoryButton>
            <CategoryButton type="button" onClick={() => setCategory('로맨틱 데이')}>
              로맨틱 데이
            </CategoryButton>
            <CategoryButton type="button" onClick={() => setCategory('생일')}>
              생일
            </CategoryButton>
            <CategoryButton type="button" onClick={() => setCategory('사과의 선물')}>
              사과의 선물
            </CategoryButton>
            <CategoryButton type="button" onClick={() => setCategory('n주년')}>
              n주년
            </CategoryButton>
            <CategoryButton type="button" onClick={() => setCategory('크리스마스')}>
              크리스마스
            </CategoryButton>
            <CategoryButton type="button" onClick={() => setCategory('청혼')}>
              청혼
            </CategoryButton>
          </GridBox>
          <FlexBox>
            <InfoHeader>제품 정보(링크)</InfoHeader>
            <InfoInput id="source" type="text" value={source} onChange={(e) => setSource(e.target.value)} />
          </FlexBox>
          <FlexBox>
            <InfoHeader>가격</InfoHeader>
            <InfoInput id="price" type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
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
  width: 280px;
  height: 280px;
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
  margin-right: 10px;
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
