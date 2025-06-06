import Lottie from 'react-lottie';
import styled from 'styled-components';
import ReviewPostAuthor from './author-meta/AuthorMeta.js';
import ReviewPostBackground from './CardBackground.js';
import ReviewPostHashtags from './CardHashtags.js';
import ReviewPostPreview from './CardPreview.js';

const ReviewCardUI = ({ post, randomParticle, isContentHovered, onMouseEnter, onMouseLeave, navigatePath }) => {
  return (
    <Wrapper isContentHovered={isContentHovered}>
      <ReviewPostAuthor
        profilePhoto={post.profilePhoto}
        nickname={post.nickname}
        reviewType={post.reviewType}
        isContentHovered={isContentHovered}
      />
      <ReviewPostContent
        onClick={navigatePath(`/review/${post.reviewId}`)}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <ReviewPostBackground bodyPhoto={post.bodyPhoto} />
        {isContentHovered ? (
          <ReviewPostPreview body={post.body} />
        ) : (
          <HashtagsContainer>
            <ReviewPostHashtags hashTags={post.hashTags} />
          </HashtagsContainer>
        )}
        {isContentHovered && randomParticle && (
          <ParticlesBox>
            <Lottie options={randomParticle} width="100%" height="100%" />
          </ParticlesBox>
        )}
      </ReviewPostContent>
    </Wrapper>
  );
};

export default ReviewCardUI;

const Wrapper = styled.div`
  width: 220px;
  transform: ${({ isContentHovered }) => (isContentHovered ? 'scale(1.1)' : 'scale(1)')};
  transition: transform 0.3s ease-in-out;
`;
const ReviewPostContent = styled.div`
  position: relative;
  width: 220px;
  height: 290px;
`;
const HashtagsContainer = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
`;
const ParticlesBox = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 4;
  width: 220px;
  height: 290px;
`;
