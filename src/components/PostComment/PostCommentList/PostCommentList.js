import styled from 'styled-components';

const comments = Array(3)
  .fill()
  .map((_, index) => ({
    id: index,
    writer: `작성자${index + 1}`,
    content: `댓글내용${index + 1}: What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the`,
  }));
// 댓글 페이지네이션 할건지?
function PostCommentList() {
  const onClickSelect = () => {
    /* 페이지네이션 시 채택된 댓글을 list배열 맨 앞으로 보내기 */
  };

  return (
    <Container>
      {comments.map((el) => (
        <MapList key={el.id}>
          <Header>
            <div>{el.writer}</div>
            <Button onClick={onClickSelect}>채택하기</Button>
          </Header>

          <List>{el.content}</List>
        </MapList>
      ))}
    </Container>
  );
}

export default PostCommentList;

const Container = styled.div`
  width: fit-content;
  max-width: inherit;
  margin: auto;
  display: flex;
  flex-direction: row;
`;

const MapList = styled.div`
  margin: 1rem;
  width: fit-content;
  max-width: 25rem;
  padding: 2rem;
  height: auto;
  max-height: 20rem;
  border: 1px solid gainsboro;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const List = styled.div`
  word-wrap: break-word;
`;

const Header = styled.header`
  width: inherit;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const Button = styled.button`
  width: 4rem;
  height: 2rem;
  margin: 0 1rem;
`;
