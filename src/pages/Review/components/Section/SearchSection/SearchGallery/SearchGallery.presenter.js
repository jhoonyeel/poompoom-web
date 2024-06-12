import React from 'react';
import styled from 'styled-components';
import ReviewPostCard from '../../../Card/ReviewPostCard/ReviewPostCard.container';

export default function SearchGalleryUI({ searchPosts }) {
  return (
    <Wrapper>
      {searchPosts.map((post) => (
        <ReviewPostCard key={post.reviewId} post={post} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 4개의 열을 가지도록 설정 */
  column-gap: 1.5rem;
  row-gap: 2.5rem;
`;
