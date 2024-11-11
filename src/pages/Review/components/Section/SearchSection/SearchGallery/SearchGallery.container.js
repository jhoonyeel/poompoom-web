import React, { useEffect, useState } from 'react';
import axios from '../../../../../../apis/axios';
import { DEFAULT_POST_STATE } from '../../../../../../constants/ReviewInitialState';
import { useInfiniteScroll } from '../../../../../../hooks/useInfiniteScroll';
import SearchGalleryUI from './SearchGallery.presenter';

const fetchSearchData = async (cursorId, size) => {
  const res = await axios.get(`/review`, {
    params: { cursorId, size },
  });
  const { values, hasNext } = res.data;
  const nextPageId = values?.[values.length - 1]?.reviewId;

  return {
    values,
    nextPageId, // 마지막 reviewId를 cursorId로 설정, 그냥 nextPageId는 필요없는거??
    hasNext,
  };
};

export default function SearchGallery() {
  const { rawData, loaderRef } = useInfiniteScroll({
    fetchFunction: fetchSearchData,
    initialSize: 18,
    additionalSize: 9,
  });
  const [searchPosts, setSearchPosts] = useState([]);

  useEffect(() => {
    setSearchPosts((prevPosts) => [
      ...prevPosts,
      ...rawData.map((post) => ({
        ...DEFAULT_POST_STATE, // 기본 상태로 초기화 후 새로운 값들로 덮어씀
        ...post,
      })),
    ]);
  }, [rawData]);

  return (
    <>
      <SearchGalleryUI searchPosts={searchPosts} />
      <div ref={loaderRef} style={{ height: '15vh', margin: '10px' }} />
    </>
  );
}
