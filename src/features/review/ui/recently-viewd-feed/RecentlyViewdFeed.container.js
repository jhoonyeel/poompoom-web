import { useEffect, useState } from 'react';
import { useInfiniteScroll } from '../../../../shared/hooks/useInfiniteScroll';
import axios from '../../../../shared/lib/axios';
import RecentlyViewdFeedUI from './RecentlyViewdFeed.presenter';

const fetchLatestData = async (cursorId, size) => {
  const res = await axios.get(`/profile/view`, {
    params: { cursorId, size, sort: 'desc' },
  });
  const { values, nextPageId, hasNext } = res.data;
  return { values, nextPageId, hasNext };
};

export default function RecentlyViewdFeed() {
  const { rawData, loaderRef } = useInfiniteScroll({
    fetchFunction: fetchLatestData, // 데이터 fetch 함수
    initialSize: 6, // 초기 로드 데이터 개수
    additionalSize: 3,
    initialCursorId: 1,
  });
  const [latestPosts, setLatestPosts] = useState([]); // 가공된 데이터 상태 관리

  useEffect(() => {
    setLatestPosts((prevPosts) => {
      const newPosts = rawData.filter(
        (post) => !prevPosts.some((existingPost) => existingPost.reviewId === post.reviewId),
      );
      return [...prevPosts, ...newPosts];
    });
  }, [rawData]);

  return <RecentlyViewdFeedUI latestPosts={latestPosts} loader={loaderRef} />;
}
