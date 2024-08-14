import Lottie from 'react-lottie';
import styled from 'styled-components';
import ReviewPostAuthor from '../ReviewPostAuthor/ReviewPostAuthor.container';
import ReviewPostBackground from '../ReviewPostBackground/ReviewPostBackground.container';
import ReviewPostHashtags from '../ReviewPostHashtags/ReviewPostHashtags.container';
import ReviewPostPreview from '../ReviewPostPreview/ReviewPostPreview.container';

export default function ReviewPostCardUI({
  post,
  handlePostClick,
  isHovered,
  handleMouseEnter,
  handleMouseLeave,
  randomParticle,
}) {
  return (
    <Wrapper>
      <ReviewPostAuthor
        profilePhoto={post.profilePhoto}
        nickname={post.nickname}
        reviewType={post.reviewType}
        isHovered={isHovered}
      />
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
          {isHovered && randomParticle && (
            <ParticlesBox>
              <Lottie options={randomParticle} height={430} width={380} />
            </ParticlesBox>
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
const ParticlesBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 380px; /* 적절한 크기로 조정 */
  height: 430px; /* 적절한 크기로 조정 */
  position: relative;
  transform: translate(-25px, -445px);
`;
