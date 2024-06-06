import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { debounce } from 'lodash';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import PostFilter from './components/PostFilter/PostFilter.container';
import RankingProfileCard from './components/Ranking/RankingProfileCard/RankingProfileCard.container';
import SearchGallery from './components/Section/SearchSection/SearchGallery/SearchGallery.container';
import SearchHeader from './components/Section/SearchSection/SearchHeader/SearchHeader.container';
import SubGallery from './components/Section/SubSection/SubGallery/SubGallery.container';
import SubHeader from './components/Section/SubSection/SubHeader/SubHeader.container';

export default function ReviewPage() {
  const [isSticky, setIsSticky] = useState(false);
  const postFilterRef = useRef(null);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const postFilter = postFilterRef.current;
      if (postFilter) {
        const { offsetTop } = postFilter;
        setIsSticky(window.scrollY >= offsetTop - (12 * window.innerHeight) / 100);
      }
    }, 150); // 150~200ms의 디바운스 적용

    window.addEventListener('scroll', handleScroll);
    return () => {
      handleScroll.cancel(); // 컴포넌트가 언마운트 될 때 디바운스 취소
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isSticky]);

  // 화면 맨 위로 이동하는 함수
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // 부드러운 스크롤
    });
  };

  return (
    <>
      <RankingProfileCard />
      <Layout>
        <PostFilterWrapper ref={postFilterRef} isSticky={isSticky}>
          <PostFilter />
        </PostFilterWrapper>
        {/* <LatestHeader />
        <LatestGallery /> */}
        <section>
          <SubHeader />
          <SubGallery />
        </section>
        <SearchHeader />
        <SearchGallery />
        <Box />
        <ButtonBox onClick={scrollToTop}>
          <UpIcon icon={faChevronUp} />
        </ButtonBox>
      </Layout>
    </>
  );
}

const Layout = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const PostFilterWrapper = styled.div`
  position: ${({ isSticky }) => (isSticky ? 'sticky' : 'relative')};
  top: ${({ isSticky }) => (isSticky ? '12vh' : 'auto')};
  z-index: 6; /* 헤더와 함께 보이도록 z-index 조정 */
  background-color: white; /* 배경색 지정하여 다른 콘텐츠와 구분 */
  transition: top 0.3s ease; /* 부드러운 이동을 위한 transition 속성 추가 */
`;
const Box = styled.div`
  height: 200vh;
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
