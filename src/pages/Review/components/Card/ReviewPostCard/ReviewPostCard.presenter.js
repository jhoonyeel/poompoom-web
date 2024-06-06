import styled from 'styled-components';
import ReviewPostAuthor from '../ReviewPostAuthor/ReviewPostAuthor.container';
import ReviewPostBackground from '../ReviewPostBackground/ReviewPostBackground.container';
import ReviewPostHashtags from '../ReviewPostHashtags/ReviewPostHashtags.container';
import ReviewPostPreview from '../ReviewPostPreview/ReviewPostPreview.container';

export default function ReviewPostCardUI({ post, onPostClick, isHovered, handleMouseEnter, handleMouseLeave }) {
  return (
    <Wrapper>
      <ReviewPostAuthor post={post} isHovered={isHovered} />
      <HoveredLayout>
        <HoveredBox onClick={() => onPostClick(post)} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <ReviewPostBackground post={post} />
          {isHovered ? (
            <PreviewBox>
              <ReviewPostPreview post={post} />
            </PreviewBox>
          ) : (
            <HashtagsBox>
              <ReviewPostHashtags post={post} />
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
