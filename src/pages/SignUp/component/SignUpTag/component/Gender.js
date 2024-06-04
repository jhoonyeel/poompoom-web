import styled from 'styled-components';

export default function Gender({ setSelectedButton }) {
  const handleClick = (name) => {
    setSelectedButton(name);
  };

  return (
    <Container>
      <Title>직업은 무엇인가요?</Title>

      <ButtonContainer>
        <SubButton onClick={(event) => handleClick(event.target.textContent)}>여성</SubButton>
        <SubButton onClick={(event) => handleClick(event.target.textContent)}>남성</SubButton>
      </ButtonContainer>
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

const Title = styled.div`
  padding: 1rem;
  width: 593px;
  border-radius: 38.5px;
  border: 3px solid #8c8c8c;
  color: #8c8c8c;
`;

const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin: 2rem;
`;

const SubButton = styled.button`
  width: fit-content;
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
