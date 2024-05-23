import styled from 'styled-components';
import ReviewPostCard from '../../Card/ReviewPostCard/ReviewPostCard.container';
import PointModal from '../../../../../components/PointModal/PointModal.container';
import ReviewPostAuthor from '../../Card/ReviewPostAuthor/ReviewPostAuthor.container';
import ReviewPostHashtags from '../../Card/ReviewPostHashtags/ReviewPostHashtags.container';

function SubGalleryUI({ currentPosts, handlePostClick, handleConfirmPost, selectedPost, isModalOpen, closeModal }) {
  return (
    <>
      <PostList>
        {currentPosts.map((post) => (
          <ReviewPostCard key={post.id} post={post} onPostClick={handlePostClick} />
        ))}
        <div>
          <ReviewPostAuthor post={currentPosts} /> {/* sub 리스트, currentPosts 삭제 및 수정 */}
          <ReviewPostHashtags />
        </div>
      </PostList>
      {isModalOpen && <PointModal post={selectedPost} onClose={closeModal} onConfirm={handleConfirmPost} />}
    </>
  );
}

export default SubGalleryUI;

const PostList = styled.div`
  display: flex;
  flex-wrap: wrap; /* 내용이 넘칠 때 줄바꿈 설정 */
  gap: 30px;
  padding: 0 10%;
  border: 3px solid #aaa;
`;
