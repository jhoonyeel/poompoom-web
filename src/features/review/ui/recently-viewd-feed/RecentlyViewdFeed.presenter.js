import ReviewPostCard from '@widgets/review-card/ui/ReviewCard.container';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Cursor from '../../assets/HorizontalCursor.svg';

const RecentlyViewdFeedUI = ({ latestPosts, loader }) => {
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
      {latestPosts &&
        latestPosts.map((post, index) => <ReviewPostCard key={`${post.reviewId}-${index}`} post={post} />)}
      <ScrollTrigger ref={loader} />
    </Wrapper>
  );
};

export default RecentlyViewdFeedUI;

const Wrapper = styled.div`
  padding-left: 32px;
  height: 420px;
  display: flex;
  align-items: center;
  gap: 50px;
  flex-wrap: nowrap;
  overflow-x: auto;
  cursor: url(${Cursor}), auto; /* SVG 커서 설정 */
`;
const ScrollTrigger = styled.div`
  width: 50px; /* 너비를 최소로 설정하여 공간 차지 최소화 */
  height: 100%; /* 높이를 부모 요소와 동일하게 설정 */
  flex-shrink: 0; /* 크기가 줄어들지 않도록 설정 */
`;
