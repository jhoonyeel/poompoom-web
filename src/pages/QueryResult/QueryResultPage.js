import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import axios from '../../apis/axios';
import { ReactComponent as Eyes } from '../../assets/eyes.svg';
import ReviewPostCard from '../Review/components/Card/ReviewPostCard/ReviewPostCard.container';
import PostFilter from '../Review/components/PostFilter/PostFilter.container';

export default function QueryResultPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const searchContent = params.get('searchContent') || ''; // URL에서 searchContent 값을 추출

  const [queryPosts, setQueryPosts] = useState([]);
  const [cursorId, setCursorId] = useState(0);
  const [hasNext, setHasNext] = useState(true);
  const [currentKeyword, setCurrentKeyword] = useState(searchContent);
  const [initialSearchDone, setInitialSearchDone] = useState(false); // 초기 검색 완료 상태
  const loader = useRef(null);

  const fetchMaxReviewId = async () => {
    try {
      const res = await axios.get(`/review`);
      const allReviews = res.data;
      if (allReviews.length > 0) {
        const maxReviewId = Math.max(...allReviews.map((review) => review.reviewId));
        setCursorId(maxReviewId);
      }
    } catch (error) {
      console.error('Error fetching all reviews:', error);
    }
  };

  const fetchPostData = async (cursor, size = 24, keyword = currentKeyword) => {
    try {
      const res = await axios.get(`/review/search`, {
        params: {
          keyword,
          cursorId: cursor, // cursorId보다 id가 작은 게시글을 가져옴.
          size, // 가져올 게시글의 개수.
        },
      });
      const { values, hasNext: newHasNext } = res.data;
      if (values.length === 0 && keyword === searchContent && !initialSearchDone) {
        // If no results and it's the original search, fetch recommended keyword
        const recommendRes = await axios.get(`/hashtag/rank`);
        const recommendedKeywords = recommendRes.data.slice(0, 15); // 상위 15개의 추천 검색어 사용
        const randomIndex = Math.floor(Math.random() * recommendedKeywords.length);
        const recommendedKeyword = recommendedKeywords[randomIndex].name;
        setCurrentKeyword(recommendedKeyword);
        setInitialSearchDone(true); // 초기 검색 완료로 설정
        fetchPostData(cursorId, size, recommendedKeyword);
      } else {
        setQueryPosts((prevPosts) => (cursor === 0 ? values : [...prevPosts, ...values]));
        setHasNext(newHasNext);
      }
    } catch (error) {
      console.error('Error fetching post data:', error);
    }
  };

  useEffect(() => {
    const initializeData = async () => {
      if (!searchContent) {
        const recommendRes = await axios.get(`/hashtag/rank`);
        const recommendedKeywords = recommendRes.data.slice(0, 15); // 상위 15개의 추천 검색어 사용
        const randomIndex = Math.floor(Math.random() * recommendedKeywords.length);
        const recommendedKeyword = recommendedKeywords[randomIndex].name;
        setCurrentKeyword(recommendedKeyword);
        setInitialSearchDone(true); // 초기 검색 완료로 설정
        await fetchPostData(cursorId, 24, recommendedKeyword);
      } else {
        await fetchMaxReviewId();
        setQueryPosts([]);
        setHasNext(true);
        setCurrentKeyword(searchContent);
        setInitialSearchDone(false); // 초기 검색 완료 상태 리셋
        fetchPostData(cursorId);
      }
    };
    initializeData();
  }, [searchContent]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasNext) {
          fetchPostData(cursorId, 8); // 추가로 가져오는 데이터
        }
      },
      { threshold: 1 },
    );

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [cursorId, hasNext]);

  // 화면 맨 위로 이동하는 함수
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // 부드러운 스크롤
    });
  };

  return (
    <Wrapper>
      <QuerySection>
        <PostFilter />

        <QueryContent>
          <QueryHeader>QUERY VIEW</QueryHeader>
          {initialSearchDone && (
            <NotFound>
              <EyesIconBox>
                <EyesSvg />
              </EyesIconBox>
              <NoResults>
                <ColorSpan style={{ color: '#9D1B23' }}>{`"${searchContent}"`}</ColorSpan>
                에 대한 검색 결과를 찾지 못했습니다.
                <br />
                {`추천 검색어 `}
                <ColorSpan style={{ color: '#0D3F39' }}>{`"${currentKeyword}"`}</ColorSpan>에 대한 검색 결과입니다.
              </NoResults>
            </NotFound>
          )}
          <GalleryContent>
            {queryPosts && queryPosts.map((post) => <ReviewPostCard key={post.id} post={post} />)}
          </GalleryContent>
          <div ref={loader} style={{ height: '15vh', margin: '10px' }} />
          <ButtonBox onClick={scrollToTop}>
            <UpIcon icon={faChevronUp} />
          </ButtonBox>
        </QueryContent>
      </QuerySection>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
`;
const QuerySection = styled.section`
  width: 100%;
`;
const QueryContent = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const QueryHeader = styled.h3`
  width: 100%;
  margin-top: 2rem;
  font-family: 'Shrikhand';
  font-style: italic;
  font-weight: 400;
  font-size: 36px;
  line-height: 52px;
  color: #0e5649;
  text-align: start;
`;
const NotFound = styled.div`
  border: 3px solid #dcdcdc;
  border-radius: 30px;
  margin: 0 auto;
  margin-top: 2rem;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const EyesIconBox = styled.div`
  width: 20%;
  padding: 4rem;
`;
const EyesSvg = styled(Eyes)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const NoResults = styled.p`
  font-family: 'ABeeZee';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #8c8c8c;
`;
const ColorSpan = styled.span`
  font-family: 'ABeeZee';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #8c8c8c;
`;

const GalleryContent = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4개의 열을 가지도록 설정 */
  column-gap: 1.5rem;
  row-gap: 2.5rem;
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
