import { useEffect, useRef, useState } from 'react';
import axios from '../../../../../../apis/axios';
import SubGalleryUI from './SubGallery.presenter';

export default function SubGallery() {
  const [subPosts, setSubPosts] = useState([]);
  const [cursorId, setCursorId] = useState(1);
  const [hasNext, setHasNext] = useState(true);
  const loader = useRef(null);

  const fetchPostData = async (currentCursor = 1) => {
    try {
      console.log(`cursorId: ${cursorId}, currentCursor: ${currentCursor}`);
      const res = await axios.get(`/review/subscribe`, {
        params: {
          cursorId: currentCursor,
        },
      });
      const { values, hasNext: newHasNext, nextPageId } = res.data;
      setSubPosts((prevPosts) => [...prevPosts, ...values]);
      // Update cursorId to nextPageId if it exists, else keep it as is
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

  return <SubGalleryUI subPosts={subPosts} loader={loader} />;
}
