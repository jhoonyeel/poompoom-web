import styled from 'styled-components';

export default function ReviewPostHashtagsUI() {
  return (
    <Wrapper>
      <span>#여러 태그들</span>
      <span>#여러 태그들</span>
      <span>#여러 태그들</span>
      <span>#여러 태그들</span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
`;
