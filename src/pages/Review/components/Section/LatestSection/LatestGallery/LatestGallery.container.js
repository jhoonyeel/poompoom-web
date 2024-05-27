import React, { useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import LatestGalleryUI from './LatestGallery.presenter';
import useModal from '../../../../../../hooks/useModal';

const fetchPosts = async () => {
  const response = await axios.get(`http://ec2-3-37-97-52.ap-northeast-2.compute.amazonaws.com/review`);
  return response.data.values;
};

const transformData = (data) => {
  return data.map((item) => ({
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
  }));
};

export default function LatestGallery() {
  const {
    data: posts,
    error,
    isLoading,
  } = useQuery('posts', fetchPosts, {
    select: transformData,
  });

  const [selectedPost, setSelectedPost] = useState(null);
  const { isOpen: isModalOpen, openModal, closeModal } = useModal();

  const handlePostClick = (post) => {
    setSelectedPost(post);
    openModal();
  };

  const handleConfirmPost = (post) => {
    console.log('포스트 확인:', post.title);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error fetching posts</div>;
  }

  return (
    <LatestGalleryUI
      posts={posts}
      selectedPost={selectedPost}
      handlePostClick={handlePostClick}
      handleConfirmPost={handleConfirmPost}
      isModalOpen={isModalOpen}
      closeModal={closeModal}
    />
  );
}
