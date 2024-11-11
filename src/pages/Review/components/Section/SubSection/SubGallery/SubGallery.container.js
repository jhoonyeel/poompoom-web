import React, { useEffect, useState } from 'react';
import axios from '../../../../../../apis/axios';
import { useInfiniteScroll } from '../../../../../../hooks/useInfiniteScroll';
import SubGalleryUI from './SubGallery.presenter';

const fetchSubData = async (cursorId = 1) => {
  const response = await axios.get(`/review/subscribe`, {
    params: { cursorId },
  });
  const { values, nextPageId, hasNext } = response.data;
  return { values, nextPageId, hasNext };
};

export default function SubGallery() {
  const { rawData, loaderRef } = useInfiniteScroll({
    fetchFunction: fetchSubData, // 데이터를 가져오는 함수
    initialSize: 10, // 한 번에 가져올 데이터 수
    additionalSize: 10, // 초기 커서 값
    initialCursorId: 1,
  });
  const [subPosts, setSubPosts] = useState([]);

  useEffect(() => {
    setSubPosts((prevPosts) => [...prevPosts, ...rawData]);
  }, [rawData]);
  console.log('useEffect', subPosts);

  /*
  const [cursorId, setCursorId] = useState(1);
  const [hasNext, setHasNext] = useState(true);
  const loader = useRef(null);

  const fetchPostData = async (currentCursor = 1) => {
    try {
      const res = await axios.get(`/review/subscribe`, {
        params: {
          cursorId: currentCursor,
        },
      });
      const { values, hasNext: newHasNext, nextPageId } = res.data;
      setSubPosts((prevPosts) => [...prevPosts, ...values]);
      setCursorId(nextPageId || currentCursor);
      setHasNext(newHasNext);
    } catch (error) {
      console.error('Error fetching post data:', error);
    }
  };
  useEffect(() => {
    fetchPostData(cursorId);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasNext) {
          fetchPostData(cursorId);
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
  */

  return <SubGalleryUI subPosts={subPosts} loader={loaderRef} />;
}
