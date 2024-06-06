import styled from 'styled-components';
import ReviewPostAuthor from '../ReviewPostAuthor/ReviewPostAuthor.container';
import ReviewPostBackground from '../ReviewPostBackground/ReviewPostBackground.container';
import ReviewPostHashtags from '../ReviewPostHashtags/ReviewPostHashtags.container';
import ReviewPostPreview from '../ReviewPostPreview/ReviewPostPreview.container';

export default function ReviewPostCardUI({ post, handlePostClick, isHovered, handleMouseEnter, handleMouseLeave }) {
  return (
    <Wrapper>
      <ReviewPostAuthor profilePhoto={post.profilePhoto} nickname={post.nickname} isHovered={isHovered} />
      <HoveredLayout>
        <HoveredBox
          onClick={handlePostClick(`/review/${post.reviewId}`)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ReviewPostBackground bodyPhoto={post.bodyPhoto} />
          {isHovered ? (
            <PreviewBox>
              <ReviewPostPreview body={post.body} />
            </PreviewBox>
          ) : (
            <HashtagsBox>
              <ReviewPostHashtags hashTags={post.hashTags} />
            </HashtagsBox>
          )}
        </HoveredBox>
      </HoveredLayout>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const HoveredLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const HoveredBox = styled.div`
  width: 380px;
  height: 430px;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;
const PreviewBox = styled.div`
  display: flex;
  justify-content: center;
  transform: translateY(-400px);
`;
const HashtagsBox = styled.div`
  display: flex;
  justify-content: center;
  transform: translateY(-80px);
  overflow: hidden;
  height: 80px;
`;
