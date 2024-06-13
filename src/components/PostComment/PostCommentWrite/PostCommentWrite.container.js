import { styled } from 'styled-components';

export default function PostCommentWrite() {
  const onClickSubmit = () => {
    /* 댓글 등록  */
  };
  return (
    <Container>
      <CommentBox placeholder="댓글을 입력하세요." />
      <SubmitBtn onClick={onClickSubmit}>등록하기</SubmitBtn>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 617px;
  height: 50px;
  margin: auto;
  border-radius: 6px;
`;

const CommentBox = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 1rem;
  resize: none;
`;

const SubmitBtn = styled.button`
  position: absolute;
  right: 10px;
  width: 6rem;
  height: 2rem;
`;
