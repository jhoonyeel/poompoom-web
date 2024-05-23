import styled from 'styled-components';
import QuickGift from './components/QuickGift/QuickGift';
import RankingProfileCard from './components/Ranking/RankingProfileCard/RankingProfileCard.container';
import LatestHeader from './components/Section/LatestSection/LatestHeader/LatestHeader.container';
import LatestGallery from './components/Section/LatestSection/LatestGallery/LatestGallery.container';
import SubHeader from './components/Section/SubSection/SubHeader/SubHeader.container';
import SubGallery from './components/Section/SubSection/SubGallery/SubGallery.container';
import SearchHeader from './components/Section/SearchSection/SearchHeader/SearchHeader.container';
import SearchGallery from './components/Section/SearchSection/SearchGallery/SearchGallery.container';
import PostFilter from './components/PostFilter/PostFilter.container';

function ReviewPage() {
  return (
    <>
      <RankingProfileCard />
      <Layout>
        <PostFilter />
        <LatestHeader />
        <LatestGallery />
        <SubHeader />
        <SubGallery />
        <SearchHeader />
        <SearchGallery />
        <QuickGift />
        <ButtonBox>
          <button type="button">↑</button> {/** 추후에 컴포넌트 사용 */}
        </ButtonBox>
      </Layout>
    </>
  );
}

export default ReviewPage;

const Layout = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const ButtonBox = styled.div`
  position: fixed;
  bottom: 20px; /* 화면 하단과의 간격 조정 */
  right: 50px; /* 화면 우측과의 간격 조정 */
  z-index: 999; /* 다른 요소 위에 표시되도록 z-index 조정 */
  width: 5%;
`;
