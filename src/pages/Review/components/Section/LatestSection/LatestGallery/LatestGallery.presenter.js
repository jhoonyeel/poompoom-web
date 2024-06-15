import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ReviewPostCard from '../../../Card/ReviewPostCard/ReviewPostCard.container';

export default function LatestGalleryUI({ latestPosts, loader }) {
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
    <PostList ref={postListRef}>
      {latestPosts && latestPosts.map((post) => <ReviewPostCard key={post.reviewId} post={post} />)}
      <ScrollTrigger ref={loader} />
    </PostList>
  );
}

const PostList = styled.div`
  padding-left: 5%;
  height: 620px;
  display: flex;
  gap: 50px;
  align-items: center;
  flex-wrap: nowrap; /* 가로로 나열 */
  overflow-x: auto; /* 가로 스크롤 활성화 */
  cursor:
    url('../../../../../../assets/HorizontalCursor.png') 2 2,
    auto; /* PNG 커서 설정 */
`;
const ScrollTrigger = styled.div`
  width: 50px; /* 너비를 최소로 설정하여 공간 차지 최소화 */
  height: 100%; /* 높이를 부모 요소와 동일하게 설정 */
  flex-shrink: 0; /* 크기가 줄어들지 않도록 설정 */
`;
