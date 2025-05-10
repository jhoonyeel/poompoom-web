import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const GalleryBody = styled.div`
  width: 100%;
  margin-top: 3rem;
`;

export const PostList = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 4개의 열을 가지도록 설정 */
  column-gap: 1.5rem;
  row-gap: 2.5rem;
`;
