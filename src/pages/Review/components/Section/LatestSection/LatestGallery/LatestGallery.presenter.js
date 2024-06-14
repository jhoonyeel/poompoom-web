import styled from 'styled-components';
import ReviewPostCard from '../../../Card/ReviewPostCard/ReviewPostCard.container';

export default function LatestGalleryUI({ latestPosts, handlePostClick }) {
  return (
    <PostList>
      {latestPosts &&
        latestPosts.map((post) => <ReviewPostCard key={post.reviewId} post={post} onPostClick={handlePostClick} />)}
    </PostList>
  );
}

const PostList = styled.div`
  display: flex;
  flex-wrap: nowrap; /* 가로로 나열 */
  overflow-x: auto; /* 가로 스크롤 활성화 */
  cursor: url('../../../../../../assets/HorizontalCursor.svg'), auto; /* SVG 커서 설정 */
  gap: 30px;
  padding: 0 10%;
  border: 3px solid #aaa;
  height: 500px;
`;
