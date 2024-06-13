// import React, { forwardRef } from 'react';
// import styled, { css } from 'styled-components';
// // import Card from '../Card/Card.conatiner';

// const RankingProfileCardUI = forwardRef(({ cards, handleMouseDown, handleMouseMove, handleMouseUp }, ref) => {
//   return (
//     <Wrapper onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
//       <CardContainer ref={ref}>
//         {cards.map((card, index) => (
//           <Card key={card} index={index} totalCards={cards.length} content={`Card ${card}`}>
//             <CardHeader>{card}</CardHeader>
//             {/* <RankingSvg /> */}
//           </Card>
//         ))}
//       </CardContainer>
//     </Wrapper>
//   );
// });

// export default RankingProfileCardUI;

// const Wrapper = styled.div`
//   width: 100%;
//   height: 900px; /* 적당히 수정. 100vh -> ?*/
//   display: flex;
//   justify-content: center;
//   align-items: flex-end;
//   /* overflow: hidden; */
//   background-color: #f0f0f0;
//   cursor: grab;
// `;

// const CardContainer = styled.div`
//   position: relative;
//   z-index: 999;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 700px;
//   height: 700px;
//   bottom: -60%;
// `;
// // const sizes = [160, 142, 139, 136, 133, 130, 127, 124, 121, 118, 115, 112, 109, 106, 103, 100];
// // const getSize = (index, totalCards) => {
// //   const centerIndex = Math.floor(totalCards / 2);
// //   const diff = Math.abs(centerIndex - index);
// //   return sizes[Math.min(diff, sizes.length - 1)];
// // };

// const Card = styled.div`
//   position: absolute;
//   width: 350px; /* Adjusted */
//   height: 480px; /* Adjusted 480*/

//   background-color: #ccc;
//   border-radius: 10px;
//   transform-origin: center center;
//   transition:
//     transform 0.3s ease,
//     opacity 0.3s ease;

//   ${(props) =>
//     props.index !== undefined &&
//     css`
//       transform: rotate(${props.index * (360 / props.totalCards)}deg) translateY(-700px); /* Adjusted */
//       opacity: 1;
//       z-index: ${props.totalCards - props.index}; // 각 카드에 순차적으로 감소하는 z-index 값
//       /* 화면 높이가 1000px 이상인 경우의 transform 값 설정 */
//       /* @media (min-height: 1200px) {
//         transform: translateY(-750px);
//       } */
//     `}
// `;
// const CardHeader = styled.h1`
//   font-size: 24px;
//   font-weight: bold;
//   transform: translateY(-50px);
// `;
// // const RankingSvg = styled(Ranking)`
// //   width: 100%;
// //   height: 100%;
// //   object-fit: cover;
// // `;

import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';

const baseWidth = 350; // Base width for 160% size card
const baseHeight = 480; // Base height for 160% size card

const sizes = [160, 142, 139, 136, 133, 130, 127, 124, 121, 118, 115, 112, 109, 106, 103, 100];

const getSize = (index, totalCards, rotation) => {
  const anglePerCard = 360 / totalCards;
  const normalizedRotation = ((rotation % 360) + 360) % 360;
  const step = Math.floor(normalizedRotation / anglePerCard) % totalCards;
  const sizeIndex = (index + step) % totalCards;
  return sizes[sizeIndex] || 100;
};

const RankingProfileCardUI = forwardRef(({ cards, rotation }, ref) => {
  return (
    <Wrapper>
      <CardContainer ref={ref} rotation={rotation}>
        {cards.map((card, index) => (
          <Card key={card} index={index} totalCards={cards.length} rotation={rotation}>
            <CardHeader>{card}</CardHeader>
          </Card>
        ))}
      </CardContainer>
    </Wrapper>
  );
});

export default RankingProfileCardUI;

const Wrapper = styled.div`
  width: 100%;
  height: 900px; /* 적당히 수정. 100vh -> ?*/
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: #f0f0f0;
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
  background-color: #ccc;
  border-radius: 10px;
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
      z-index: ${props.totalCards - props.index}; // 각 카드에 순차적으로 감소하는 z-index 값
    `;
  }}
`;

const CardHeader = styled.h1`
  font-size: 24px;
  font-weight: bold;
  transform: translateY(-50px);
`;
