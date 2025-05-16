import axios from '@shared/lib/axios.js';
import { useEffect, useRef, useState } from 'react';
import RecentViewPanelUI from './RecentViewPanel.presenter.js';

const RecentViewPanel = () => {
  const [latestPosts, setLatestPosts] = useState([]);
  const [cursorId, setCursorId] = useState(0);
  const [hasNext, setHasNext] = useState(true);
  const loader = useRef(null);

  const fetchAllReviews = async () => {
    try {
      console.log('/review API 실행');
      const res = await axios.get('/review');
      const allReviews = res.data;
      if (allReviews.length > 0) {
        const lastReviewId = allReviews[allReviews.length - 1].reviewId;
        setCursorId(lastReviewId);
      }
    } catch (error) {
      console.error('Error fetching all reviews:', error);
    }
  };

  const fetchPostData = async (cursor, size = 9) => {
    try {
      console.log('/profile/view API 실행');
      const res = await axios.get(`/profile/view`, {
        params: {
          cursorId: cursor, // cursorId보다 id가 작은 게시글을 가져옴.
          size, // 가져올 게시글의 개수.
          sort: 'desc',
        },
      });
      const { values, hasNext: newHasNext } = res.data;
      // setLatestPosts((prevPosts) => [...prevPosts, ...values]);
      setLatestPosts((prevPosts) => {
        const newPosts = values.filter(
          (post) => !prevPosts.some((existingPost) => existingPost.reviewId === post.reviewId),
        );
        return [...prevPosts, ...newPosts];
      });
      setHasNext(newHasNext);
    } catch (error) {
      console.error('Error fetching post data:', error);
    }
  };
  useEffect(() => {
    const initialize = async () => {
      // 마지막 reviewId를 cursorId로 설정
      await fetchAllReviews();
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
      <RecentViewPanelUI latestPosts={latestPosts} />
      <div ref={loader} style={{ height: '20px' }} />
    </>
  );
};

export default RecentViewPanel;
