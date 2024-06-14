import React, { useEffect, useRef, useState } from 'react';
import axios from '../../../../../../apis/axios';
import LatestGalleryUI from './LatestGallery.presenter';

export default function LatestGallery() {
  const [latestPosts, setLatestPosts] = useState([]);
  const [cursorId, setCursorId] = useState(0);
  const [hasNext, setHasNext] = useState(true);
  const loader = useRef(null);

  const fetchAllReviews = async () => {
    try {
      const res = await axios.get('/review');
      const allReviews = res.data;
      if (allReviews.length > 0) {
        const lastReviewId = allReviews[allReviews.length - 1].reviewId;
        setCursorId(lastReviewId);
        console.log(`last: ${lastReviewId}, cursor: ${cursorId}`);
      }
    } catch (error) {
      console.error('Error fetching all reviews:', error);
    }
  };

  const fetchPostData = async (cursor, size = 6) => {
    try {
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
    if (cursorId !== 0) fetchPostData(cursorId);
  }, [cursorId]);

  useEffect(() => {
    if (cursorId === 0) return; // cursorId가 설정되지 않은 경우 observer를 설정하지 않음

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

    // eslint-disable-next-line consistent-return
    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [cursorId, hasNext]);

  return <LatestGalleryUI latestPosts={latestPosts} loader={loader} />;
}
