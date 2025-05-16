import PostFilter from '@widgets/review-filter/ui/ReviewFilter.container.js';
import { useState } from 'react';
import styled from 'styled-components';
// import RankingProfileCard from './components/Ranking/RankingProfileCard/RankingProfileCard.container';
import ScrollToTopButton from '@shared/ui/ScrollToTopButton.js';
import ExploreFeed from './explore-feed/ExploreFeed.container.js';
import RecentlyViewdFeed from './recently-viewd-feed/RecentlyViewdFeed.container.js';
import RecommendedFeed from './recommended-feed/RecommendedFeed.container.js';

const ReviewList = () => {
  const [selectedSort, setSelectedSort] = useState('추천순'); // 기본으로 추천순이 선택되도록 설정

  return (
    <Wrapper>
      {/* <RankingProfileCard /> */}

      <PostFilterContainer>
        <PostFilter selectedSort={selectedSort} setSelectedSort={setSelectedSort} />
      </PostFilterContainer>

      <LatestSection>
        <Title>RECENT VIEW</Title>
        <RecentlyViewdFeed />
      </LatestSection>
      <SubSection>
        <Title>HOW ABOUT THIS</Title>
        <SubBodyContent>
          <RecommendedFeed />
        </SubBodyContent>
      </SubSection>
      <SearchSection>
        <Title>ALL MOOD VIEW</Title>
        <ExploreFeed selectedSort={selectedSort} />
      </SearchSection>

      <ScrollToTopButton />
    </Wrapper>
  );
};

export default ReviewList;

const Wrapper = styled.div`
  margin: 0 auto;
  min-width: 1028px;
  width: 80%;
`;
const PostFilterContainer = styled.div`
  position: sticky;
  top: 15vh;
  z-index: 6; /* 헤더와 함께 보이도록 z-index 조정 */
  width: 100%;
  background-color: transparent;
  transition: top 0.3s ease-in-out; /* 부드러운 이동을 위한 transition 속성 추가 */
`;

const Title = styled.h3`
  text-align: start;
  font-family: 'Shrikhand';
  font-style: italic;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.4;
  color: #0e5649;
`;
const LatestSection = styled.section`
  width: 100%;
`;
const SubSection = styled.section`
  margin-top: 32px;
  width: 100%;
`;
const SubBodyContent = styled.div`
  display: flex;
  height: 420px;
`;
const SearchSection = styled.section`
  margin-top: 32px;
  width: 100%;
`;
