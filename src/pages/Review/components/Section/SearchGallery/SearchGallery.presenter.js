import React from 'react';
import styled from 'styled-components';
import ReviewPostCard from '../../../../../components/ReviewPostCard/ReviewPostCard.container';

export default function SearchGalleryUI({ searchPosts }) {
  return (
    <Wrapper>{searchPosts && searchPosts.map((post) => <ReviewPostCard key={post.reviewId} post={post} />)}</Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 16px;
  padding-left: 20px;
`;
