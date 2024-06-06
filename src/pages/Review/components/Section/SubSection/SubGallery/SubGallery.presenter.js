import styled from 'styled-components';
import ReviewPostCard from '../../../Card/ReviewPostCard/ReviewPostCard.container';

export default function SubGalleryUI({ subPosts, loader }) {
  return (
    <Wrapper>
      {subPosts.map((post) => (
        <ReviewPostCard key={post.id} post={post} />
      ))}
      <div ref={loader} style={{ height: '100px', margin: '10px' }} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  flex-wrap: nowrap; /* 가로로 나열 */
  overflow-x: auto; /* 가로 스크롤 활성화 */
  cursor: url('../../../../../../assets/HorizontalCursor.svg'), auto; /* SVG 커서 설정 */
  column-gap: calc(30% / 3);
  padding: 0 2%;
  border: 3px solid #aaa;
  border-right: 2px dotted brown;
`;
