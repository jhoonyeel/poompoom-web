import { faBookmark as emptyBookmark, faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons';
import { faBookmark, faCircle, faGreaterThan, faHeart, faLessThan } from '@fortawesome/free-solid-svg-icons';

import FollowBtnComponent from '../../atoms/FollowBtnComponent';
import PostCommentList from '../PostComment/PostCommentList/PostCommentList.container';
import PostCommentWrite from '../PostComment/PostCommentWrite/PostCommentWrite.container';
import * as S from './PostDetail.styles';

export default function ReviewDetailUI({
  photos,
  whereBuy,
  price,
  profileImage,
  nickname,
  reviewType,
  isMyPost,
  body,
  hashTags,
  createTime,
  lastModifiedTime,
  formatDate,
  like,
  bookMark,
  handleLike,
  handleBookmark,
}) {
  return (
    <>
      <S.DetailSection>
        <S.DetailContent>
          <S.LeftBox>
            <S.PhotoBox>
              <S.LeftBtn>
                <S.LeftBtnIcon icon={faLessThan} />
              </S.LeftBtn>
              <S.ImageBox>
                {photos.length !== 0 &&
                  photos.map((photo) => <S.Image key={photo.id} src={photo.photoPath} alt={`사진${photo.id}`} />)}
              </S.ImageBox>
              <S.RightBtn>
                <S.RightBtnIcon icon={faGreaterThan} />
              </S.RightBtn>
            </S.PhotoBox>
            <S.InfoBox>
              <S.Info>구매처: {whereBuy || `경산 다이소 영남대점`}</S.Info>
              <S.Info>Price: {price}</S.Info>
            </S.InfoBox>
          </S.LeftBox>

          <S.RightBox>
            <S.RightBoxContent>
              <S.BoardHeader>
                <S.AuthorCircleBox>
                  <S.WhiteCircleIcon icon={faCircle} />
                  <S.AuthorImgBox>
                    <S.AuthorImg src={profileImage} alt="프로필 사진" />
                  </S.AuthorImgBox>
                </S.AuthorCircleBox>
                <S.ID>{`@${nickname}`}</S.ID>
                <S.ID>Lover에게 {reviewType === 'GIVEN' ? '주는 선물' : '받은 선물'}</S.ID>
                {isMyPost ? <p>수정하기</p> : <FollowBtnComponent />}
              </S.BoardHeader>
              <S.BoardBody>{body}</S.BoardBody>
              <S.HashtagList>
                {hashTags && hashTags.map((tag) => <S.HashtagItem key={tag.id}>{`#${tag.name}`}</S.HashtagItem>)}
              </S.HashtagList>
              <S.DateWrapper>
                <S.Dates>{`${formatDate(lastModifiedTime)}(수정됨)`}</S.Dates>
                <S.Dates>{`${formatDate(createTime)}(작성됨)`}</S.Dates>
              </S.DateWrapper>
              <S.BoardNavBar>
                <S.BoardIcon icon={like ? faHeart : emptyHeart} onClick={handleLike} />
                <S.BoardIcon icon={bookMark ? faBookmark : emptyBookmark} onClick={handleBookmark} />
              </S.BoardNavBar>

              <S.CommentWriteBox>
                <PostCommentWrite />
              </S.CommentWriteBox>
            </S.RightBoxContent>
          </S.RightBox>
        </S.DetailContent>
      </S.DetailSection>
      <S.CommentSection>
        <S.CommentContent>
          <PostCommentList />
        </S.CommentContent>
      </S.CommentSection>
    </>
  );
}
