import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import axios from 'axios';
import { useState } from 'react';

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
      <CommentBox placeholder="댓글을 입력하세요." onChange={(e) => setComment(e.target.value)} />
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
