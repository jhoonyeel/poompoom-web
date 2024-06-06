import styled from 'styled-components';
import PointModal from '../../../../../../components/PointModal/PointModal.container';
import ReviewPostAuthor from '../../../Card/ReviewPostAuthor/ReviewPostAuthor.container';
import ReviewPostCard from '../../../Card/ReviewPostCard/ReviewPostCard.container';
import ReviewPostHashtags from '../../../Card/ReviewPostHashtags/ReviewPostHashtags.container';

export default function SubGalleryUI({
  posts,
  handlePostClick,
  handleConfirmPost,
  selectedPost,
  isModalOpen,
  closeModal,
}) {
  const ex = [1, 2];
  return (
    <Layout>
      <PostList>
        {ex.map((post) => (
          <ReviewPostCard key={post.id} post={post} onPostClick={handlePostClick} />
        ))}
      </PostList>
      <SubList>
        {posts.map((post) => (
          <SubItem key={post.id}>
            <SubAuthorBox>
              <ReviewPostAuthor nickName={post.nickName} />
            </SubAuthorBox>
            <ReviewPostHashtags post={post} />
          </SubItem>
        ))}
      </SubList>
      {isModalOpen && <PointModal post={selectedPost} onClose={closeModal} onConfirm={handleConfirmPost} />}
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
const SubList = styled.div`
  width: 25%;
  padding: 1% 0;
`;
const SubItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8%;
`;
const SubAuthorBox = styled.div`
  margin-bottom: 5%;
`;
