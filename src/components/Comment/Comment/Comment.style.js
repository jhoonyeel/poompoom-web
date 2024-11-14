import styled, { keyframes } from 'styled-components';

const getRandomGridColumn = () => {
  return Math.floor(Math.random() * 3) + 1; // 1부터 3까지의 랜덤한 값
};

const randomAnimation = keyframes`
  0% { transform: translate(0, 0); }
  50% { 
    transform: translate(
      ${Math.random() * 101 - 50}px, 
      ${Math.random() * 101 - 50}px
    ); 
  }
  100% { transform: translate(0, 0); }
`;

const randomAnimationOdd = keyframes`
  0% { transform: translate(0, 0); }
  50% { 
    transform: translate(
      ${Math.random() * 101 - 50}px, 
      ${Math.random() * 101 - 50}px
    ); 
  }
  100% { transform: translate(0, 0); }
`;

const randomAnimationEven = keyframes`
  0% { transform: translate(0, 0); }
  50% { 
    transform: translate(
      ${Math.random() * 101 - 50}px, 
      ${Math.random() * 101 - 50}px
    ); 
  }
  100% { transform: translate(0, 0); }
`;

export const CommentContainer = styled.div`
  border-radius: 40px;
  box-shadow: 7px 12px 27px 0px rgba(0, 0, 0, 0.11);
  position: relative;
  padding: 30px;
  padding-left: 40px;
  border: 1px solid rgba(67, 67, 67, 0.11);
  width: max-content;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin: 30px;
  gap: 10px;
  height: fit-content;

  &:nth-child(1) {
    grid-column: span ${getRandomGridColumn()};
  }

  &:nth-child(4) {
    grid-column: span ${getRandomGridColumn()};
  }
  &:nth-child(8) {
    grid-column: span ${getRandomGridColumn()};
  }

  &:nth-child(14) {
    grid-column: span ${getRandomGridColumn()};
  }
  &:nth-child(18) {
    grid-column: span ${getRandomGridColumn()};
  }

  &:nth-child(odd) {
    animation: ${randomAnimationOdd} 2s infinite alternate;
  }
  &:nth-child(even) {
    animation: ${randomAnimationEven} 1.5s infinite alternate;
  }
  &:nth-child(3n + 1) {
    animation: ${randomAnimation} 2s infinite alternate;
  }

  &:hover {
    animation-play-state: paused;
  }
`;
