import { faBookmark as emptyBookmark, faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons';
import { faBookmark, faHeart } from '@fortawesome/free-solid-svg-icons';
import OverflowMenuComponent from '../../../atoms/OverflowMenuComponent';
import FollowButton from '../../../components/common/FollowBtutton';

import * as S from './PostDetail.styles';
import CommentWrite from '../../../components/Comment/CommentWrite';
import CommentContainer from '../../../components/Comment/CommentContainer';
import { ReactComponent as LinkImg } from '../../../assets/LinkImg.svg';

export default function ReviewDetailUI({
  currentImageIndex,
  setCurrentImageIndex,
  prevImage,
  nextImage,
  onUpdate,
  onDelete,
  photos,
  handleWhereBuyClick,
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
  likeAmount,
  bookMark,
  handleLike,
  handleBookmark,
}) {
  return (
    <div>
      <S.DetailSection>
        <S.LeftBox>
          <S.ImageContainer>
            <S.ImageBox>
              {photos.length !== 0 && (
                <S.Image
                  key={photos[currentImageIndex].id}
                  src={photos[currentImageIndex].photoPath}
                  alt={`이미지 ${photos[currentImageIndex].id}`}
                />
              )}
            </S.ImageBox>
            <S.LeftBtn onClick={prevImage}>&#8249;</S.LeftBtn>
            <S.RightBtn onClick={nextImage}>&#8250;</S.RightBtn>
            <S.Dots>
              {photos.map((_, index) => (
                <S.Dot
                  active={index === currentImageIndex}
                  onClick={() => {
                    setCurrentImageIndex(index);
                  }}
                />
              ))}
            </S.Dots>
          </S.ImageContainer>
          <S.AdditionalInfoContainer onClick={handleWhereBuyClick}>
            <LinkImg />
            <S.AdditionalInfoWrapper>
              <S.AdditionalInfoText> {whereBuy || `경산 다이소 영남대점`}</S.AdditionalInfoText>
              <S.Price> {price}</S.Price>
            </S.AdditionalInfoWrapper>
          </S.AdditionalInfoContainer>
        </S.LeftBox>

        <S.RightBox>
          <S.PostContainer>
            <S.PostHeader>
              <S.AuthorInfo>
                <S.AuthorImgBox>
                  <S.AuthorImg src={profileImage} alt="프로필 사진" />
                </S.AuthorImgBox>
                <S.AuthorNickname to="/profile">{nickname}</S.AuthorNickname>
              </S.AuthorInfo>
              <S.TypeText>Lover에게 {reviewType === 'GIVEN' ? '주는 선물' : '받은 선물'}</S.TypeText>
              {isMyPost ? <OverflowMenuComponent onUpdate={onUpdate} onDelete={onDelete} /> : <FollowButton />}
            </S.PostHeader>
            <S.PostBody>{body}</S.PostBody>
            <S.HashtagList>
              {hashTags && hashTags.map((tag) => <S.HashtagItem key={tag.id}>{`#${tag.name}`}</S.HashtagItem>)}
            </S.HashtagList>
            <S.DateContainer>
              <S.DateText>{`${formatDate(lastModifiedTime)}(수정됨)`}</S.DateText>
              <S.DateText>{`${formatDate(createTime)}(작성됨)`}</S.DateText>
            </S.DateContainer>
            <S.IconBar>
              <S.LikeContainer>
                <S.LikeIconBox>
                  <S.LikeIcon icon={like ? faHeart : emptyHeart} onClick={handleLike} />
                </S.LikeIconBox>
                <S.LikeCount>{`${likeAmount}`}</S.LikeCount>
              </S.LikeContainer>
              <S.BookmarkIcon icon={bookMark ? faBookmark : emptyBookmark} onClick={handleBookmark} />
            </S.IconBar>
          </S.PostContainer>
          <S.CommentWriteBox>
            <CommentWrite />
          </S.CommentWriteBox>
        </S.RightBox>
      </S.DetailSection>
      <S.CommentSection>
        <S.CommentContent>
          <CommentContainer />
        </S.CommentContent>
      </S.CommentSection>
    </div>
  );
}
