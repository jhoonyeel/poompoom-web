import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
// import Card from '../Card/Card.conatiner';
import { ReactComponent as Ranking } from '../../../../../assets/Ranking4.svg';

const RankingProfileCardUI = forwardRef(({ cards, handleMouseDown, handleMouseMove, handleMouseUp }, ref) => (
  <Wrapper onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
    <CardContainer ref={ref}>
      {cards.map((card, index) => (
        <Card key={card} index={index} totalCards={cards.length} content={`Card ${card}`}>
          <RankingSvg />
        </Card>
      ))}
    </CardContainer>
  </Wrapper>
));

export default RankingProfileCardUI;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 85vh; /* 적당히 수정. 100vh -> ?*/
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
  background-color: #f0f0f0;
  cursor: grab;
`;

const Card = styled.div`
  position: absolute;
  width: 350px; /* Adjusted */
  height: 480px; /* Adjusted */
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
      /* 화면 높이가 1000px 이상인 경우의 transform 값 설정 */
      /* @media (min-height: 1200px) {
        transform: translateY(-750px);
      } */
    `}
`;

const CardContainer = styled.div`
  position: relative;
  width: 500px; /* Adjusted */
  height: 900px; /* Adjusted */
  bottom: -90%; /* Adjusted */
  display: flex;
  justify-content: center;
`;

const RankingSvg = styled(Ranking)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
