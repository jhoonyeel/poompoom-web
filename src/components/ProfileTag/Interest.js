import { useState } from 'react';
import styled from 'styled-components';

export default function Interest({ setSelectedButton }) {
  const [hoveredButton, setHoveredButton] = useState('');

  const handleHover = (buttonName) => {
    setHoveredButton(buttonName);
  };

  const handleClick = (name) => {
    setHoveredButton('');
    setSelectedButton(name);
  };

  return (
    <Container>
      <Title>관심사는 무엇인가요?</Title>
      <ButtonContainers>
        <ButtonContainer>
          <Button onMouseEnter={() => handleHover('스포츠')}>스포츠</Button>
          {hoveredButton === '스포츠' && (
            <FixedSubButtonContainer>
              <SubButton onClick={(event) => handleClick(event.target.textContent)}>축구/농구/야구</SubButton>
              <SubButton onClick={(event) => handleClick(event.target.textContent)}>배드민턴/테니스/골프</SubButton>
              <SubButton onClick={(event) => handleClick(event.target.textContent)}>스쿠버/수영</SubButton>
              <SubButton onClick={(event) => handleClick(event.target.textContent)}>산악/클라이밍</SubButton>
            </FixedSubButtonContainer>
          )}
        </ButtonContainer>

        <ButtonContainer>
          <Button onMouseEnter={() => handleHover('예술 및 문화')}>예술 및 문화</Button>
          {hoveredButton === '예술 및 문화' && (
            <FixedSubButtonContainer>
              <SubButton onClick={(event) => handleClick(event.target.textContent)}>음악</SubButton>
              <SubButton onClick={(event) => handleClick(event.target.textContent)}>미술</SubButton>
              <SubButton onClick={(event) => handleClick(event.target.textContent)}>문학</SubButton>
              <SubButton onClick={(event) => handleClick(event.target.textContent)}>영화/연극</SubButton>
            </FixedSubButtonContainer>
          )}
        </ButtonContainer>
        <ButtonContainer>
          <Button onMouseEnter={() => handleHover('홈/가드닝')}>홈/가드닝</Button>
          {hoveredButton === '홈/가드닝' && (
            <FixedSubButtonContainer>
              <SubButton onClick={(event) => handleClick(event.target.textContent)}>원예</SubButton>
              <SubButton onClick={(event) => handleClick(event.target.textContent)}>반려동물</SubButton>
              <SubButton onClick={(event) => handleClick(event.target.textContent)}>공예</SubButton>
              <SubButton onClick={(event) => handleClick(event.target.textContent)}>요리</SubButton>
            </FixedSubButtonContainer>
          )}
        </ButtonContainer>
        <ButtonContainer>
          <Button onMouseEnter={() => handleHover('친목/동물')}>친목/동물</Button>
          {hoveredButton === '친목/동물' && (
            <FixedSubButtonContainer>
              <SubButton onClick={(event) => handleClick(event.target.textContent)}>친목</SubButton>
              <SubButton onClick={(event) => handleClick(event.target.textContent)}>동호회</SubButton>
              <SubButton onClick={(event) => handleClick(event.target.textContent)}>동물</SubButton>
            </FixedSubButtonContainer>
          )}
        </ButtonContainer>
      </ButtonContainers>
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
`;

const ButtonContainers = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 20px;
  padding: 2rem 0;
`;

const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

const FixedSubButtonContainer = styled.div`
  position: absolute;
  top: 40px; /* Adjust as needed to position the sub-buttons below the main button */
  display: flex;
  gap: 10px;
  margin-top: 5px;
`;

const Button = styled.button`
  margin: 0;
  width: fit-content;
  background: #f0f0f0;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  opacity: 0.5;
  transition: all 0.5s;
  cursor: pointer;

  &:hover {
    opacity: 1;
    background: #ff8c00;
  }
`;

const SubButton = styled.button`
  width: 7rem;
  background: #f0f0f0;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  transition: all 0.5s;
  cursor: pointer;

  &:hover {
    background: #e07c00;
    transform: scale(120%);
  }

  ${(props) =>
    props.hidden &&
    `
display: none;
`}
`;
