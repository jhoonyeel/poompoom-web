import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1440px;
  height: 1024px;
  margin: 0;
`;

export const CurrentImage = styled.div`
  transform: translateX(-20rem);
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  position: relative;
`;

export const Title = styled.div`
  padding: 1rem;
  margin: 1rem;
  border: 1px solid black;
`;

export const Name = styled.div`
  margin: 0 1rem;
`;
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
export const ImageWrapper = styled.div`
  width: 388px;
  height: 510px;
`;

export const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const BoardContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Board = styled.div`
  width: 617px;
  height: 303.07px;
  padding: 1rem;
  border: 1px solid gainsboro;
  overflow-y: auto;
  word-wrap: break-word;
`;

export const BoardNav = styled.nav`
  display: flex;
  flex-direction: row;
`;

export const SliderBtn = styled.button`
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  &:hover {
    background-color: gainsboro;
  }
`;

export const CommentWrapper = styled.div`
  position: absolute;
  top: 460px;
  right: 0px;
`;

export const DetailSection = styled.section`
  width: 100%;
  margin-top: 3rem;
`;
export const DetailContent = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
`;
export const LeftBox = styled.div`
  width: 45%;
  height: 100%;
  margin-right: 5rem;
`;
export const PhotoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80%;
  position: relative;
  width: fit-content;
  margin: auto;
`;
export const LeftBtn = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  font-size: 24px;
  color: white;
  cursor: pointer;
  user-select: none;
`;
export const RightBtn = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  font-size: 24px;
  color: white;
  cursor: pointer;
  user-select: none;
`;

export const ImageBox = styled.div`
  width: 500px;
  height: 630px;
  user-select: none;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 20%;
  margin: 0 auto;
  margin-top: 2rem;
`;
export const Info = styled.p`
  margin-top: 0.5rem;
  text-align: start;
  font-size: 22px;
  font-weight: bold;
`;

export const RightBox = styled.div`
  width: 55%;
  height: 100%;
`;
export const RightBoxContent = styled.div`
  width: 85%;
  margin: 0 auto;
`;
export const BoardHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const AuthorCircleBox = styled.div`
  position: relative;
  z-index: 1;
  width: 100px;
  height: 100px;
  border: 10px solid #ddd;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
export const AuthorImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지 비율을 유지하며 자를 때 사용 */
`;
export const ID = styled.span`
  font-family: 'Oleo Script Swash Caps';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 50px;
  color: #000000;
`;
export const Title2 = styled.span`
  font-size: 24px;
  color: #0d3f39;
`;
export const BoardBody = styled.p`
  margin-top: 1rem;
  width: 100%;
  height: 460px;
  overflow-y: auto;
  word-wrap: break-word;
  line-height: 170%;
  font-size: 24px;
  text-align: start;
  &::-webkit-scrollbar {
    width: 12px; /* width of the entire scrollbar */
  }
  &::-webkit-scrollbar-track {
    background: #f0f0f0; /* color of the track */
  }
  &::-webkit-scrollbar-thumb {
    background-color: #0d6d63; /* color of the scrollbar handle */
    border-radius: 20px; /* roundness of the scrollbar handle */
    border: 3px solid #f0f0f0; /* creates padding around the handle */
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #094c42; /* color of the scrollbar handle on hover */
  }
`;
export const HashtagList = styled.ul`
  margin-top: 2rem;
  height: 15%;
  display: flex;
`;
export const HashtagItem = styled.li`
  color: #c9464b;
  margin-right: 0.7rem;
  font-size: 24px;
`;
export const DateWrapper = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
`;
export const Dates = styled.span`
  color: #b0b0b1;
  margin-top: 0.4rem;
  text-align: start;
  font-size: 18px;
`;
export const BoardNavBar = styled.nav`
  display: flex;
  margin-top: 0.5rem;
`;
export const BoardIcon = styled(FontAwesomeIcon)`
  padding: 1rem;
  font-size: 22px;
`;

export const CommentWriteBox = styled.div`
  height: 20%;
`;
export const CommentSection = styled.section`
  width: 100%;
  margin-top: 5rem;
`;
export const CommentContent = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const ImageDots = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const Dot = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${({ active }) => (active ? '#000' : '#bbb')}; /* 현재 이미지 인덱스에 따라 색상 변경 */
  border-radius: 50%;
  margin: 0 5px;
  transition: background-color 0.3s;
`;
