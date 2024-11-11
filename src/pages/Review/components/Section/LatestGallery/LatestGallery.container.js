import React, { useEffect, useState } from 'react';
import axios from '../../../../../apis/axios';
import { useInfiniteScroll } from '../../../../../hooks/useInfiniteScroll';
import LatestGalleryUI from './LatestGallery.presenter';

const fetchLatestData = async (cursorId, size) => {
  const res = await axios.get(`/profile/view`, {
    params: { cursorId, size, sort: 'desc' },
  });
  const { values, nextPageId, hasNext } = res.data;
  return { values, nextPageId, hasNext };
};

export default function LatestGallery() {
  const { rawData, loaderRef } = useInfiniteScroll({
    fetchFunction: fetchLatestData, // 데이터 fetch 함수
    initialSize: 6, // 초기 로드 데이터 개수
    additionalSize: 3,
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

  return <LatestGalleryUI latestPosts={latestPosts} loader={loaderRef} />;
}
