import styled from 'styled-components';

const CardHashtags = ({ hashTags }) => {
  return (
    <Wrapper>{hashTags && hashTags.map((tag) => <HashtagItem key={tag.id}>{`#${tag.name}`}</HashtagItem>)}</Wrapper>
  );
};

export default CardHashtags;

const Wrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px 14px;
  flex-wrap: wrap;
  margin-bottom: 10px;
  height: 58px;
  overflow: hidden;
`;

const HashtagItem = styled.li`
  border-radius: 20px;
  padding: 6px 8px;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  font-size: 12px;
`;
