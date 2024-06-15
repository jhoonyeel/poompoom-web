import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import PostFilter from './components/PostFilter/PostFilter.container';
import LatestGallery from './components/Section/LatestSection/LatestGallery/LatestGallery.container';
import LatestHeader from './components/Section/LatestSection/LatestHeader/LatestHeader.container';
import SearchGallery from './components/Section/SearchSection/SearchGallery/SearchGallery.container';
import SearchHeader from './components/Section/SearchSection/SearchHeader/SearchHeader.container';
import SubAccount from './components/Section/SubSection/SubAccount/SubAccount.container';
import SubGallery from './components/Section/SubSection/SubGallery/SubGallery.container';
import SubHeader from './components/Section/SubSection/SubHeader/SubHeader.container';

export default function ReviewPage() {
  // 화면 맨 위로 이동하는 함수
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // 부드러운 스크롤
    });
  };

  return (
    <Wrapper>
      {/* <RankingProfileCard /> */}
      <PostFilterContent>
        <PostFilter />
      </PostFilterContent>
      <GalleryContent>
        <LatestContent>
          <LatestHeader />
          <LatestGallery />
        </LatestContent>
        <SubContent>
          <SubHeader />
          <SubBodyContent>
            <SubGallery />
            <SubAccount />
          </SubBodyContent>
        </SubContent>
        <SearchContent>
          <SearchHeader />
          <SearchGallery />
        </SearchContent>
        <ButtonBox onClick={scrollToTop}>
          <UpIcon icon={faChevronUp} />
        </ButtonBox>
      </GalleryContent>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const GalleryContent = styled.div`
  width: 80%;
  margin: 0 auto;
`;
const PostFilterContent = styled.div`
  width: 100%;
  position: sticky;
  top: 15vh;
  z-index: 6; /* 헤더와 함께 보이도록 z-index 조정 */
  background-color: white; /* 배경색 지정하여 다른 콘텐츠와 구분 */
  transition: top 0.3s ease-in-out; /* 부드러운 이동을 위한 transition 속성 추가 */
`;

const LatestContent = styled.section`
  width: 100%;
`;
const SubContent = styled.section`
  width: 100%;
`;
const SubBodyContent = styled.div`
  display: flex;
  width: 100%;
  height: 620px;
`;
const SearchContent = styled.section`
  width: 100%;
`;
const ButtonBox = styled.div`
  position: fixed;
  bottom: 50px; /* 화면 하단과의 간격 조정 */
  right: 50px; /* 화면 우측과의 간격 조정 */
  z-index: 999; /* 다른 요소 위에 표시되도록 z-index 조정 */
  width: 2%;
  aspect-ratio: 1 / 1;
  border: 3px solid gray;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const UpIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
`;
