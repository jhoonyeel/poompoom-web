import styled from 'styled-components';

const GenderSelector = ({ setSelectedButton }) => {
  const handleClick = (name) => {
    setSelectedButton(name);
  };

  return (
    <Container>
      <Title>성별은 무엇인가요?</Title>

      <ButtonContainer>
        <SubButton onClick={(event) => handleClick(event.target.textContent)}>여성</SubButton>
        <SubButton onClick={(event) => handleClick(event.target.textContent)}>남성</SubButton>
      </ButtonContainer>
    </Container>
  );
};

export default GenderSelector;

const Container = styled.div`
  font-family: 'S-CoreDream-3Light';
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const Title = styled.div`
  padding: 1rem;
  width: 593px;
  border-radius: 38.5px;
  border: 3px solid #0e5649;
  color: #0e5649;
`;

const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin: 2rem;
`;

const SubButton = styled.button`
  font-family: 'S-CoreDream-3Light';
  width: fit-content;
  background: wheat;
  padding: 10px 20px;
  border-radius: 20px;
  transition: all 0.5s;
  cursor: pointer;
  border: 1px solid #0e5649;
  color: #0e5649;

  &:hover {
    background: #0e5649;
    transform: scale(120%);
    color: wheat;
  }

  ${(props) =>
    props.hidden &&
    `
display: none;
`}
`;
