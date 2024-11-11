import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import axios from '../../apis/axios';
import { ReactComponent as Eyes } from '../../assets/eyes.svg';
import PostFilter from '../../components/PostFilter/PostFilter.container';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import { useScrollToTop } from '../../hooks/useScrollToTop';
import ReviewPostCard from '../Review/components/Card/ReviewPostCard/ReviewPostCard.container';

const fetchQueryData = async (cursorId, size, keyword) => {
  const res = await axios.get(`/review/search`, {
    params: { cursorId, size, keyword },
  });
  const { values, hasNext } = res.data;
  const nextPageId = values?.[values.length - 1]?.reviewId;

  return { values, nextPageId, hasNext };
};

export default function QueryPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const searchContent = params.get('searchContent') || ''; // URL에서 searchContent 값을 추출
  const [currentKeyword, setCurrentKeyword] = useState(searchContent);
  const [initialSearchDone, setInitialSearchDone] = useState(false); // 초기 검색 완료 상태
  const { rawData, loaderRef } = useInfiniteScroll({
    fetchFunction: (cursorId, size) => fetchQueryData(cursorId, size, currentKeyword),
    initialSize: 24,
    additionalSize: 8,
  });
  const [queryPosts, setQueryPosts] = useState([]);
  const scrollToTop = useScrollToTop();

  // 검색어가 변경될 때마다 초기화 로직 실행
  useEffect(() => {
    const initializeData = async () => {
      if (!searchContent) {
        // 추천 키워드 로직
        const recommendRes = await axios.get(`/hashtag/rank`);
        const recommendedKeywords = recommendRes.data.slice(0, 15);
        const randomKeyword = recommendedKeywords[Math.floor(Math.random() * recommendedKeywords.length)].name;
        setCurrentKeyword(randomKeyword);
        setInitialSearchDone(true);
      } else {
        setQueryPosts([]); // 기존 검색 결과 초기화
        setInitialSearchDone(false); // 초기 검색 상태 리셋
        setCurrentKeyword(searchContent);
      }
    };
    initializeData();
  }, [searchContent]);

  // rawData가 변경될 때마다 queryPosts를 업데이트
  useEffect(() => {
    if (rawData.length === 0 && currentKeyword === searchContent && !initialSearchDone) {
      // 검색 결과가 없을 경우, 추천 키워드를 설정
      const fetchRecommendedKeyword = async () => {
        const recommendRes = await axios.get(`/hashtag/rank`);
        const recommendedKeywords = recommendRes.data.slice(0, 15);
        const randomKeyword = recommendedKeywords[Math.floor(Math.random() * recommendedKeywords.length)].name;
        setCurrentKeyword(randomKeyword);
        setInitialSearchDone(true);
      };
      fetchRecommendedKeyword();
    } else {
      // 검색 결과가 있으면 queryPosts에 추가
      setQueryPosts((prevPosts) => [...prevPosts, ...rawData]);
    }
  }, [rawData, currentKeyword, initialSearchDone, searchContent]);

  /*
  const [cursorId, setCursorId] = useState(0);
  const [hasNext, setHasNext] = useState(true);
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
        // 추천 키워드 로직: 초기 검색에서 결과가 없는 경우
        const recommendRes = await axios.get(`/hashtag/rank`);
        const recommendedKeywords = recommendRes.data.slice(0, 15); // 상위 15개의 추천 검색어 사용
        const randomIndex = Math.floor(Math.random() * recommendedKeywords.length);
        const recommendedKeyword = recommendedKeywords[randomIndex].name;
        setCurrentKeyword(recommendedKeyword); // 추천 키워드로 업데이트
        setInitialSearchDone(true); // 초기 검색 완료로 설정
        fetchPostData(cursorId, size, recommendedKeyword); // 추천 키워드로 재검색
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
  */

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
          <>
            <GalleryContent>
              {queryPosts && queryPosts.map((post) => <ReviewPostCard key={post.id} post={post} />)}
            </GalleryContent>
            <div ref={loaderRef} style={{ height: '15vh', margin: '10px' }} />
          </>
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
