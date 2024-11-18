import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const DetailSection = styled.section`
  display: flex;
  gap: 40px;
  margin: 24px auto 0;
  min-width: 1028px;
  height: 580px;
  width: 80%;
`;
export const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 4;
`;
export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
export const LeftBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  user-select: none;
  cursor: pointer;
`;
export const RightBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  user-select: none;
  cursor: pointer;
`;

export const ImageBox = styled.div`
  width: 100%;
  height: 100%;
  user-select: none;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const AdditionalInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const AdditionalInfoText = styled.span`
  margin-top: 0.5rem;
  text-align: start;
  font-size: 20px;
  font-weight: bold;
`;

export const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 5;
`;
export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  min-width: 240px;
`;
export const AuthorImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px solid #ddd;
  overflow: hidden;
  cursor: pointer;
`;
export const AuthorImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
`;
export const AuthorNickname = styled(Link)`
  color: #000;
  font-size: 28px;
  font-family: 'Oleo Script Swash Caps';
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;
  text-decoration: none;
`;
export const TypeText = styled.span`
  font-size: 16px;
  color: #0d3f39;
`;
export const PostBody = styled.p`
  flex: 1;
  margin-top: 12px;
  text-align: start;
  font-size: 18px;
  line-height: 1.7;
  word-wrap: break-word;
  word-spacing: 2px;
  overflow-y: auto;

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
  display: flex;
  margin-top: 12px;
  gap: 12px;
`;
export const HashtagItem = styled.li`
  color: #c9464b;
  font-size: 22px;
`;
export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 8px;
`;
export const DateText = styled.span`
  color: #b0b0b1;
  text-align: start;
  font-size: 14px;
`;
export const IconBar = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 8px;
`;
export const LikeIcon = styled(FontAwesomeIcon)`
  font-size: 22px;
  cursor: pointer;
`;
export const BookmarkIcon = styled(FontAwesomeIcon)`
  font-size: 22px;
  cursor: pointer;
`;
export const LikeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;
export const LikeIconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;
export const LikeCount = styled.span`
  font-size: 20px;
`;

export const Dots = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10px;
  z-index: 1;
  width: 100%;
`;

export const Dot = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${({ active }) => (active ? '#000' : '#bbb')}; /* 현재 이미지 인덱스에 따라 색상 변경 */
  border-radius: 50%;
  margin: 0 5px;
  transition: background-color 0.3s;
  pointer-events: auto; /* Dot이 클릭 가능하도록 설정 */
  user-select: none; /* 텍스트 선택을 방지하여 커서가 깜빡이지 않도록 설정 */
  cursor: pointer;
`;

export const CommentWriteBox = styled.div``;

export const CommentSection = styled.div`
  margin-top: 20px;
`;

export const CommentContent = styled.div``;
