import styled from 'styled-components';
import { Comment } from './Comment/Comment';

export default function CommentList({ pinnedComment, loader, comments, convertDateArrayToDate, reviewId }) {
  return (
    <CommentContainer>
      {pinnedComment && (
        <Comment
          key={pinnedComment.commentId}
          comment={pinnedComment}
          convertDateArrayToDate={convertDateArrayToDate}
          reviewId={reviewId}
        />
      )}
      {comments.map((comment) => (
        <Comment
          key={comment.commentId}
          comment={comment}
          convertDateArrayToDate={convertDateArrayToDate}
          loader={loader}
          reviewId={reviewId}
        />
      ))}

      <div ref={loader} style={{ backgroundColor: 'black', height: '20px' }} />
    </CommentContainer>
  );
}

const CommentContainer = styled.div`
  border: none;
  display: grid;
  grid-template-columns: repeat(3fr, 1fr);
  grid-gap: 1rem;
  justify-items: center;
  align-items: start;
  height: 500px;
  overflow: auto;
  padding: 1rem;

  &::-webkit-scrollbar {
    display: block;
  }
  &::-webkit-scrollbar-track,
  &::-webkit-scrollbar-button {
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ffffff00;
  }
`;
