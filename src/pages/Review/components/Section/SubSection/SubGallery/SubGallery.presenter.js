import styled from 'styled-components';
import ReviewPostCard from '../../../Card/ReviewPostCard/ReviewPostCard.container';

export default function SubGalleryUI({ subPosts, handlePostClick, loader }) {
  return (
    <Layout>
      <PostList>
        {subPosts.map((post) => (
          <ReviewPostCard key={post.id} post={post} onPostClick={handlePostClick} />
        ))}
        <div ref={loader} style={{ height: '100px', margin: '10px' }} />
      </PostList>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  border: 3px solid #aaa;
  height: 400px;
`;
const PostList = styled.div`
  width: 75%;
  display: flex;
  flex-wrap: nowrap; /* 가로로 나열 */
  overflow-x: auto; /* 가로 스크롤 활성화 */
  cursor: url('../../../../../../assets/HorizontalCursor.svg'), auto; /* SVG 커서 설정 */
  column-gap: calc(30% / 3);
  padding: 0 2%;
  border-right: 2px dotted brown;
`;
