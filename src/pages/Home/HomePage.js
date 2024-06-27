import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// eslint-disable-next-line camelcase, import/no-unresolved
import { ReactComponent as Anniversary } from '../../assets/Category/Anniversary.svg';
import { ReactComponent as Apology } from '../../assets/Category/Apology.svg';
import { ReactComponent as Birthday } from '../../assets/Category/Birthday.svg';
import { ReactComponent as Christmas } from '../../assets/Category/Christmas.svg';
import { ReactComponent as D100 } from '../../assets/Category/D100.svg';
import { ReactComponent as Light } from '../../assets/Category/Light.svg';
import { ReactComponent as Lose } from '../../assets/Category/Lose.svg';
import { ReactComponent as Propose } from '../../assets/Category/Propose.svg';
import { ReactComponent as Calender1 } from '../../assets/Component 1 (4).svg';
import { ReactComponent as SearchBar } from '../../assets/Component 1 (7).svg';
import { ReactComponent as SliderExe } from '../../assets/Component 2 (1).svg';
import { ReactComponent as Components } from '../../assets/MainBackground.svg';
import { ReactComponent as Season } from '../../assets/Season.svg';
import { ReactComponent as SeasonBk } from '../../assets/SeasonBackground.svg';

export default function HomePage() {
  const [recommendations, setRecommendations] = useState([]);

  const navigate = useNavigate();
  const handleOnClick = (path) => () => {
    navigate(path);
  };

  const fetchPostData = async () => {
    try {
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

  // 화면 맨 위로 이동하는 함수
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // 부드러운 스크롤
    });
  };

  return (
    <Wrapper>
      <ProfileSection>
        <MainImgBox>
          <MainSvg />
        </MainImgBox>
      </ProfileSection>

      <SearchSection>
        <SearchBox>
          <SearchBar />
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
            <CategoryWrapper onClick={handleOnClick('/review/query-result?searchContent=100일')}>
              <D100 />
            </CategoryWrapper>
            <CategoryWrapper onClick={handleOnClick('/review/query-result?searchContent=사과의+선물')}>
              <Apology />
            </CategoryWrapper>
            <CategoryWrapper onClick={handleOnClick('/review/query-result?searchContent=가벼운+선물')}>
              <Light />
            </CategoryWrapper>
            <CategoryWrapper onClick={handleOnClick('/review/query-result?searchContent=생일')}>
              <Birthday />
            </CategoryWrapper>
            <CategoryWrapper onClick={handleOnClick('/review/query-result?searchContent=청혼')}>
              <Propose />
            </CategoryWrapper>
            <CategoryWrapper onClick={handleOnClick('/review/query-result?searchContent=로맨틱+데이')}>
              <Lose />
            </CategoryWrapper>
            <CategoryWrapper onClick={handleOnClick('/review/query-result?searchContent=n주년')}>
              <Anniversary />
            </CategoryWrapper>
            <CategoryWrapper onClick={handleOnClick('/review/query-result?searchContent=크리스마스')}>
              <Christmas />
            </CategoryWrapper>
          </CategoryList>
          <CalenderBox>
            <Calender1 />
          </CalenderBox>
        </MiddleBox>
      </SearchSection>

      <RankingSection>
        <RankingBox>
          <SliderExe />
        </RankingBox>
      </RankingSection>

      <MoveButton type="button" onClick={handleOnClick('/review')}>
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

      <ButtonBox onClick={scrollToTop}>
        <UpIcon icon={faChevronUp} />
      </ButtonBox>
    </Wrapper>
  );
}

const MainImgBox = styled.div`
  width: 80%;
  margin: 0 auto;
`;
const MainSvg = styled(Components)`
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
/* const ProfileContent = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 8% 5%;
  border-radius: 50px;
  background-color: gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

/* const ProfileQuote = styled.blockquote`
  font-size: 48px;
  font-weight: bold;
  font-style: italic;
`; 

const CreateProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const PlusIconBox = styled.div`
  background-color: white;
  border-radius: 50%;
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PlusIcon = styled(FontAwesomeIcon)`
  background-color: white;
  color: gray;
  font-size: 100px;
`;
const PlusParagraph = styled.p`
  font-size: 28px;
  margin-top: 1rem;
  font-weight: bold;
`; */

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
/* const CategoryItem = styled.li`
  border: 3px solid #f2f2f2;
  border-radius: 20px;
  margin: 0.5rem 1rem;
  padding: 0.3rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
`;
const CategoryImage = styled.img`
  width: 20%;
  height: 20%;
`; */
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

const ButtonBox = styled.div`
  position: fixed;
  bottom: 50px; /* 화면 하단과의 간격 조정 */
  right: 50px; /* 화면 우측과의 간격 조정 */
  z-index: 999; /* 다른 요소 위에 표시되도록 z-index 조정 */
  width: 2%;
  border: 3px solid gray;
  border-radius: 50%;
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const UpIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
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
