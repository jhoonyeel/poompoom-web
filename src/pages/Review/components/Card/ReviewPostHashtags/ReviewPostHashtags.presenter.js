import styled from 'styled-components';

export default function ReviewPostHashtagsUI({ hashTags }) {
  return <Wrapper>{hashTags && hashTags.map((hashTag) => <HashtagItem>{`#${hashTag}`}</HashtagItem>)}</Wrapper>;
}

const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
`;

const HashtagItem = styled.li`
  border-radius: 20px;
  margin: 0.3rem 0.7rem;
  padding: 0.5rem;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  font-size: 16px;
`;
