import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// eslint-disable-next-line camelcase, import/no-unresolved
import { ReactComponent as Mains } from '../../assets/Main.svg';
import { ReactComponent as One } from '../../assets/One.svg';
import { ReactComponent as Two } from '../../assets/Two.svg';
import { ReactComponent as Tre } from '../../assets/Tre.svg';
import { ReactComponent as Four } from '../../assets/4.svg';
import { ReactComponent as Five } from '../../assets/5.svg';
import { ReactComponent as Six } from '../../assets/6.svg';
import { ReactComponent as Seven } from '../../assets/7.svg';

import { ReactComponent as D100 } from '../../assets/D100.svg';
import { ReactComponent as Apple } from '../../assets/Apple.svg';
import { ReactComponent as Gift } from '../../assets/Gift.svg';
import { ReactComponent as Group } from '../../assets/Group.svg';
import { ReactComponent as Vector } from '../../assets/Vector.svg';
import { ReactComponent as Lose } from '../../assets/Lose.svg';
import { ReactComponent as Chres } from '../../assets/Chres.svg';
import { ReactComponent as Calender } from '../../assets/Calender.svg';

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
        <Mains />
      </ProfileSection>
      <SearchSection>
        <KeywordBox>
          <KeywordParagraph>지금 다른 분들이 많이 검색해요</KeywordParagraph>
          <KeywordList>
            {recommendations.map((recommendation) => (
              <KeywordItem key={recommendation.id}>{recommendation.name}</KeywordItem>
            ))}
          </KeywordList>
        </KeywordBox>
        <CategoryBox>
          <CategoryList>
            <CategoryWrapper>
              <D100 /> <Text>100일</Text>
            </CategoryWrapper>
            <CategoryWrapper>
              <Apple /> <Text>사과의 선물</Text>
            </CategoryWrapper>
            <CategoryWrapper>
              <Gift /> <Text>가벼운 선물</Text>
            </CategoryWrapper>
            <CategoryWrapper>
              <Group /> <Text>생일</Text>
            </CategoryWrapper>
            <CategoryWrapper>
              <Vector /> <Text>청혼</Text>
            </CategoryWrapper>
            <CategoryWrapper>
              <Lose /> <Text>로맨틱 데이</Text>
            </CategoryWrapper>
            <CategoryWrapper>
              <Calender /> <Text>n주년</Text>
            </CategoryWrapper>
            <CategoryWrapper>
              <Chres />
              <Text>크리스마스 선물</Text>
            </CategoryWrapper>
          </CategoryList>
        </CategoryBox>
      </SearchSection>
      <MoveButton type="button" onClick={handleOnClick('/review')}>
        리뷰글 페이지로
      </MoveButton>
      <CurationSection>
        <CurationTitle>봄 맞이 선물</CurationTitle>
        <ButtonWrapper>
          <CurationButton>어버이날기념</CurationButton>
          <CurationButton>스승의날</CurationButton>
          <CurationButton>황사대비탬</CurationButton>
          <CurationButton>봄먹거리</CurationButton>
        </ButtonWrapper>
        <ISWRapper>
          <IWrapper>
            <Seven />
          </IWrapper>
          <ImageWrapper>
            <One />
            <Two />
            <Tre />
            <Four />
            <Five />
            <Six />
          </ImageWrapper>
        </ISWRapper>
      </CurationSection>
      <ButtonBox onClick={scrollToTop}>
        <UpIcon icon={faChevronUp} />
      </ButtonBox>
    </Wrapper>
  );
}
const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Text = styled.div``;
const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 20px;
`;

const IWrapper = styled.div`
  margin: 0 1rem;
`;

const ISWRapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const CurationTitle = styled.div`
  font-size: 50px;
  font-weight: 800;
  display: flex;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
`;
const CurationButton = styled.button`
  width: 173px;
  height: 48px;
  border-radius: 30px;
  transition: all 0.2s ease-in-out;
  font-size: 18px;
  margin: 1rem;
  &:hover {
    background-color: #545454;
    color: white;
  }
`;

const Wrapper = styled.main`
  width: 100%;
`;

const ProfileSection = styled.section`
  width: 100%;
  margin-top: 5rem;
  background-color: #ffeaea;
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
  border: 3px solid #aaa;
  margin-top: 5rem;
`;
const KeywordBox = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: 0 10rem;
`;
const KeywordParagraph = styled.p`
  padding: 20px;
  color: #585858;
  font-size: 24px;
`;
const KeywordList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
`;
const KeywordItem = styled.li`
  border: 3px solid #f2f2f2;
  border-radius: 20px;
  margin: 0.5rem 1rem;
  padding: 0.3rem;
  cursor: pointer;
  background-color: rgba(108, 108, 108, 0.3);
  transition: background-color 0.3s ease;
  &:hover {
    background-color: rgba(108, 108, 108, 0.54);
  }
`;
const CategoryBox = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 3rem;
`;
const CategoryList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  margin-top: 20px;
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
  padding: 0.5rem;
  border-radius: 8px;
  font-size: 20px;
  background-color: #ffeaea;
  &:hover {
    background-color: #ffc2c2;
  }
`;

const CurationSection = styled.section`
  width: 100%;
  height: 767px;
  background-color: #ffeaea;
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
