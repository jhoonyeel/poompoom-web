import styled from 'styled-components';

export function EmptyComment() {
  return <Text>댓글이 없습니다. 댓글을 작성 해 보세요! </Text>;
}

const Text = styled.div`
  height: 30px;
  font-size: 30px;
`;
