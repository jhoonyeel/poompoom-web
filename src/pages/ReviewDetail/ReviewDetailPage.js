import React from 'react';
import styled from 'styled-components';
import PostCommentList from './PostComment/PostCommentList/PostCommentList.container';
import PostDetail from './PostDetail/PostDetail.container';

export function ReviewDetailPage() {
  return (
    <>
      <PostDetail />
      <CommentSection>
        <CommentContent>
          <PostCommentList />
        </CommentContent>
      </CommentSection>
    </>
  );
}

const CommentSection = styled.section`
  width: 100%;
  margin-top: 32px;
`;
const CommentContent = styled.div`
  width: 80%;
  margin: 0 auto;
`;
