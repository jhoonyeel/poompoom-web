import ReviewCard from '@widgets/review-card/ui/ReviewCard.container';
import styled from 'styled-components';

const ExploreFeedUI = ({ searchPosts }) => {
  return (
    <Wrapper>
      {searchPosts && searchPosts.map((post, index) => <ReviewCard key={`${post.reviewId}-${index}`} post={post} />)}
    </Wrapper>
  );
};

export default ExploreFeedUI;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 28px;
  padding-left: 20px;
`;
