import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { ReactComponent as Comment } from '../../assets/PostComment.svg';
import useWriteComment from '../../hooks/CommentApis/useWriteComment';

export default function CommentWrite() {
  const { reviewId } = useParams();
  const { register, handleSubmit, reset, watch } = useForm();
  const { submitComment } = useWriteComment();

  const onSubmit = async (data) => {
    try {
      await submitComment(reviewId, data.body);
      reset();
      console.log('댓글 작성 성공');
      window.location.reload();
    } catch (error) {
      console.log('댓글 작성 에러', error);
    }
  };

  const commentLength = watch('body')?.length || 0;

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CommentBox
          placeholder="댓글을 입력하세요."
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('body', {
            maxLength: { value: 200 },
          })}
        />
        <CharacterCount>{commentLength} / 200</CharacterCount>
        <SubmitBtn type="submit" disabled={commentLength === 0 || commentLength > 200}>
          <SendIcon />
        </SubmitBtn>
      </form>
    </Container>
  );
}

const Container = styled.div`
  border: 4px solid rgba(255, 154, 154, 0.84);
  border-radius: 40px;
  position: relative;
  width: 750px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: start;
  padding-left: 10px;
`;

const CommentBox = styled.textarea`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: start;
  width: 550px;
  height: 70px;
  line-height: 70px;
  border: none;
  outline: none;
  resize: none;
  overflow-y: auto;
  background-color: transparent;
  font-size: 20px;
  font-family: 'S-CoreDream-3Light';
  padding: 0;
`;

const SubmitBtn = styled.button`
  position: absolute;
  right: 3%;
  top: 25%;

  background: none;
  border: none;
  cursor: pointer;

  &:hover > svg {
    transform: scale(1.1);
    fill: #4caf50;
  }

  &:active > svg {
    transform: scale(1.2);
    fill: #388e3c;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const SendIcon = styled(Comment)`
  width: 100%;
  height: 100%;
`;

const CharacterCount = styled.div`
  font-size: 12px;
  color: ${(props) => props.color || '#999'};
  position: absolute;
  top: 40%;
  right: 12%;
`;
