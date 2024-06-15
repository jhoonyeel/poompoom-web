import * as S from './PostCommentList.styles';

export default function PostCommentListUI({ comments, convertDateArrayToDate, loader }) {
  return (
    <S.CommentContainer>
      {comments.map((comment, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <S.CommentBox ref={comments.length === index + 1 ? loader : null} key={`${comment.commentId}-${index}`}>
          <S.Profile />
          <S.Id> 사용자 ID {comment.memberId}</S.Id>
          <S.CommentBody>{comment.body}</S.CommentBody>
          <S.CommentDate>작성: {convertDateArrayToDate(comment.createDate).toLocaleString()}</S.CommentDate>
        </S.CommentBox>
      ))}
      <div ref={loader} style={{ height: '15vh', margin: '10px' }} />
    </S.CommentContainer>
  );
}
