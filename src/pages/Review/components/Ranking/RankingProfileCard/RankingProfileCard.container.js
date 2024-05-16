import React, { useState, useEffect } from 'react';
import RankingProfileCardUI from './RankingProfileCard.presenter';

function RankingProfileCard() {
  const [cards] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseDown = () => {
    setDragging(true);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  useEffect(() => {
    if (dragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging]);

  const calculateIndex = (cardIndex) => {
    const centerX = window.innerWidth / 2;
    const deltaY = mousePosition.y - window.innerHeight / 2;
    const deltaX = mousePosition.x - centerX;
    const angle = Math.atan2(deltaY, deltaX);
    const degrees = (angle * 180) / Math.PI;

    if (cardIndex < 6) {
      return (degrees / 30 + cardIndex - 2.5) * 30 - 90;
    }
    return 120 * (cardIndex - 5);
  };

  return <RankingProfileCardUI cards={cards} handleMouseDown={handleMouseDown} calculateIndex={calculateIndex} />;
}

export default RankingProfileCard;
