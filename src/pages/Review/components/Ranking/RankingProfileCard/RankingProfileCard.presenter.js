import styled, { css } from 'styled-components';

function RankingProfileCardUI({ cards, handleMouseDown, calculateIndex }) {
  return (
    <Wrapper onMouseDown={handleMouseDown}>
      <CardContainer>
        {cards.map((card, index) => (
          <Card key={card} index={calculateIndex(index)} visible={index < 6} />
        ))}
      </CardContainer>
    </Wrapper>
  );
}

export default RankingProfileCardUI;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Card = styled.div`
  position: absolute;
  width: 100px;
  height: 150px;
  background-color: #ccc;
  border-radius: 10px;
  transform-origin: bottom center;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
  ${(props) =>
    props.index !== undefined &&
    css`
      transform: rotate(${props.index}deg) translateY(${props.visible ? '-300px' : '-400px'});
      opacity: ${props.visible ? 1 : 0};
    `}
`;

const CardContainer = styled.div`
  position: relative;
  width: 600px;
  height: 600px;
  overflow: hidden;
`;
