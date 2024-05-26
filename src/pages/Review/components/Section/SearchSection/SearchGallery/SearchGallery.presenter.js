/* 페이지 주소를 받아와서 다른 data 전송 */
import React from 'react';
import styled from 'styled-components';
import ReviewPostCard from '../../../Card/ReviewPostCard/ReviewPostCard.container';
// import PostDetail from '../../../../../../components/PostDetail/PostDetail.container';

export default function SearchGalleryUI({ currentPosts, handlePostClick }) {
  return (
    <PostList>
      {currentPosts.map((post) => (
        <ReviewPostCard key={post.id} post={post} onPostClick={handlePostClick} />
      ))}
    </PostList>
  );
}

const PostList = styled.div`
  display: flex;
  flex-wrap: wrap; /* 내용이 넘칠 때 줄바꿈 설정 */
  row-gap: 50px;
  column-gap: 11%; // calc(30% / 3), 11.5%
  padding: 2% 10%;
  border: 3px solid #aaa;
`;
