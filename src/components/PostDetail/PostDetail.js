// 이미지 슬라이드 구현.
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as regularHeart, faBookmark as regularBookMark } from '@fortawesome/free-regular-svg-icons'; // ♡
import { faHeart as solidHeart, faBookmark as solidBookMark } from '@fortawesome/free-solid-svg-icons'; // ♥︎

// jsx 형태로 font awesome 아이콘 사용 가능한 컴포넌트. 표기법: 스네이크 -> 카멜로 변경
import { useState, useEffect } from 'react';
import PostCommentWrite from '../PostComment/PostCommentWrite/PostCommentWrite';
import PostCommentList from '../PostComment/PostCommentList/PostCommentList';

const boardImages = Array(3).fill('http://via.placeholder.com/388x510.png');
const profileImage = 'http://via.placeholder.com/105x105.png';
const profileName = '작성자';
const isLike = false;
const isBookMark = false;
// DB post에서 가져오는 데이터

function PostDetail({ post }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [like, setLike] = useState(isLike);
  const [bookMark, setBookMark] = useState(isBookMark);

  /* 사진 슬라이드 효과
  const [style, setStyle] = useState({
    transform: `translateX(-${currentIndex}00%)`,
    transition: `all 0.4s ease-in-out`,
  });
  */

  // 사진 루프
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? boardImages.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === boardImages.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {}, [like]);

  useEffect(() => {}, [bookMark]);
  // 변경사항 전송

  return (
    <Container>
      <CurrentImage> {`현재 ${currentIndex + 1}번째 이미지`}</CurrentImage>
      <DetailContainer>
        <ImageContainer>
          <SliderBtn onClick={prevSlide}>이전</SliderBtn>
          <ImageWrapper>
            <Image src={boardImages[currentIndex]} alt={`이미지 ${currentIndex + 1}`} />;
          </ImageWrapper>
          <SliderBtn onClick={nextSlide}>다음</SliderBtn>
        </ImageContainer>
        <BoardContainer>
          <BoardContainerHeader>
            <Image src={profileImage} />
            <Name> {profileName} </Name>
          </BoardContainerHeader>
          <Board>
            <Title>{post && post.title}</Title>
            {post && post.content}
          </Board>
          <BoardNav>
            <FontAwesomeIcon
              icon={like ? solidHeart : regularHeart}
              onClick={() => setLike((prevLike) => !prevLike)}
              style={{ margin: '1rem' }}
            />
            <FontAwesomeIcon
              icon={bookMark ? solidBookMark : regularBookMark}
              onClick={() => setBookMark((prevBM) => !prevBM)}
              style={{ margin: '1rem' }}
            />
          </BoardNav>
        </BoardContainer>
        <CommentWrapper>
          <PostCommentWrite /> {/* 댓글 작성 */}
        </CommentWrapper>
      </DetailContainer>
      <PostCommentList /> {/* 댓글 확인 */}
    </Container>
  );
}

export default PostDetail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 1440px;
  height: 1024px;

  margin: auto;
`;

const CurrentImage = styled.div`
  transform: translateX(-20rem);
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  position: relative;
`;

const Title = styled.div`
  padding: 1rem;
  margin: 1rem;
  border: 1px solid black;
`;

const Name = styled.div`
  margin: 0 1rem;
`;
const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const ImageWrapper = styled.div`
  width: 388px;
  height: 510px;
`;

const Image = styled.img`
  object-fit: cover;
`;

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const BoardContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Board = styled.div`
  width: 617px;
  height: 303.07px;
  padding: 1rem;
  border: 1px solid gainsboro;
  overflow-y: auto;
  word-wrap: break-word;
`;

const BoardNav = styled.nav`
  display: flex;
  flex-direction: row;
`;

const SliderBtn = styled.button`
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  &:hover {
    background-color: gainsboro;
  }
`;

const CommentWrapper = styled.div`
  position: absolute;
  top: 460px;
  right: 0px;
`;

/*
 {placeholderImages.map((imageUrl, index) => (
  <Image src={imageUrl} alt={`이미지 ${index + 1}`} />
))}
*/
