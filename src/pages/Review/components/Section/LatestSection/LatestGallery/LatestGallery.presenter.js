import styled from 'styled-components';
import ReviewPostCard from '../../../Card/ReviewPostCard/ReviewPostCard.container';
import PostDetail from '../../../../../../components/PostDetail/PostDetail.container';

export default function LatestGalleryUI({
  posts,
  selectedPost,
  handlePostClick,
  handleConfirmPost,
  isModalOpen,
  closeModal,
}) {
  return (
    <>
      <PostList>
        {posts.map((post) => (
          <ReviewPostCard key={post.id} post={post} onPostClick={handlePostClick} />
        ))}
      </PostList>
      {isModalOpen && <PostDetail selectedPost={selectedPost} onClose={closeModal} onConfirm={handleConfirmPost} />}
    </>
  );
}

const PostList = styled.div`
  display: flex;
  gap: 30px;
  padding: 0 10%;
  border: 3px solid #aaa;
  height: 400px;
`;
