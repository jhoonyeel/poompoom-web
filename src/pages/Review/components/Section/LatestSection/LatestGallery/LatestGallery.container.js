import React, { useEffect, useRef, useState } from 'react';
import axios from '../../../../../../apis/axios';
import LatestGalleryUI from './LatestGallery.presenter';

export default function LatestGallery() {
  const [latestPosts, setLatestPosts] = useState([]);
  const [cursorId, setCursorId] = useState(null);
  const [hasNext, setHasNext] = useState(true);
  const [isFetching, setIsFetching] = useState(false); // 데이터를 fetching 중인지 여부를 저장
  const loader = useRef(null);

  const fetchPostData = async (cursor, size = 6) => {
    if (isFetching) return; // 이미 fetching 중이면 중복 호출 방지
    setIsFetching(true);

    try {
      const res = await axios.get(`/profile/view`, {
        params: {
          cursorId: cursor, // cursorId보다 id가 작은 게시글을 가져옴.
          size, // 가져올 게시글의 개수.
          sort: 'desc',
        },
      });
      const { values, nextPageId, hasNext: newHasNext } = res.data;
      setLatestPosts((prevPosts) => {
        const newPosts = values.filter(
          (post) => !prevPosts.some((existingPost) => existingPost.reviewId === post.reviewId),
        );
        return [...prevPosts, ...newPosts];
      });
      setCursorId(nextPageId);
      setHasNext(newHasNext);
    } catch (error) {
      console.error('Error fetching post data:', error);
    } finally {
      setIsFetching(false);
    }
  };
  useEffect(() => {
    fetchPostData(null, 6); // 컴포넌트 마운트 시 초기 데이터를 가져옴
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasNext) {
          fetchPostData(cursorId, 3); // 추가로 가져오는 데이터
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

  return <LatestGalleryUI latestPosts={latestPosts} loader={loader} />;
}
