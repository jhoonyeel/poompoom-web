import styled from 'styled-components';

export default function Purpose({ setSelectedButton }) {
  const handleClick = (name) => {
    setSelectedButton(name);
  };

  return (
    <Container>
      <Title>선물의 목적은 무엇인가요?</Title>

      <ButtonContainer>
        <SubButton onClick={(event) => handleClick(event.target.textContent)}>화려한</SubButton>
        <SubButton onClick={(event) => handleClick(event.target.textContent)}>고급스러운/세련된</SubButton>
        <SubButton onClick={(event) => handleClick(event.target.textContent)}>포근한/다정한</SubButton>
        <SubButton onClick={(event) => handleClick(event.target.textContent)}>독특한/특별한</SubButton>
        <SubButton onClick={(event) => handleClick(event.target.textContent)}>실용적인/꼼꼼한</SubButton>
        <SubButton onClick={(event) => handleClick(event.target.textContent)}>웃긴/재미있는</SubButton>
        <SubButton onClick={(event) => handleClick(event.target.textContent)}>활동적인/활기있는</SubButton>
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
