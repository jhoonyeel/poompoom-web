import { useState } from 'react';
import styled from 'styled-components';

export default function Purpose() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleClick = (value) => {
    setSelectedButton(value);
  };

  // 230부터 290까지 5단위로 숫자 버튼 생성
  const buttonValues = Array.from({ length: (290 - 230) / 5 + 1 }, (_, i) => 230 + i * 5);

  return (
    <Container>
      <Title>{selectedButton ? ` ${selectedButton}` : '신발'}</Title>

      <ButtonContainer>
        {buttonValues.map((value) => (
          <SubButton key={value} onClick={() => handleClick(value)} isSelected={selectedButton === value}>
            {value}
          </SubButton>
        ))}
      </ButtonContainer>
    </Container>
  );
}

// Styled-components

const Container = styled.div`
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  padding: 1rem;
  width: 593px;
  border-radius: 38.5px;
  border: 3px solid #8c8c8c;
  color: #8c8c8c;
  text-align: center;
  font-size: 18px;
`;

const ButtonContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 버튼 2줄 배치 */
  gap: 10px;
  margin: 2rem;
  justify-content: center;
`;

const SubButton = styled.button`
  width: 60px;
  height: 40px;
  background: ${(props) => (props.isSelected ? '#0e5649' : '#f0f0f0')};
  border: none;
  font-size: 16px;
  border-radius: 10px;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background: #0e5649;
    transform: scale(1.1);
  }
`;
