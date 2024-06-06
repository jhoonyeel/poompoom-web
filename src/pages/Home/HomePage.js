import { faChevronUp, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function HomePage() {
  const [recommendations, setRecommendations] = useState([]);
  const [categorys] = useState([
    {
      id: 1,
      name: '100일',
    },
    {
      id: 2,
      name: 'n주년',
    },
    {
      id: 3,
      name: '생일',
    },
    {
      id: 4,
      name: 'OO데이',
    },
    {
      id: 5,
      name: '크리스마스',
    },
    {
      id: 6,
      name: '가벼운 선물',
    },
    {
      id: 7,
      name: '사과의 선물',
    },
    {
      id: 8,
      name: '청혼',
    },
  ]);

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
        <ProfileContent>
          <ProfileQuote>&quot;나의 그 or 그녀를 위한 두근두근 선물 대작전&quot;</ProfileQuote>
          <CreateProfileBox onClick={handleOnClick('/lovers-profile')}>
            <PlusIconBox>
              <PlusIcon icon={faPlus} />
            </PlusIconBox>
            <PlusParagraph>프로필 생성하러 가기</PlusParagraph>
          </CreateProfileBox>
        </ProfileContent>
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
            {categorys.map((category, index) => (
              <CategoryItem key={category.id}>
                <CategoryImage src="" alt={`카테고리${index} 사진`} />
                <b>{category.name}</b>
              </CategoryItem>
            ))}
          </CategoryList>
          <MoveButton type="button" onClick={handleOnClick('/review')}>
            리뷰글 페이지로
          </MoveButton>
        </CategoryBox>
      </SearchSection>
      <CurationSection>봄 맞이 선물</CurationSection>
      <ButtonBox onClick={scrollToTop}>
        <UpIcon icon={faChevronUp} />
      </ButtonBox>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
`;

const ProfileSection = styled.section`
  width: 100%;
  border: 3px solid #aaa;
  margin-top: 5rem;

  border-radius: 20px;
  overflow: hidden;
`;
const ProfileContent = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 8% 5%;
  border-radius: 50px;
  background-color: gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ProfileQuote = styled.blockquote`
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
`;

const SearchSection = styled.section`
  width: 100%;
  border: 3px solid #aaa;
  margin-top: 5rem;
`;
const KeywordBox = styled.div`
  width: 80%;
  margin: 0 auto;
`;
const KeywordParagraph = styled.p`
  padding: 20px;
`;
const KeywordList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const KeywordItem = styled.li`
  border: 3px solid #f2f2f2;
  border-radius: 20px;
  margin: 0.5rem 1rem;
  padding: 0.3rem;
  cursor: pointer;
`;
const CategoryBox = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 3rem;
`;
const CategoryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const CategoryItem = styled.li`
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
`;
const MoveButton = styled.button`
  margin-top: 2rem;
  padding: 0.5rem;
  border-radius: 8px;
`;

const CurationSection = styled.section`
  width: 100%;
  border: 3px solid #aaa;
  margin-top: 5rem;
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
