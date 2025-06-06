import ReviewPostCard from '@widgets/review-card/ui/ReviewCard.container.js';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Cursor from '../../assets/HorizontalCursor.svg';

const RecommendedFeedUI = ({ subPosts, loader }) => {
  const postListRef = useRef(null);

  useEffect(() => {
    const handleWheel = (event) => {
      if (postListRef.current) {
        // Prevent the default vertical scroll
        event.preventDefault();
        // Scroll horizontally
        postListRef.current.scrollLeft += event.deltaY;
      }
    };

    const postListElement = postListRef.current;
    if (postListElement) {
      postListElement.addEventListener('wheel', handleWheel);
    }

    return () => {
      if (postListElement) {
        postListElement.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <Wrapper ref={postListRef}>
      {subPosts.length === 0 && (
        <NoFollowParagraph>팔로우를 통해 다양한 사람들의 선물을 확인해보세요~~</NoFollowParagraph>
      )}
      {subPosts && subPosts.map((post, index) => <ReviewPostCard key={`${post.reviewId}-${index}`} post={post} />)}
      <ScrollTrigger ref={loader} />
    </Wrapper>
  );
};

export default RecommendedFeedUI;

const Wrapper = styled.div`
  padding-left: 32px;
  display: flex;
  align-items: center;
  gap: 50px;
  flex: 7;
  flex-wrap: nowrap;
  overflow-x: scroll;
  cursor: url(${Cursor}), auto; /* SVG 커서 설정 */
`;
const NoFollowParagraph = styled.p`
  font-size: 30px;
  font-weight: bold;
`;
const ScrollTrigger = styled.div`
  width: 50px; /* 너비를 최소로 설정하여 공간 차지 최소화 */
  height: 100%; /* 높이를 부모 요소와 동일하게 설정 */
  flex-shrink: 0; /* 크기가 줄어들지 않도록 설정 */
`;
