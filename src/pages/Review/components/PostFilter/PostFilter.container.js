import React from 'react';
import { useNavigate } from 'react-router-dom';
import PostFilterUI from './PostFilter.presenter';

export default function PostFilter() {
  const navigate = useNavigate();
  const handleOnClick = (path) => () => {
    navigate(path);
  };
  return <PostFilterUI handleOnClick={handleOnClick} />;
}
