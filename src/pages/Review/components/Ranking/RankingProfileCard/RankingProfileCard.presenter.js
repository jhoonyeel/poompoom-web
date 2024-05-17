import styled, { css } from 'styled-components';
import React, { forwardRef } from 'react';

const RankingProfileCardUI = forwardRef(({ cards, handleMouseDown, handleMouseMove, handleMouseUp }, ref) => (
  <Wrapper onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
    <CardContainer ref={ref}>
      {cards.map((card, index) => (
        <Card key={card} index={index} totalCards={cards.length} />
      ))}
    </CardContainer>
  </Wrapper>
));

export default RankingProfileCardUI;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
  background-color: #f0f0f0;
  cursor: grab;
`;

const Card = styled.div`
  position: absolute;
  width: 150px; /* Adjusted width */
  height: 250px; /* Adjusted height */
  background-color: #ccc;
  border-radius: 10px;
  transform-origin: bottom center;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;

  ${(props) =>
    props.index !== undefined &&
    css`
      transform: rotate(${props.index * (360 / props.totalCards)}deg) translateY(-400px); /* Adjusted translateY for spacing */
      opacity: 1;
    `}
`;

const CardContainer = styled.div`
  position: relative;
  width: 600px;
  height: 500px;
  bottom: -50%;
  display: flex;
  justify-content: center;
`;
