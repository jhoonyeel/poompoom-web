// import React, { useEffect, useRef, useState } from 'react';
// import RankingProfileCardUI from './RankingProfileCard.presenter';

// const getOrdinal = (n) => {
//   const s = ['th', 'st', 'nd', 'rd'];
//   const v = n % 100;
//   return n + (s[(v - 20) % 10] || s[v] || s[0]);
// };

// export default function RankingProfileCard() {
//   const [cards] = useState(Array.from({ length: 16 }, (_, i) => getOrdinal(i + 1)));
//   const cardsContainerRef = useRef(null);
//   const [rotation, setRotation] = useState(0);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);

//   const handleMouseDown = (e) => {
//     setIsDragging(true);
//     setStartX(e.clientX);
//   };

//   const handleMouseMove = (e) => {
//     if (!isDragging) return;

//     const deltaX = e.clientX - startX;
//     const angle = (deltaX / window.innerWidth) * 180; // Adjust the factor as needed for sensitivity

//     setRotation((prevRotation) => prevRotation + angle);
//     setStartX(e.clientX); // Update startX to current position for smooth dragging
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   useEffect(() => {
//     if (cardsContainerRef.current) {
//       cardsContainerRef.current.style.transform = `rotate(${rotation}deg)`;
//     }
//   }, [rotation]);

//   return (
//     <RankingProfileCardUI
//       cards={cards}
//       handleMouseDown={handleMouseDown}
//       handleMouseMove={handleMouseMove}
//       handleMouseUp={handleMouseUp}
//       ref={cardsContainerRef}
//     />
//   );
// }

import React, { useEffect, useRef, useState } from 'react';
import RankingProfileCardUI from './RankingProfileCard.presenter';

const getOrdinal = (n) => {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

export default function RankingProfileCard() {
  const [cards] = useState(['16th', ...Array.from({ length: 15 }, (_, i) => getOrdinal(i + 1))]);
  const [rotation, setRotation] = useState(-0.5);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Start the automatic rotation
    intervalRef.current = setInterval(() => {
      setRotation((prevRotation) => prevRotation - 0.5); // Adjust the rotation speed as needed, loop over 720 degrees to handle two rounds
    }, 50); // Adjust the interval time as needed (slower speed)

    return () => clearInterval(intervalRef.current); // Cleanup interval on component unmount
  }, []);

  return <RankingProfileCardUI cards={cards} rotation={rotation} />;
}
