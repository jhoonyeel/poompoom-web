import React, { useCallback, useEffect, useState } from 'react';
import axios from '../../../../../apis/axios';
import { DEFAULT_POST_STATE } from '../../../../../constants/ReviewInitialState';
import { useInfiniteScroll } from '../../../../../hooks/useInfiniteScroll';
import SearchGalleryUI from './SearchGallery.presenter';

export default function SearchGallery({ selectedSort }) {
  // fetchSearchData를 useCallback으로 메모이제이션
  const fetchSearchData = useCallback(
    async (cursorId, size) => {
      const endpoint = selectedSort === '추천순' ? `/recommend/review` : `/review`;
      const res = await axios.get(endpoint, {
        params: { cursorId, size },
      });

      const { values, nextPageId, hasNext } = res.data;
      return { values, nextPageId, hasNext };
    },
    [selectedSort], // selectedSort가 변경될 때만 함수가 갱신됩니다.
  );

  const initialCursorId = selectedSort === '추천순' ? 1 : null;
  const { rawData, loaderRef, resetData } = useInfiniteScroll({
    fetchFunction: fetchSearchData,
    initialSize: 18,
    additionalSize: 9,
    initialCursorId,
  });
  const [searchPosts, setSearchPosts] = useState([]);

  // selectedSort가 변경되면 초기화
  useEffect(() => {
    resetData(); // 정렬 옵션 변경 시 데이터 초기화
    setSearchPosts([]); // 기존 UI 초기화
  }, [selectedSort]);

  // rawData를 기반으로 데이터 설정 및 정렬
  useEffect(() => {
    setSearchPosts(() => {
      const newPosts = rawData.map((post) => ({
        ...DEFAULT_POST_STATE,
        ...post,
      }));
      // 인기순 정렬: likeAmount 내림차순
      if (selectedSort === '인기순') {
        return [...newPosts].sort((a, b) => b.likeAmount - a.likeAmount);
      }

      // 추천순, 최신순은 그대로 추가
      return newPosts;
    });
  }, [rawData, selectedSort]);

  return (
    <>
      <SearchGalleryUI searchPosts={searchPosts} />
      <div ref={loaderRef} style={{ height: '15vh', margin: '10px' }} />
    </>
  );
}
