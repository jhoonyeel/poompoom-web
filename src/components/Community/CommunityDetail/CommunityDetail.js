import styled from 'styled-components';

function CommunityDetail() {
  const data = { writer: '작성자', Content: '내용' };

  const onClickToBoardEdit = () => {};
  const onClickToBoardList = () => {};
  const onClickToDelete = () => {};
  return (
    <div>
      <Container>
        <Writer>{data.writer}</Writer>
        <Content>{data.Content}</Content>
      </Container>
      <Button onClick={onClickToBoardList}>목록으로</Button>
      <Button onClick={onClickToBoardEdit}>수정하기</Button>
      <Button onClick={onClickToDelete}>삭제하기</Button>
    </div>
  );
}

export default CommunityDetail;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  border: 1px solid gainsboro;
  margin: 2rem auto;
  padding: 1rem;
  width: 50rem;
  height: 20rem;
`;

const Content = styled.div`
  width: 2rem;
`;

const Writer = styled.div`
  width: 3rem;
`;
const Button = styled.button`
  width: 6rem;
  height: 2rem;
  margin: 1rem;
  font-weight: 800;
`;
