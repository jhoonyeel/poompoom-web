import styled from 'styled-components';
import { useFetchRecommendations } from '../../../shared/hooks/useFetchRecommendations';
import { useNavigatePath } from '../../../shared/hooks/useNavigatePath';
import { ScrollToTopButton } from '../../../shared/ui/ScrollToTopButton';
import { ReactComponent as CardNews } from '../assets/CardNews.svg';
import { ReactComponent as Anniversary } from '../assets/Category/Anniversary.svg';
import { ReactComponent as Apology } from '../assets/Category/Apology.svg';
import { ReactComponent as Birthday } from '../assets/Category/Birthday.svg';
import { ReactComponent as Christmas } from '../assets/Category/Christmas.svg';
import { ReactComponent as D100 } from '../assets/Category/D100.svg';
import { ReactComponent as Light } from '../assets/Category/Light.svg';
import { ReactComponent as Lose } from '../assets/Category/Lose.svg';
import { ReactComponent as Propose } from '../assets/Category/Propose.svg';
import { ReactComponent as Ranking } from '../assets/HomeRanking.svg';
import { ReactComponent as MainBackground } from '../assets/MainBackground.svg';
import { ReactComponent as Season } from '../assets/Season.svg';
import { ReactComponent as SeasonBk } from '../assets/SeasonBackground.svg';

export default function Home() {
  const { recommendations } = useFetchRecommendations();
  const navigatePath = useNavigatePath();

  return (
    <Wrapper>
      <ProfileSection>
        <MainIcon /> {/* SVG to PNG */}
      </ProfileSection>

      <SearchSection>
        <SearchBox>
          <SearchTitle>Search</SearchTitle>
          <SearchSmallTitle>지금 많이 찾아보는 태그</SearchSmallTitle>
        </SearchBox>
        <KeywordList>
          {recommendations.map((recommendation) => (
            <KeywordItem key={recommendation.id}>{recommendation.name}</KeywordItem>
          ))}
        </KeywordList>
      </SearchSection>

      <CategorySection>
        <CategoryBox>
          <CategoryList>
            <D100 width="170px" onClick={navigatePath('/review/search?searchContent=100일')} />
            <Apology width="170px" onClick={navigatePath('/review/search?searchContent=사과의+선물')} />
            <Light width="170px" onClick={navigatePath('/review/search?searchContent=가벼운+선물')} />
            <Birthday width="170px" onClick={navigatePath('/review/search?searchContent=생일')} />
            <Propose width="170px" onClick={navigatePath('/review/search?searchContent=청혼')} />
            <Lose width="170px" onClick={navigatePath('/review/search?searchContent=로맨틱+데이')} />
            <Anniversary width="170px" onClick={navigatePath('/review/search?searchContent=n주년')} />
            <Christmas width="170px" onClick={navigatePath('/review/search?searchContent=크리스마스')} />
          </CategoryList>
          <CardNews width="380px" />
        </CategoryBox>
      </CategorySection>

      <RankingSection>
        <RankingBox>
          <Ranking />
        </RankingBox>
        <MoveButton type="button" onClick={navigatePath('/review')}>
          Go to mood view!
        </MoveButton>
      </RankingSection>

      <SeasonSection>
        <SeasonAbsoluteBox>
          <SeasonBackgroundBox>
            <SeasonBk width="100%" height="100%" /> {/* SVG to PNG */}
          </SeasonBackgroundBox>
          <Season width="100%" height="100%" /> {/* SVG to PNG */}
        </SeasonAbsoluteBox>
      </SeasonSection>

      <ScrollToTopButton />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
`;
const ProfileSection = styled.section`
  margin: 0 auto;
  padding-top: 40px;
  min-width: 1028px;
  width: 80%;
  border-radius: 20px;
  overflow: hidden;
`;
const MainIcon = styled(MainBackground)`
  width: 100%;
  height: 100%;
`;

const SearchSection = styled.section`
  min-width: 1028px;
  width: 80%;
  margin: 48px auto 0px;
`;
const SearchBox = styled.div`
  display: flex;
`;
const SearchTitle = styled.span`
  font-family: 'Shrikhand';
  font-style: italic;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.4;
  color: #4b4b4b;
  margin-right: 10px;
`;
const SearchSmallTitle = styled.span`
  position: relative;
  font-family: 'Shrikhand';
  font-style: italic;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.4;
  color: #4b4b4b;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 5px;
    height: 1.5px;
    background-color: #4b4b4b;
  }
`;
const KeywordList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190px, 6fr)); /* 열 크기 자동 조절 */
  gap: 20px;
  margin-top: 24px;
`;
const KeywordItem = styled.li`
  border-radius: 50px;
  margin: 0.5rem 1rem;
  padding: 1rem 1.5rem;
  color: #ffffff;
  font-size: 18px;
  transition: background-color 0.3s ease;
  background-color: #a1a1a1;
  cursor: pointer;

  &:hover {
    background-color: #535353;
  }
`;

const CategorySection = styled.section`
  min-width: 1028px;
  width: 80%;
  margin: 48px auto 0px;
`;
const CategoryBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;
const CategoryList = styled.ul`
  width: 70%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px 10px;
`;

const MoveButton = styled.button`
  margin-top: 2rem;
  padding: 0.5rem 1.5rem;
  background: #ffffff;
  border: 3px solid #545454;
  border-radius: 30px;
  font-family: 'Righteous';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 37px;
  letter-spacing: -0.017em;
  color: #626262;
  cursor: pointer;
`;

const RankingSection = styled.section`
  width: 100%;
`;
const RankingBox = styled.div`
  min-width: 1028px;
  width: 80%;
  margin: 0 auto;
  overflow: hidden;
`;

const SeasonSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  width: 100%;
`;
const SeasonAbsoluteBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const SeasonBackgroundBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: max-content;
  width: 100%;
  height: 100%;
  z-index: -1; /* 배경이 아래에 있도록 설정 */
`;
