import { styled } from 'styled-components';
import { ReactComponent as Send } from '../../../assets/Vector (4).svg';

export default function PostCommentWrite() {
  const onClickSubmit = () => {
    /* 댓글 등록  */
  };

  return (
    <Container>
      <CommentBox placeholder="댓글을 입력하세요." />
      <SubmitBtn onClick={onClickSubmit}>
        <SendIcon />
      </SubmitBtn>
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
  width: 617px;
  height: 50px;
  padding: 1rem;
  border: 5px solid #8c8c8c;
  border-radius: 40px;
  overflow: hidden;
`;

const SubmitBtn = styled.button`
  position: absolute;
  right: 10px;
  top: 6px;
  width: 2rem;
  height: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SendIcon = styled(Send)`
  width: 100%;
  height: 100%;
`;
