import styled from 'styled-components';

export default function HashtagComponent({ hashTags }) {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{hashTags && hashTags.map((tag) => <HashtagItem key={tag}>{`#${tag}`}</HashtagItem>)}</>;
}

const HashtagItem = styled.li`
  border-radius: 20px;
  margin: 0.3rem 0.7rem;
  padding: 0.5rem;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  font-size: 16px;
`;
