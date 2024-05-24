import styled from 'styled-components';

export default function ReviewPostHashtagsUI() {
  return (
    <Container>
      <span>#여러 태그들</span>
      <span>#여러 태그들</span>
      <span>#여러 태그들</span>
      <span>#여러 태그들</span>
    </Container>
  );
}

const Container = styled.div`
  width: 250px;
  display: flex;
  gap: 10px; /* column-gap: calc(17% / 3); */
  flex-wrap: wrap;
`;
