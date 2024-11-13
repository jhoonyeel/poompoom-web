import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import PostFilter from '../../components/PostFilter/PostFilter.container';
// import RankingProfileCard from './components/Ranking/RankingProfileCard/RankingProfileCard.container';
import { ScrollToTopButton } from '../../components/common/ScrollToTopButton';
import { scrollToTop } from '../../shared/scrollToTop';
import LatestGallery from './components/Section/LatestGallery/LatestGallery.container';
import SearchGallery from './components/Section/SearchGallery/SearchGallery.container';
import SubAccount from './components/Section/SubAccount/SubAccount.container';
import SubGallery from './components/Section/SubGallery/SubGallery.container';

export default function ReviewPage() {
  const [stickyOffset, setStickyOffset] = useState(0);

  // 헤더와 postfilter에 .sticky 추가
  useEffect(() => {
    // 모든 sticky 요소를 선택
    const stickyElements = document.querySelectorAll('.sticky');
    let totalOffset = 0;

    // 모든 sticky 요소의 높이를 합산
    stickyElements.forEach((element) => {
      totalOffset += element.offsetHeight;
    });

    setStickyOffset(totalOffset);
  }, []);

  return (
    <Wrapper>
      {/* <RankingProfileCard /> */}

      <PostFilterContainer className="sticky">
        <PostFilter />
      </PostFilterContainer>

      <LatestSection>
        <Title>RECENT VIEW</Title>
        <LatestGallery />
      </LatestSection>
      <SubSection>
        <Title>HOW ABOUT THIS</Title>
        <SubBodyContent>
          <SubGallery />
          <SubAccount />
        </SubBodyContent>
      </SubSection>
      <SearchSection>
        <Title>ALL MOOD VIEW</Title>
        <SearchGallery />
      </SearchSection>
      <ButtonBox onClick={() => scrollToTop(stickyOffset)}>
        <UpIcon icon={faChevronUp} />
      </ButtonBox>
      <ScrollToTopButton />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const PostFilterContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  min-width: 1028px;

  position: sticky;
  top: 15vh;
  z-index: 6; /* 헤더와 함께 보이도록 z-index 조정 */
  background-color: rgba(255, 255, 255, 0.75);
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
  margin: 0 auto;
  min-width: 1028px;
  width: 80%;
`;
const SubSection = styled.section`
  margin: 32px auto 0;
  min-width: 1028px;
  width: 80%;
`;
const SubBodyContent = styled.div`
  display: flex;
  height: 420px;
`;
const SearchSection = styled.section`
  margin: 32px auto 0;
  min-width: 1028px;
  width: 80%;
`;
const ButtonBox = styled.div`
  position: fixed;
  bottom: 50px; /* 화면 하단과의 간격 조정 */
  right: 50px; /* 화면 우측과의 간격 조정 */
  z-index: 999; /* 다른 요소 위에 표시되도록 z-index 조정 */
  width: 2%;
  aspect-ratio: 1 / 1;
  background-color: white;
  border: 3px solid gray;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const UpIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
`;
