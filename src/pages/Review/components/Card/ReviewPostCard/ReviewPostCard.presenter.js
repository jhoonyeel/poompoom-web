import styled from 'styled-components';
import ReviewPostBackground from '../ReviewPostBackground/ReviewPostBackground.container';

import ReviewPostHashtags from '../ReviewPostHashtags/ReviewPostHashtags.container';
import ReviewPostAuthor from '../ReviewPostAuthor/ReviewPostAuthor.container';

function ReviewPostCardUI({ post, onPostClick, isHovered, setIsHovered, handleMouseEnter, handleMouseLeave }) {
  return (
    <Container>
      <ReviewPostAuthor post={post} />
      <ReviewPostBackground
        post={post}
        onPostClick={onPostClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        isHovered={isHovered}
        setIsHovered={setIsHovered}
      />
      <ReviewPostHashtags />
    </Container>
  );
}

export default ReviewPostCardUI;

const Container = styled.div`
  width: calc(80% / 3); /* 아이템이 한 줄에 3개 들어가도록 설정 | calc((80% - 20px * 2) / 3); column-gap: 20px;*/
`;
