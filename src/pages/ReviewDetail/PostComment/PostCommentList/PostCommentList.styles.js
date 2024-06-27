import styled, { keyframes } from 'styled-components';

export const CommentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr, 1fr);
  grid-gap: 1rem;
  justify-items: center;
  align-items: start;
  height: 600px;
  overflow: auto;
  padding: 1rem;

  &::-webkit-scrollbar {
    display: block;
  }
  &::-webkit-scrollbar-track,
  &::-webkit-scrollbar-button {
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ffffff00;
  }
`;
export const Id = styled.div`
  font-size: 20px;
`;

export const Profile = styled.div`
  width: 53px;
  height: 52px;
  border-radius: 50%;
  background-color: #f0f0f0;
  border: 5px solid white;
  box-shadow: 3px 4px 10px rgb(0, 0, 0, 0.11);
  position: absolute;
  top: -26px;
  left: -26px;
`;
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
export const CommentBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: max-content;
  height: fit-content;
  border-radius: 40px;
  background-color: white;
  box-shadow: 7px 12px 27px 0px rgba(0, 0, 0, 0.11);
  padding: 15px 80px;
  margin: 1rem;
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
    animation: ${randomAnimationEven} 2s infinite alternate;
  }

  &:nth-child(3n + 1) {
    animation: ${randomAnimation} 2s infinite alternate;
  }
`;

export const CommentBody = styled.p`
  font-size: 20px;
  margin: 20px 0;
`;

export const CommentDate = styled.small`
  display: block;
  color: #888;
  margin-top: 1rem;
  font-size: 14px;
`;
