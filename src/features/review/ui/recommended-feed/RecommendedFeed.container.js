import { useInfiniteScroll } from '@shared/hooks/useInfiniteScroll.js';
import axios from '@shared/lib/axios.js';
import { useEffect, useState } from 'react';
import RecommendedFeedUI from './RecommendedFeed.presenter.js';

const fetchSubData = async (cursorId, size) => {
  const response = await axios.get(`/review/subscribe`, {
    params: { cursorId, size },
  });
  const { values, nextPageId, hasNext } = response.data;
  return { values, nextPageId, hasNext };
};

const RecommendedFeed = () => {
  const { rawData, loaderRef } = useInfiniteScroll({
    fetchFunction: fetchSubData, // 데이터를 가져오는 함수
    initialSize: 10, // 한 번에 가져올 데이터 수
    additionalSize: 10, // 초기 커서 값
    initialCursorId: 1,
  });
  const [subPosts, setSubPosts] = useState([]);

  // rawData가 변경될 때 UI 상태를 업데이트
  useEffect(() => {
    setSubPosts(rawData); // rawData를 그대로 사용해 UI에 반영
  }, [rawData]);

  return <RecommendedFeedUI subPosts={subPosts} loader={loaderRef} />;
};

export default RecommendedFeed;
