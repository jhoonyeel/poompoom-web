import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from '../../apis/axios';
import { ReactComponent as CardNews } from '../../assets/CardNews.svg';
import { ReactComponent as Anniversary } from '../../assets/Category/Anniversary.svg';
import { ReactComponent as Apology } from '../../assets/Category/Apology.svg';
import { ReactComponent as Birthday } from '../../assets/Category/Birthday.svg';
import { ReactComponent as Christmas } from '../../assets/Category/Christmas.svg';
import { ReactComponent as D100 } from '../../assets/Category/D100.svg';
import { ReactComponent as Light } from '../../assets/Category/Light.svg';
import { ReactComponent as Lose } from '../../assets/Category/Lose.svg';
import { ReactComponent as Propose } from '../../assets/Category/Propose.svg';
import { ReactComponent as Ranking } from '../../assets/HomeRanking.svg';
import { ReactComponent as MainBackground } from '../../assets/MainBackground.svg';
import { ReactComponent as Season } from '../../assets/Season.svg';
import { ReactComponent as SeasonBk } from '../../assets/SeasonBackground.svg';
import { ScrollToTopButton } from '../../components/common/ScrollToTopButton';
import { useNavigatePath } from '../../hooks/useNavigatePath';

export default function HomePage() {
  const [recommendations, setRecommendations] = useState([]);

  const navigatePath = useNavigatePath();

  const fetchPostData = async () => {
    try {
      console.log('/hashtag/rank API 실행');
      const res = await axios.get(`/hashtag/rank`);
      const { data } = res;
      setRecommendations(data);
    } catch (error) {
      console.error('Error fetching post data:', error);
    }
  };
  useEffect(() => {
    fetchPostData();
  }, []);

  return (
    <Wrapper>
      <ProfileSection>
        <MainImgBox>
          <MainSvg />
        </MainImgBox>
      </ProfileSection>

      <SearchSection>
        <SearchBox>
          <SearchTitle>Search</SearchTitle>
          <SearchSmallTitle>지금 많이 찾아보는 태그</SearchSmallTitle>
        </SearchBox>
        <KeywordBox>
          <KeywordList>
            {recommendations.map((recommendation) => (
              <KeywordItem key={recommendation.id}>{recommendation.name}</KeywordItem>
            ))}
          </KeywordList>
        </KeywordBox>
        <MiddleBox>
          <CategoryList>
            <CategoryWrapper onClick={navigatePath('/review/query-result?searchContent=100일')}>
              <D100 />
            </CategoryWrapper>
            <CategoryWrapper onClick={navigatePath('/review/query-result?searchContent=사과의+선물')}>
              <Apology />
            </CategoryWrapper>
            <CategoryWrapper onClick={navigatePath('/review/query-result?searchContent=가벼운+선물')}>
              <Light />
            </CategoryWrapper>
            <CategoryWrapper onClick={navigatePath('/review/query-result?searchContent=생일')}>
              <Birthday />
            </CategoryWrapper>
            <CategoryWrapper onClick={navigatePath('/review/query-result?searchContent=청혼')}>
              <Propose />
            </CategoryWrapper>
            <CategoryWrapper onClick={navigatePath('/review/query-result?searchContent=로맨틱+데이')}>
              <Lose />
            </CategoryWrapper>
            <CategoryWrapper onClick={navigatePath('/review/query-result?searchContent=n주년')}>
              <Anniversary />
            </CategoryWrapper>
            <CategoryWrapper onClick={navigatePath('/review/query-result?searchContent=크리스마스')}>
              <Christmas />
            </CategoryWrapper>
          </CategoryList>
          <CalenderBox>
            <CardNews />
          </CalenderBox>
        </MiddleBox>
      </SearchSection>

      <RankingSection>
        <RankingBox>
          <Ranking />
        </RankingBox>
      </RankingSection>

      <MoveButton type="button" onClick={navigatePath('/review')}>
        Go to mood view!
      </MoveButton>

      <SeasonSection>
        <SeasonAbsoluteBox>
          <SeasonBackgroundBox>
            <SeasonBk />
          </SeasonBackgroundBox>
          <SeasonBox>
            <Season />
          </SeasonBox>
        </SeasonAbsoluteBox>
      </SeasonSection>

      <ScrollToTopButton />
    </Wrapper>
  );
}

const MainImgBox = styled.div`
  width: 80%;
  margin: 0 auto;
`;
const MainSvg = styled(MainBackground)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const RankingSection = styled.section`
  width: 100%;
`;

const Wrapper = styled.main`
  width: 100%;
`;

const ProfileSection = styled.section`
  width: 100%;
  margin-top: 2rem;
  border-radius: 20px;
  overflow: hidden;
`;

const SearchSection = styled.section`
  width: 100%;
  margin-top: 3.5rem;
`;
const KeywordBox = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SearchBox = styled.div`
  width: 70%;
  margin: 0 auto;
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
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;
const KeywordItem = styled.li`
  border-radius: 50px;
  margin: 0.5rem 1rem;
  padding: 1rem 1.5rem;
  color: #ffffff;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  background-color: #a1a1a1;
  &:hover {
    background-color: #535353;
  }
`;

const MiddleBox = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;
const CategoryList = styled.ul`
  width: 70%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 20px;
`;
const CalenderBox = styled.div`
  /* width: 30%; */
  flex: 1;
  object-fit: cover;
`;

const CategoryWrapper = styled.div`
  cursor: pointer;
  width: 100%;
  height: 100%;
  object-fit: cover;
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

const RankingBox = styled.div`
  width: 80%;
  margin: 0 auto;
  overflow: hidden;
`;

const SeasonSection = styled.section`
  width: 100%;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  width: 100%;
  height: 100%;
  z-index: -1; /* 배경이 아래에 있도록 설정 */
`;
const SeasonBox = styled.div`
  margin: 0 auto;
`;
