import { faBookmark as emptyBookmark, faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons';
import { faBookmark, faCircle, faGreaterThan, faHeart, faLessThan } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import FollowBtnComponent from '../../atoms/FollowBtnComponent';
import PostCommentList from '../PostComment/PostCommentList/PostCommentList.container';
import PostCommentWrite from '../PostComment/PostCommentWrite/PostCommentWrite.container';

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
      <DetailSection>
        <DetailContent>
          <LeftBox>
            <PhotoBox>
              <LeftBtn>
                <LeftBtnIcon icon={faLessThan} />
              </LeftBtn>
              <ImageBox>
                {photos.length !== 0 &&
                  photos.map((photo) => <Image key={photo.id} src={photo.photoPath} alt={`사진${photo.id}`} />)}
              </ImageBox>
              <RightBtn>
                <RightBtnIcon icon={faGreaterThan} />
              </RightBtn>
            </PhotoBox>
            <InfoBox>
              <Info>구매처: {whereBuy || `경산 다이소 영남대점`}</Info>
              <Info>Price: {price}</Info>
            </InfoBox>
          </LeftBox>

          <RightBox>
            <RightBoxContent>
              <BoardHeader>
                <AuthorCircleBox>
                  <WhiteCircleIcon icon={faCircle} />
                  <AuthorImgBox>
                    <AuthorImg src={profileImage} alt="프로필 사진" />
                  </AuthorImgBox>
                </AuthorCircleBox>
                <ID>{`@${nickname}`}</ID>
                <ID>Lover에게 {reviewType === 'GIVEN' ? '주는 선물' : '받은 선물'}</ID>
                {isMyPost ? <p>수정하기</p> : <FollowBtnComponent />}
              </BoardHeader>
              <BoardBody>{body}</BoardBody>
              <HashtagList>
                {hashTags && hashTags.map((tag) => <HashtagItem key={tag.id}>{`#${tag.name}`}</HashtagItem>)}
              </HashtagList>
              <DateWrapper>
                <Dates>{`${formatDate(lastModifiedTime)}(수정됨)`}</Dates>
                <Dates>{`${formatDate(createTime)}(작성됨)`}</Dates>
              </DateWrapper>
              <BoardNavBar>
                <BoardIcon icon={like ? faHeart : emptyHeart} onClick={handleLike} />
                <BoardIcon icon={bookMark ? faBookmark : emptyBookmark} onClick={handleBookmark} />
              </BoardNavBar>

              <CommentWriteBox>
                <PostCommentWrite />
              </CommentWriteBox>
            </RightBoxContent>
          </RightBox>
        </DetailContent>
      </DetailSection>
      <CommentSection>
        <CommentContent>
          <PostCommentList />
        </CommentContent>
      </CommentSection>
    </>
  );
}

const DetailSection = styled.section`
  width: 100%;
  margin-top: 3rem;
  border: 3px solid red;
`;
const DetailContent = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
`;
const LeftBox = styled.div`
  width: 45%;
  height: 100%;
  margin-right: 5rem;
`;
const PhotoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80%;
`;
const LeftBtn = styled.div`
  width: 3rem;
  height: 3rem;
`;
const LeftBtnIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
  color: black;
  padding: 1rem;
`;
const RightBtn = styled.div`
  width: 3rem;
  height: 3rem;
`;
const RightBtnIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
  color: black;
  padding: 1rem;
`;
const ImageBox = styled.div`
  width: 500px;
  height: 630px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 20%;
  margin: 0 auto;
  margin-top: 2rem;
`;
const Info = styled.p`
  margin-top: 0.5rem;
  text-align: start;
  font-size: 22px;
  font-weight: bold;
`;

const RightBox = styled.div`
  width: 55%;
  height: 100%;
`;
const RightBoxContent = styled.div`
  width: 85%;
  margin: 0 auto;
`;
const BoardHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const AuthorCircleBox = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const WhiteCircleIcon = styled(FontAwesomeIcon)`
  color: black;
  font-size: 60px;
  position: absolute;
  z-index: 1;
`;
const AuthorImgBox = styled.div`
  width: 87%;
  height: 87%;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  z-index: 2;
`;
const AuthorImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지 비율을 유지하며 자를 때 사용 */
`;
const ID = styled.span`
  font-size: 24px;
`;
const BoardBody = styled.p`
  margin-top: 1rem;
  width: 100%;
  height: 460px;
  overflow-y: auto;
  word-wrap: break-word;
  line-height: 170%;
  font-size: 24px;
  text-align: start;
`;
const HashtagList = styled.ul`
  margin-top: 2rem;
  height: 15%;
  display: flex;
`;
const HashtagItem = styled.li`
  color: #c9464b;
  margin-right: 0.7rem;
  font-size: 24px;
`;
const DateWrapper = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
`;
const Dates = styled.span`
  color: #b0b0b1;
  margin-top: 0.4rem;
  text-align: start;
  font-size: 18px;
`;
const BoardNavBar = styled.nav`
  display: flex;
  margin-top: 0.5rem;
`;
const BoardIcon = styled(FontAwesomeIcon)`
  padding: 1rem;
  font-size: 22px;
`;

const CommentWriteBox = styled.div`
  height: 20%;
`;
const CommentSection = styled.section`
  width: 100%;
  margin-top: 5rem;
  border: 3px solid red;
`;
const CommentContent = styled.div`
  width: 80%;
  margin: 0 auto;
`;
