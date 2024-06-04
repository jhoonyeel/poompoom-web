import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';

export default function ReviewWritePage() {
  const [giftType, setGiftType] = useState('RECEIVED');
  const [senderReceiver, setSenderReceiver] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState(null);
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState(1);
  const [source, setSource] = useState('');

  const ACCESS_TOKEN = 'your_access_token_here'; // 여기에 본인의 ACCESS_TOKEN을 넣어주세요

  const handleSubmit = (e) => {
    e.preventDefault();
    // 리뷰 작성 내용을 서버에 전송하는 로직
    // FormData 객체를 생성하여 데이터를 담기
    const formData = new FormData();
    formData.append('body', content);
    formData.append('price', price);
    formData.append('whereBuy', source);
    formData.append('starPoint', rating);
    formData.append('category', category);
    formData.append('reviewType', giftType);
    images.forEach((image, index) => {
      formData.append(`photos[${index}]`, image);
    });

    axios
      .post('/review/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      })
      .then((response) => {
        console.log('Success:', response.data);
        // 성공적으로 제출된 후 추가 작업 (예: 페이지 이동 또는 알림 표시)
      })
      .catch((error) => {
        console.error('Error:', error);
        // 에러 처리
      });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="received">
        <input
          id="received"
          type="radio"
          value="received"
          checked={giftType === 'RECEIVED'}
          onChange={() => setGiftType('RECEIVED')}
        />
        받은 선물
      </Label>
      <Label htmlFor="given">
        <input
          id="given"
          type="radio"
          value="GIVEN"
          checked={giftType === 'GIVEN'}
          onChange={() => setGiftType('GIVEN')}
        />
        보낸 선물
      </Label>
      <br />
      <Label htmlFor="senderReceiver">
        누가 누구한테 보내는지:
        <Input
          id="senderReceiver"
          type="text"
          value={senderReceiver}
          onChange={(e) => setSenderReceiver(e.target.value)}
        />
      </Label>
      <br />
      <Label htmlFor="category">
        카테고리:
        <Select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">카테고리 선택</option>
          <option value="100일">100일</option>
          <option value="n주년">n주년</option>
          <option value="생일">생일</option>
          <option value="크리스마스">크리스마스</option>
          <option value="OO데이">OO데이</option>
          <option value="가벼운 선물">가벼운 선물</option>
          <option value="사과의 선물">사과의 선물</option>
          <option value="청혼">청혼</option>
        </Select>
      </Label>
      <br />
      <Label htmlFor="content">
        본문 내용:
        <Textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} />
      </Label>
      <br />
      <Label htmlFor="image">
        사진:
        <Input id="image" type="file" multiple onChange={handleImageChange} />
      </Label>
      <br />
      <Label htmlFor="price">
        선물 가격:
        <Input id="price" type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
      </Label>
      <br />
      <Label htmlFor="rating">
        별점:
        <Input id="rating" type="number" min="1" max="5" value={rating} onChange={(e) => setRating(e.target.value)} />
      </Label>
      <br />
      <Label htmlFor="source">
        선물 출처:
        <Input id="source" type="text" value={source} onChange={(e) => setSource(e.target.value)} />
      </Label>
      <br />
      <Button type="submit">리뷰 작성 완료</Button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
`;

const Label = styled.label`
  margin-bottom: 10px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Textarea = styled.textarea`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Select = styled.select`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;
