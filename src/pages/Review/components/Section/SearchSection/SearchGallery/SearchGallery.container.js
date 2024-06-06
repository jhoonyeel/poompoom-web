import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import SearchGalleryUI from './SearchGallery.presenter';

export default function SearchGallery() {
  const [searchPosts, setSearchPosts] = useState([]);
  const [cursorId, setCursorId] = useState(9);
  const [hasNext, setHasNext] = useState(true); // 다음 페이지 여부
  const loader = useRef(null);

  const fetchPostData = async (cursor = 9, size = 10) => {
    try {
      const res = await axios.get(`/review`, {
        params: {
          cursorId: cursor,
          size,
        },
      });
      const { values, cursorId: newCursorId, hasNext: newHasNext } = res.data;
      setSearchPosts((prevPosts) => [...prevPosts, ...values]);
      setCursorId(newCursorId);
      setHasNext(newHasNext);
    } catch (error) {
      console.error('Error fetching post data:', error);
    }
  };
  useEffect(() => {
    fetchPostData(9);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasNext) {
          fetchPostData(cursorId, 10);
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

  return <SearchGalleryUI searchPosts={searchPosts.length === 0 ? [1, 2, 3, 4, 5, 6, 7] : searchPosts} />;
}
