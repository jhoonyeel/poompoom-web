import React, { useEffect, useRef, useState } from 'react';
import axios from '../../../../../../apis/axios';
import SearchGalleryUI from './SearchGallery.presenter';

export default function SearchGallery() {
  const [searchPosts, setSearchPosts] = useState([]);
  const [cursorId, setCursorId] = useState(0);
  const [hasNext, setHasNext] = useState(true);
  const loader = useRef(null);

  const fetchPostData = async (cursor, size = 18) => {
    try {
      const res = await axios.get(`/review`, {
        params: {
          cursorId: cursor, // cursorId보다 id가 작은 게시글을 가져옴.
          size, // 가져올 게시글의 개수.
        },
      });
      const { values, hasNext: newHasNext } = res.data;
      setSearchPosts((prevPosts) => [...prevPosts, ...values]);
      // 마지막 reviewId를 cursorId로 설정
      if (values.length > 0) {
        const lastPostId = values[values.length - 1].reviewId;
        setCursorId(lastPostId);
      }
      setHasNext(newHasNext);
    } catch (error) {
      console.error('Error fetching post data:', error);
    }
  };
  useEffect(() => {
    fetchPostData();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasNext) {
          fetchPostData(cursorId, 9); // 추가로 가져오는 데이터
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

  return (
    <>
      <SearchGalleryUI searchPosts={searchPosts} />
      <div ref={loader} style={{ height: '15vh', margin: '10px' }} />
    </>
  );
}
