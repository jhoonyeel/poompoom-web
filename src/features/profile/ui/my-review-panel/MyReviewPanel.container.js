import axios from '@shared/lib/axios';
import { useEffect, useRef, useState } from 'react';
import MyReviewPanelUI from './MyReviewPanel.presenter';

const MyReviewPanel = () => {
  const [latestPosts, setLatestPosts] = useState([]);
  const [cursorId, setCursorId] = useState(null);
  const [hasNext, setHasNext] = useState(true);
  const loader = useRef(null);

  const fetchPostData = async (cursor, size = 9) => {
    try {
      console.log('/profile/review API 실행');
      const response = await axios.get(`/profile/review`, {
        params: {
          cursorId: cursor,
          sort: 'desc',
          size,
        },
      });

      const { values, hasNext: newHasNext } = response.data;
      setLatestPosts((prevPosts) => {
        const newPosts = values.filter(
          (post) => !prevPosts.some((existingPost) => existingPost.reviewId === post.reviewId),
        );
        return [...prevPosts, ...newPosts];
      });

      if (values.length > 0) {
        setCursorId(values[values.length - 1].reviewId); // 마지막 reviewId를 cursorId로 설정
      }

      setHasNext(newHasNext);
    } catch (error) {
      console.error('Error fetching post data:', error);
    }
  };

  useEffect(() => {
    const initialize = async () => {
      fetchPostData(cursorId);
    };
    initialize();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasNext) {
          fetchPostData(cursorId, 6); // 추가로 가져오는 데이터
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
      <MyReviewPanelUI latestPosts={latestPosts} />
      <div ref={loader} style={{ height: '20px' }} />
    </>
  );
};

export default MyReviewPanel;
