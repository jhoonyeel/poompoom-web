import React from 'react';
import styled from 'styled-components';
import ReviewPostCard from '../../../../../components/ReviewPostCard/ReviewPostCard.container';

export default function SearchGalleryUI({ searchPosts }) {
  return (
    <Wrapper>
      {searchPosts &&
        searchPosts.map((post, index) => <ReviewPostCard key={`${post.reviewId}-${index}`} post={post} />)}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 28px;
  padding-left: 20px;
`;
