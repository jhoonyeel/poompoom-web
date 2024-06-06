import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReviewPostCardUI from './ReviewPostCard.presenter';

export default function ReviewPostCard({ post }) {
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate();
  const handlePostClick = (p) => {
    navigate(`/review/${p.id}`);
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <ReviewPostCardUI
      post={post}
      handlePostClick={handlePostClick}
      isHovered={isHovered}
      handleMouseEnter={handleMouseEnter}
      handleMouseLeave={handleMouseLeave}
    />
  );
}
