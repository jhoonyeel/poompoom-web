import styled from 'styled-components';

function CommentList() {
  const comments = [
    { writer: '작성자1', content: '댓글내용1' },
    { writer: '작성자2', content: '댓글내용2' },
    { writer: '작성자3', content: '댓글내용3' },
  ];
  const onClickSelect = () => {};

  return (
    <Wrapper>
      {comments.map((el) => (
        <MapList key={el.id}>
          <List>{el.writer}</List>
          <List>{el.content}</List>
          <Button onClick={onClickSelect}>채택하기</Button>
        </MapList>
      ))}
    </Wrapper>
  );
}
export default CommentList;

const Wrapper = styled.div`
  width: 40rem;
  margin: auto;
`;

const MapList = styled.div`
  border: 1px solid gainsboro;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const List = styled.div`
  width: 8rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Button = styled.button`
  width: 4rem;
  height: 2rem;
`;
