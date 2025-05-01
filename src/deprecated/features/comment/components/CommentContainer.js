import styled from 'styled-components';
import useIntersectionObserver from '../../../../hooks/useInterSectionObserver';
import { useComments } from '../../hooks/CommentApis/useComment';
import CommentList from './CommentList';

export default function CommentContainer() {
  const { fetchComments, pinnedComment, comments, convertDateArrayToDate, hasNext, cursorId, reviewId } = useComments();
  const { loader } = useIntersectionObserver({
    onIntersect: () => fetchComments(cursorId, 3),
    threshold: 1,
    hasNext,
    cursorId,
  });
  return (
    <CommentContainers>
      {cursorId ? (
        <div>
          <ScrollText>댓글을 아래로 내려보세요!</ScrollText>
          <CommentList
            pinnedComment={pinnedComment}
            loader={loader}
            comments={comments}
            convertDateArrayToDate={convertDateArrayToDate}
            reviewId={reviewId}
          />
        </div>
      ) : (
        <ScrollText>댓글이 없습니다. 댓글을 먼저 남겨보세요!</ScrollText>
      )}
    </CommentContainers>
  );
}

const CommentContainers = styled.div`
  border: none;
  margin-top: 100px;
`;

const ScrollText = styled.div`
  color: rgba(255, 154, 154, 0.84);
  font-size: 15px;
  margin-bottom: 10px;
`;
