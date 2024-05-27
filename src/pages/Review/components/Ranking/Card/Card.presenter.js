import styled, { css } from 'styled-components';

function CardUI({ index, totalCards, content }) {
  return (
    <StyledCard index={index} totalCards={totalCards}>
      {content}
    </StyledCard>
  );
}

export default CardUI;

const StyledCard = styled.div`
  position: absolute;
  width: 300px; /* Adjusted */
  height: 450px; /* Adjusted */
  background-color: #ccc;
  border-radius: 10px;
  transform-origin: bottom center;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;

  ${(props) =>
    props.index !== undefined &&
    css`
      transform: rotate(${props.index * (360 / props.totalCards)}deg) translateY(-550px); /* Adjusted */
      opacity: 1;
    `}
`;
