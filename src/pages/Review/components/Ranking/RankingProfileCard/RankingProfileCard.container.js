import React, { useEffect, useRef, useState } from 'react';
import RankingProfileCardUI from './RankingProfileCard.presenter';

export default function RankingProfileCard() {
  const [cards] = useState(Array.from({ length: 16 }, (_, i) => i + 1));
  const cardsContainerRef = useRef(null);
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - startX;
    const angle = (deltaX / window.innerWidth) * 180; // Adjust the factor as needed for sensitivity

    setRotation((prevRotation) => prevRotation + angle);
    setStartX(e.clientX); // Update startX to current position for smooth dragging
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (cardsContainerRef.current) {
      cardsContainerRef.current.style.transform = `rotate(${rotation}deg)`;
    }
  }, [rotation]);

  return (
    <RankingProfileCardUI
      cards={cards}
      handleMouseDown={handleMouseDown}
      handleMouseMove={handleMouseMove}
      handleMouseUp={handleMouseUp}
      ref={cardsContainerRef}
    />
  );
}
