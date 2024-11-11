/**
 * PostDetail내용 옮기기.
 */
import React from 'react';
import styled from 'styled-components';
import PostCommentList from './PostComment/PostCommentList/PostCommentList.container';
import PostDetail from './PostDetail/PostDetail.container';

export function ReviewDetailPage() {
  return (
    <div>
      <PostDetail />
      <CommentSection>
        <CommentContent>
          <PostCommentList />
        </CommentContent>
      </CommentSection>
    </div>
  );
}

const CommentSection = styled.section`
  width: 100%;
  margin-top: 5rem;
`;
const CommentContent = styled.div`
  width: 80%;
  margin: 0 auto;
`;
