import { forwardRef } from 'react';
import styled, { css } from 'styled-components';

const baseWidth = 400; // Base width for 160% size card : 350px
const baseHeight = 580; // Base height for 160% size card : 480px

const sizes = [160, 142, 139, 136, 133, 130, 127, 124, 121, 118, 115, 112, 109, 106, 103, 100];

const getSize = (index, totalCards, rotation) => {
  const anglePerCard = 360 / totalCards;
  const normalizedRotation = ((rotation % 360) + 360) % 360;
  const step = Math.floor(normalizedRotation / anglePerCard) % totalCards;
  const sizeIndex = (index + step) % totalCards;
  return sizes[sizeIndex] || 100;
};

const getZIndex = (index, totalCards, rotation) => {
  const anglePerCard = 360 / totalCards;
  const normalizedRotation = ((rotation % 360) + 360) % 360;
  const adjustedIndex = (index + Math.floor(normalizedRotation / anglePerCard)) % totalCards;
  return totalCards - adjustedIndex;
};

const RankingBoardUI = ({ ranks, rotation }, ref) => {
  return (
    <Wrapper>
      <CardContainer ref={ref} rotation={rotation}>
        {ranks.map((card, index) => {
          const Component = card.component;
          const zIndex = getZIndex(index, ranks.length, rotation);
          return (
            <Card key={card.ordinal} index={index} totalCards={ranks.length} rotation={rotation} zIndex={zIndex}>
              <CardHeader>{card.ordinal}</CardHeader>
              <SvgWrapper>
                <ComponentStyled as={Component} />
              </SvgWrapper>
            </Card>
          );
        })}
      </CardContainer>
    </Wrapper>
  );
};
RankingBoardUI.displayName = 'RankingBoardUI';

export default forwardRef(RankingBoardUI);

const Wrapper = styled.div`
  width: 100%;
  height: 1000px; /* 적당히 수정. 100vh -> ?*/
  display: flex;
  justify-content: center;
  align-items: flex-end;
  /* background-color: #f0f0f0; */
  cursor: grab;
  overflow: hidden;
`;

const CardContainer = styled.div`
  position: relative;
  /* z-index: 999; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 700px;
  height: 700px;
  bottom: -60%;
  transform: rotate(${(props) => props.rotation - 10}deg);
  transition: transform 0.1s linear; /* Smooth rotation */
`;

const Card = styled.div`
  position: absolute;
  /* background-color: #ccc; */
  border-radius: 20px;
  filter: drop-shadow(0px 10px 50px rgba(0, 0, 0, 0.15));
  transform-origin: center center;
  transition:
    transform 0.3s ease,
    width 0.3s ease,
    height 0.3s ease,
    opacity 0.3s ease;

  ${(props) => {
    const size = getSize(props.index, props.totalCards, props.rotation);
    const width = (baseWidth * size) / 160; // Calculate width based on size percentage
    const height = (baseHeight * size) / 160; // Calculate height based on size percentage

    return css`
      width: ${width}px;
      height: ${height}px;
      transform: rotate(${props.index * (360 / props.totalCards)}deg) translateY(-700px); /* Adjusted */
      z-index: ${props.zIndex}; // 각 카드에 순차적으로 감소하는 z-index 값
    `;
  }}
`;

const CardHeader = styled.h1`
  font-family: 'Shrikhand', serif;
  font-size: 65px;
  font-weight: bold;
  transform: translateY(-80px);
`;

const SvgWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ComponentStyled = styled.svg`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
