import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { ReactComponent as Comment } from '../../../assets/PostComment.svg';

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

const SendIcon = styled(Comment)`
  width: 100%;
  height: 100%;
`;
