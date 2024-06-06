import { useEffect, useRef, useState } from 'react';
import axios from '../../../../../../apis/axios';
import SubGalleryUI from './SubGallery.presenter';

export default function SubGallery() {
  const [subPosts, setSubPosts] = useState([]);
  const [cursorId, setCursorId] = useState(null);
  const [hasNext, setHasNext] = useState(true);
  const loader = useRef(null);

  const fetchPostData = async (currentCursor = null) => {
    try {
      const page = currentCursor ? currentCursor + 1 : 1; // 최소 페이지 값 1로 설정

      const res = await axios.get(`/review/subscribe`, {
        params: {
          page,
        },
      });
      const { values, hasNext: newHasNext } = res.data;
      setSubPosts((prevPosts) => [...prevPosts, ...values]);
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

  return <SubGalleryUI subPosts={subPosts} loader={loader} />;
}
