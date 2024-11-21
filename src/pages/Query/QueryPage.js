import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import axios from '../../apis/axios';
import { ScrollToTopButton } from '../../components/common/ScrollToTopButton';
import PostFilter from '../../components/PostFilter/PostFilter.container';
import ReviewPostCard from '../../components/ReviewPostCard/ReviewPostCard.container';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import { NotFound } from './components/NotFound';

const fetchQueryData = async (cursorId, size, keyword) => {
  const res = await axios.get(`/review/search`, {
    params: { cursorId, size, keyword },
  });
  const { values, nextPageId, hasNext } = res.data;
  console.log('검색 API 실행', keyword);
  return { values, nextPageId, hasNext };
};

export default function QueryPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const searchContent = params.get('searchContent') || ''; // URL에서 검색어 추출
  const [currentKeyword, setCurrentKeyword] = useState(searchContent || '');
  const [noResults, setNoResults] = useState(false); // 검색 결과가 없을 경우 상태
  const { rawData, loaderRef, resetData } = useInfiniteScroll({
    fetchFunction: (cursorId, size) => fetchQueryData(cursorId, size, currentKeyword || ''),
    initialSize: 18,
    additionalSize: 8,
  });
  const [queryPosts, setQueryPosts] = useState([]);

  // 검색어 변경 시 초기화
  useEffect(() => {
    resetData(); // 무한 스크롤 데이터 초기화
    setQueryPosts([]); // 기존 데이터 초기화
    setCurrentKeyword(searchContent);
    setNoResults(false); // 검색 결과 없음을 초기화
  }, [searchContent]);

  // rawData 업데이트에 따른 queryPosts 설정
  useEffect(() => {
    if (rawData.length > 0) {
      setQueryPosts((prevPosts) => {
        const uniquePosts = [...new Map([...prevPosts, ...rawData].map((post) => [post.reviewId, post])).values()]; // 중복 제거
        return uniquePosts;
      });
      setNoResults(false); // 검색 결과가 있으면 결과 없음 상태 초기화
    } else if (rawData.length === 0 && queryPosts.length === 0) {
      // 검색 결과가 없을 경우
      setNoResults(true);
    }
  }, [rawData]);

  useEffect(() => {
    if (noResults && currentKeyword === searchContent) {
      // 검색 결과 없을 때 추천 키워드로 재검색
      const fetchFailSearchTag = async () => {
        try {
          console.log('noresults', noResults, 'currentkeyword', currentKeyword);
          const res = await axios.get('/recommend/failsearchtag');
          const recommendedKeyword = res.data?.tag;
          if (recommendedKeyword) {
            resetData(); // 이전 데이터를 초기화
            setCurrentKeyword(recommendedKeyword); // 추천 키워드로 업데이트
            setNoResults(false); // 검색 결과 없음을 리셋
          }
        } catch (error) {
          console.error('/recommend/failsearchtag 에러:', error);
          setNoResults(true);
        }
      };
      fetchFailSearchTag();
    }
  }, [noResults, currentKeyword, searchContent]);

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
      <PostFilterContainer className="sticky">
        <PostFilter />
      </PostFilterContainer>

      <QuerySection>
        <Title>QUERY VIEW</Title>
        {noResults && (
          <NotFoundContianer>
            <NotFound searchContent={searchContent} currentKeyword={currentKeyword} />
          </NotFoundContianer>
        )}
        <>
          <QueryGallery>
            {queryPosts &&
              queryPosts.map((post, index) => <ReviewPostCard key={`${post.reviewId}-${index}`} post={post} />)}
          </QueryGallery>
          <div ref={loaderRef} style={{ height: '15vh', margin: '10px' }} />
        </>
        <ScrollToTopButton />
      </QuerySection>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
`;
const PostFilterContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  min-width: 1028px;

  position: sticky;
  top: 15vh;
  z-index: 6; /* 헤더와 함께 보이도록 z-index 조정 */
  background-color: transparent;
  transition: top 0.3s ease-in-out; /* 부드러운 이동을 위한 transition 속성 추가 */
`;

const QuerySection = styled.section`
  margin: 0 auto;
  min-width: 1028px;
  width: 80%;
`;
const Title = styled.h3`
  text-align: start;
  font-size: 24px;
  font-family: 'Shrikhand';
  font-style: italic;
  font-weight: 400;
  line-height: 1.4;
  color: #0e5649;
`;
const NotFoundContianer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 26px;
`;
const QueryGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 32px;
  padding-left: 20px;
`;
