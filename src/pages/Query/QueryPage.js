import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import axios from '../../apis/axios';
import PostFilter from '../../components/PostFilter/PostFilter.container';
import ReviewPostCard from '../../components/ReviewPostCard/ReviewPostCard.container';
import { ScrollToTopButton } from '../../components/ScrollToTopButton';
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
  const [noResults, setNoResults] = useState(false); // searchContent를 통한 첫 번째 검색의 결과 존재 유무
  const [isRetrying, setIsRetrying] = useState(false); // 자동 재검색 상태인지 판별
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
    setNoResults(false); // 검색 결과 없음을 초기화
    setIsRetrying(false); // 재검색 상태 초기화
    setCurrentKeyword(searchContent);
  }, [searchContent]);
  console.log('currentKeyword', currentKeyword, 'queryPosts', queryPosts);
  console.log('isRetrying', isRetrying, 'queryPosts', queryPosts.length, 'noresult', noResults);

  // rawData 업데이트에 따른 queryPosts 설정
  useEffect(() => {
    const uniquePosts = [...new Map([...queryPosts, ...rawData].map((post) => [post.reviewId, post])).values()]; // 중복 제거

    // queryPosts 상태 업데이트
    setQueryPosts(uniquePosts);

    console.log('queryPosts: ', queryPosts);
    // noResults 상태 설정
    if (!isRetrying && uniquePosts.length === 0 && rawData.length === 0) {
      setNoResults(true); // 검색 결과 없음
    } else if (uniquePosts.length > 0) {
      console.log('결과 있음');
      setNoResults(false); // 검색 결과 있음
    }
  }, [rawData, isRetrying]);

  const handleRetry = (retryKeyword) => {
    setIsRetrying(true);
    setCurrentKeyword(retryKeyword);
    // 일정 시간 후 상태 리셋
    setTimeout(() => setIsRetrying(false), 1000);
  };

  return (
    <Wrapper>
      <PostFilterContainer>
        <PostFilter />
      </PostFilterContainer>

      <QuerySection>
        <Title>QUERY VIEW</Title>
        {noResults && (
          <NotFoundContianer>
            <NotFound searchContent={searchContent} currentKeyword={currentKeyword} onRetry={handleRetry} />
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
