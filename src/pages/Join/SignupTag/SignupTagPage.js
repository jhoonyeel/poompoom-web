import { useState } from 'react';
import styled from 'styled-components';
import Gender from './component/Gender';
import Interest from './component/Interest';
import Job from './component/Job';

export default function SignUpTagPage() {
  const initialButtons = [
    { id: 1, value: '' },
    { id: 2, value: '' },
    { id: 3, value: '' },
    { id: 4, value: '' },
  ];

  const [buttons, setButtons] = useState(initialButtons);

  const setSelectedButton = (id, value) => {
    setButtons(buttons.map((button) => (button.id === id ? { ...button, value } : button)));
  };

  return (
    <Container>
      <IntroText>프로필 태그 선택</IntroText>
      <BasketContainer>
        <BasketWrapper>
          태그 바구니
          <Basket>
            {buttons.map((button) => (
              <Button key={button.id}>{button.value}</Button>
            ))}
          </Basket>
        </BasketWrapper>
      </BasketContainer>
      <Container>
        <Wrapper>
          2. 성별
          <Gender setSelectedButton={(value) => setSelectedButton(2, value)} />
        </Wrapper>
        3. 직업 <Job setSelectedButton={(value) => setSelectedButton(3, value)} /> 4. 관심사{' '}
        <Interest setSelectedButton={(value) => setSelectedButton(4, value)} />
      </Container>
      <SubmitButton>회원가입</SubmitButton>
    </Container>
  );
}

const BasketContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const BasketWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;
const Container = styled.div`
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  margin: 2rem 0;
`;
const Button = styled.button`
  margin: 10px 0;
  width: fit-content;
`;

const IntroText = styled.div`
  margin-top: 10rem;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
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
  /* min-height: 30px;
  position: fixed;
  top: 200px;
  right: -10px;
  z-index: 1000; */
`;

const SubmitButton = styled.button``;
