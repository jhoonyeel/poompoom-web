import styled, { css } from 'styled-components';
import React, { forwardRef } from 'react';
import ReviewPostPreview from '../../Card/ReviewPostPreview/ReviewPostPreview.container';
// import Card from '../Card/Card.conatiner';

const RankingProfileCardUI = forwardRef(({ cards, handleMouseDown, handleMouseMove, handleMouseUp }, ref) => (
  <Wrapper onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
    <CardContainer ref={ref}>
      {cards.map((card, index) => (
        <Card key={card} index={index} totalCards={cards.length} content={`Card ${card}`}>
          <h1>1등!!!</h1>
          <p>asdf</p>
          <span>awofji</span>
          <ReviewPostPreview />
        </Card>
      ))}
    </CardContainer>
  </Wrapper>
));

export default RankingProfileCardUI;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 90vh; /* 적당히 수정. 100vh -> ?*/
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
  background-color: #f0f0f0;
  cursor: grab;
`;

const Card = styled.div`
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
    `}//
`;

const CardContainer = styled.div`
  position: relative;
  width: 500px; /* Adjusted */
  height: 900px; /* Adjusted */
  bottom: -90%; /* Adjusted */
  display: flex;
  justify-content: center;
`;
