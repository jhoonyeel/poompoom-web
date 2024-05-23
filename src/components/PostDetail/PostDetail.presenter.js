import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as regularHeart, faBookmark as regularBookMark } from '@fortawesome/free-regular-svg-icons'; // ♡
import { faHeart as solidHeart, faBookmark as solidBookMark } from '@fortawesome/free-solid-svg-icons';

import * as S from './PostDetail.styles';

// jsx 형태로 font awesome 아이콘 사용 가능한 컴포넌트. 표기법: 스네이크 -> 카멜로 변경
import PostCommentWrite from '../PostComment/PostCommentWrite/PostCommentWrite';
import PostCommentList from '../PostComment/PostCommentList/PostCommentList'; // ♥︎

const profileImage = 'http://via.placeholder.com/105x105.png';
const profileName = '작성자';

export default function PostDetailUI({
  currentIndex,
  boardImages,
  setLike,
  setBookMark,
  prevSlide,
  nextSlide,
  post,
  like,
  bookMark,
}) {
  return (
    <S.Container>
      <S.CurrentImage> {`현재 ${currentIndex + 1}번째 이미지`}</S.CurrentImage>
      <S.DetailContainer>
        <S.ImageContainer>
          <S.SliderBtn onClick={prevSlide}>이전</S.SliderBtn>
          <S.ImageWrapper>
            <S.Image src={boardImages[currentIndex]} alt={`이미지 ${currentIndex + 1}`} />;
          </S.ImageWrapper>
          <S.SliderBtn onClick={nextSlide}>다음</S.SliderBtn>
        </S.ImageContainer>
        <S.BoardContainer>
          <S.BoardContainerHeader>
            <S.Image src={profileImage} />
            <S.Name> {profileName} </S.Name>
          </S.BoardContainerHeader>
          <S.Board>
            <S.Title>{post && post.title}</S.Title>
            {post && post.content}
          </S.Board>
          <S.BoardNav>
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
          </S.BoardNav>
        </S.BoardContainer>
        <S.CommentWrapper>
          <PostCommentWrite /> {/* 댓글 작성 */}
        </S.CommentWrapper>
      </S.DetailContainer>
      <PostCommentList /> {/* 댓글 확인 */}
    </S.Container>
  );
}
