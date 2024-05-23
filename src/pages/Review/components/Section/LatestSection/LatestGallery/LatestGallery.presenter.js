import styled from 'styled-components';
import ReviewPostCard from '../../../Card/ReviewPostCard/ReviewPostCard.container';
import PostDetail from '../../../../../../components/PostDetail/PostDetail.container';

function LatestGalleryUI({ posts, handlePostClick, handleConfirmPost, selectedPost, isModalOpen, closeModal }) {
  return (
    <>
      <PostList>
        {posts.map((post) => (
          <ReviewPostCard key={post.id} post={post} onPostClick={handlePostClick} />
        ))}
      </PostList>
      {isModalOpen && <PostDetail post={selectedPost} onClose={closeModal} onConfirm={handleConfirmPost} />}
    </>
  );
}

export default LatestGalleryUI;

const PostList = styled.div`
  display: flex;
  flex-wrap: wrap; /* 내용이 넘칠 때 줄바꿈 설정 */
  gap: 30px;
  padding: 0 10%;
  border: 3px solid #aaa;
`;
