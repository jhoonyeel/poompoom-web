// 이미지 슬라이드 구현.
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as regularHeart, faBookmark as regularBookMark } from '@fortawesome/free-regular-svg-icons'; // ♡
import { faHeart as solidHeart, faBookmark as solidBookMark } from '@fortawesome/free-solid-svg-icons'; // ♥︎

export default function PostDetailUI({
  selectedPost,
  currentIndex,
  prevSlide,
  nextSlide,
  boardImages,
  profileImage,
  profileName,
  like,
  bookMark,
  setLike,
  setBookMark,
}) {
  return (
    <Container>
      <ContentBox>
        <LeftBox>
          <div>
            <SliderBtn onClick={prevSlide}>이전</SliderBtn> {/** 추후에 컴포넌트 사용 */}
          </div>
          <ContentImageWrapper>
            <Image src={boardImages[currentIndex]} alt={`이미지 ${currentIndex + 1}`} />;
          </ContentImageWrapper>
          <div>
            <SliderBtn onClick={nextSlide}>다음</SliderBtn> {/** 추후에 컴포넌트 사용 */}
          </div>
        </LeftBox>
        <RightBox>
          <BoardHeader>
            <AuthorImageWrapper>
              <Image src={profileImage} />
            </AuthorImageWrapper>
            <b>{profileName}</b>
          </BoardHeader>
          <BoardBody>
            <Title>누가 누구에게 주는 선물</Title>
            {selectedPost && selectedPost.content}
            <div>
              <div>#여러 태그들</div>
              <div>#여러 태그들</div>
              <div>#여러 태그들</div>
            </div>
            <div>제품 출처: 다이소</div>
          </BoardBody>
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
          <div>{/* 댓글 작성 */}</div>
        </RightBox>
      </ContentBox>
      <div>{/* 댓글 확인 */}</div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  margin-top: 2%;
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border: 1px solid red;
`;
const LeftBox = styled.div`
  margin-right: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RightBox = styled.div``;

const Title = styled.h2`
  padding: 1rem;
  border: 1px solid black;
`;

const ContentImageWrapper = styled.div`
  width: 390px;
  height: 510px;
  margin: 0 15px;
`;
const AuthorImageWrapper = styled.div`
  width: 90px;
  height: 90px;
  margin-right: 15px;
`;
const Image = styled.img`
  object-fit: cover;
`;

const BoardHeader = styled.div`
  display: flex;
  align-items: center;
`;

const BoardBody = styled.div`
  width: 100%;
  height: 40vh;
  padding: 1rem;
  border: 1px solid gainsboro;
  overflow-y: auto;
  word-wrap: break-word;
`;

const BoardNav = styled.nav`
  display: flex;
`;

const SliderBtn = styled.button`
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  &:hover {
    background-color: gainsboro;
  }
`;
