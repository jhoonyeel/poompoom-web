import styled from 'styled-components';
import ReviewPostCard from '../../../Card/ReviewPostCard/ReviewPostCard.container';

export default function LatestGalleryUI({ posts, handlePostClick }) {
  return (
    <PostList>
      {posts.map((post) => (
        <ReviewPostCard key={post.id} post={post} onPostClick={handlePostClick} />
      ))}
    </PostList>
  );
}

const PostList = styled.div`
  display: flex;
  gap: 30px;
  padding: 0 10%;
  border: 3px solid #aaa;
  height: 400px;
`;
