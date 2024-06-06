import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Interest from './component/Interest';
import Job from './component/Job';
import Purpose from './component/Purpose';
import Image from './component/Image';
import AgeSlider from './AgeSlider';

export default function QuickGift() {
  const initialButtons = [
    { id: 1, value: '' },
    { id: 2, value: '' },
    { id: 3, value: '' },
    { id: 4, value: '' },
    { id: 5, value: '' },
  ];

  const [buttons, setButtons] = useState(initialButtons);
  const [selectedAgeLabel, setSelectedAgeLabel] = useState('10대 후반');
  const AccessToken = localStorage.getItem('AccessToken');

  const setSelectedButton = (id, value) => {
    setButtons(buttons.map((button) => (button.id === id ? { ...button, value } : button)));
  };

  const navigate = useNavigate();
  const onClickSubmit = async () => {
    const hashtagList = buttons.map((button) => button.value).filter((value) => value); // 빈 값 제외

    console.log(hashtagList);
    try {
      const result = await axios.post(
        'profile/createVirtual',
        { hashtagList },
        {
          headers: {
            access: `${AccessToken}`,
            'Content-Type': 'application/json',
          },
        },
      );
      console.log('Response:', result.data);
      navigate('/lovers-profile-set');
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <Container>
      <IntroText>님의 연인 님의 프로필</IntroText>

      <BasketContainer>
        <BasketWrapper>
          태그 바구니
          <Basket>
            {buttons.map((button) => (
              <Button key={button.id}>{button.value}</Button>
            ))}
          </Basket>
        </BasketWrapper>

        <BasketWrapper>
          기념일 캘린더
          <Basket>.</Basket>
        </BasketWrapper>
      </BasketContainer>
      <SubText>
        질문에 대답 시 태그 바구니와 캘린더가 채워지게 됩니다. 이를 토대로 실제 선물 리뷰글이 추천돼 보다 센스있는
        선물을 하실 수 있습니다!
      </SubText>
      <Wrapper>
        1. 나이
        <AgeSlider
          setSelectedButton={(value) => setSelectedButton(1, value)}
          setSelectedAgeLabel={setSelectedAgeLabel}
        />
        <div>{selectedAgeLabel}</div>
      </Wrapper>
      <Wrapper>
        2. 관심사
        <Interest setSelectedButton={(value) => setSelectedButton(2, value)} />
      </Wrapper>
      <Wrapper>
        3. 직업
        <Job setSelectedButton={(value) => setSelectedButton(3, value)} />
      </Wrapper>
      <Wrapper>
        4. 이미지
        <Image setSelectedButton={(value) => setSelectedButton(4, value)} />
      </Wrapper>
      <Wrapper>
        5. 선물 목적
        <Purpose setSelectedButton={(value) => setSelectedButton(5, value)} />
      </Wrapper>

      <SubmitButton onClick={onClickSubmit}>프로필 저장</SubmitButton>
    </Container>
  );
}

const Container = styled.div`
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IntroText = styled.div`
  font-size: 30px;
  margin-top: 10rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const SubText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 977px;
  height: 57px;
  font-size: 15px;
  background-color: #d9d9d9;
  margin-bottom: 3rem;
`;

const BasketContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const BasketWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;
const Wrapper = styled.div`
  margin: 2rem;
`;

const Basket = styled.div`
  display: flex;
  flex-direction: column;
  background: #d9d9d9;
  width: 279px;
  height: 279px;
  border-radius: 10px;
  margin: 0 1rem;
  padding: 1rem;
`;

const Button = styled.button`
  margin: 10px 0;
  width: fit-content;
`;

const SubmitButton = styled.button`
  font-size: 25px;
  background-color: #ffcc8d;
  margin-bottom: 3rem;
  &:disabled {
    background-color: gray;
  }
`;
