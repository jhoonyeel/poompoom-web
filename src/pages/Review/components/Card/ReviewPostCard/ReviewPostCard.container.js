import { useState } from 'react';
import ReviewPostCardUI from './ReviewPostCard.presenter';

export default function ReviewPostCard({ post, onPostClick }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // post 속성 여러 개로 나누어 보내기
  return (
    <>
      <ReviewPostCardUI
        post={post}
        onPostClick={onPostClick}
        isHovered={isHovered}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
      {/* <Confetti isHovered={isHovered} /> */}
    </>
  );
}
