import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Cursor from '../../../../../assets/HorizontalCursor.svg';
import ReviewPostCard from '../../Card/ReviewPostCard/ReviewPostCard.container';

export default function SubGalleryUI({ subPosts, loader }) {
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
      {subPosts && subPosts.map((post) => <ReviewPostCard key={post.reviewId} post={post} />)}
      <ScrollTrigger ref={loader} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 72%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-wrap: nowrap; /* 가로로 나열 */
  overflow-x: auto; /* 가로 스크롤 활성화 */
  cursor: url(${Cursor}), auto; /* SVG 커서 설정 */
  gap: 50px;
  padding-left: 5%;
`;
const NoFollowParagraph = styled.p`
  font-size: 38px;
  font-weight: bold;
`;
const ScrollTrigger = styled.div`
  width: 50px; /* 너비를 최소로 설정하여 공간 차지 최소화 */
  height: 100%; /* 높이를 부모 요소와 동일하게 설정 */
  flex-shrink: 0; /* 크기가 줄어들지 않도록 설정 */
`;
