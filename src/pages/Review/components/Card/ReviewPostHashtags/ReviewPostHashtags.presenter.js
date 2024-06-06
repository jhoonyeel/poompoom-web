import styled from 'styled-components';

export default function ReviewPostHashtagsUI() {
  return (
    <Wrapper>
      <HashtagItem>#여러 태그들</HashtagItem>
      <HashtagItem>#여러 태그들</HashtagItem>
      <HashtagItem>#여러 태그들</HashtagItem>
      <HashtagItem>#여러 태그들</HashtagItem>
      <HashtagItem>#여러 태그들</HashtagItem>
      <HashtagItem>#여러 태그들</HashtagItem>
      <HashtagItem>#여러 태그들</HashtagItem>
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
`;

// const KeywordList = styled.ul`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
// `;
const HashtagItem = styled.li`
  border: 3px solid #f2f2f2;
  border-radius: 20px;
  margin: 0.3rem 0.7rem;
  padding: 0.3rem;
  background-color: #f2f2f2;
`;
