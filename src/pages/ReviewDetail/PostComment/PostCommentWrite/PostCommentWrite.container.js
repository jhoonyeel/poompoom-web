import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import axios from '../../../../apis/axios';
import { ReactComponent as Comment } from '../../../../assets/PostComment.svg';

export default function PostCommentWrite() {
  const [comment, setComment] = useState();
  const { reviewId } = useParams();

  const onClickSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`/review/${reviewId}/create`, { body: comment });

      console.log('응답', response);
    } catch (error) {
      console.log('에러', error);
    }
  };

  return (
    <Container>
      <CommentBox placeholder="댓글을 입력하세요." />
      <SubmitBtn onClick={onClickSubmit} onChange={(e) => setComment(e.target.value)}>
        <SendIcon />
      </SubmitBtn>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const CommentBox = styled.textarea`
  padding: 1rem;
  width: 100%;
  height: 50px;
  border: 5px solid #8c8c8c;
  border-radius: 40px;
  overflow: hidden;
  resize: none;
`;

const SubmitBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 10px;
  width: 36px;
  height: 36px;
  background: none;
  border: none;
  cursor: pointer;
`;

const SendIcon = styled(Comment)`
  width: 32px;
  height: 100%;
`;
