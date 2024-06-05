import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import { useInfiniteQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import LatestGalleryUI from './LatestGallery.presenter';

const accessToken = localStorage.getItem('accessToken');

const fetchPosts = async ({ pageParam = 0 }) => {
  try {
    const response = await axios.get(`/profile/my`, {
      headers: {
        access: `${accessToken}`,
      },
      params: { cursorId: pageParam },
    });
    console.log('성공');
    return response.data.values;
  } catch (error) {
    console.log('문제', error);
    return null;
  }
};

const transformData = (data) => {
  return data.values.map((item) => ({
    body: item.body,
    price: item.price,
    createTime: item.createTime,
    lastModifiedTime: item.lastModifiedTime,
    memberId: item.memberId,
    photos: item.photos,
    isMyPost: item.isMyPost,
    isLikedPost: item.isLikedPost,
    isBookmarked: item.isBookmarked,
    hashTags: item.hashTags,
    reviewType: item.reviewType,
    startPoint: item.startPoint,
    whereBuy: item.whereBuy,
  }));
};

export default function LatestGallery() {
  const {
    data: postData,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery('posts', fetchPosts, {
    getNextPageParam: (lastPage) => (lastPage.hasNext ? lastPage.cursorId : undefined),
    select: (data) => ({
      pages: data.pages.flatMap((page) => transformData(page.values)),
    }),
  });

  const observerRef = useRef();

  const navigate = useNavigate();

  const handlePostClick = (post) => {
    navigate(`/review/post/${post.id}`);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 },
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [fetchNextPage, hasNextPage]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error fetching posts</div>;
  }

  return (
    <>
      <LatestGalleryUI posts={postData.pages} handlePostClick={handlePostClick} />
      <div ref={observerRef} style={{ height: '20px' }} />
    </>
  );
}
