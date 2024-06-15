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
import { ReactComponent as First } from '../../../../../assets/Ranking/Card1.svg';
import { ReactComponent as Tenth } from '../../../../../assets/Ranking/Card10.svg';
import { ReactComponent as Eleventh } from '../../../../../assets/Ranking/Card11.svg';
import { ReactComponent as Twelfth } from '../../../../../assets/Ranking/Card12.svg';
import { ReactComponent as Thirteenth } from '../../../../../assets/Ranking/Card13.svg';
import { ReactComponent as Fourteenth } from '../../../../../assets/Ranking/Card14.svg';
import { ReactComponent as Fifteenth } from '../../../../../assets/Ranking/Card15.svg';
import { ReactComponent as Sixteenth } from '../../../../../assets/Ranking/Card16.svg';
import { ReactComponent as Second } from '../../../../../assets/Ranking/Card2.svg';
import { ReactComponent as Third } from '../../../../../assets/Ranking/Card3.svg';
import { ReactComponent as Fourth } from '../../../../../assets/Ranking/Card4.svg';
import { ReactComponent as Fifth } from '../../../../../assets/Ranking/Card5.svg';
import { ReactComponent as Sixth } from '../../../../../assets/Ranking/Card6.svg';
import { ReactComponent as Seventh } from '../../../../../assets/Ranking/Card7.svg';
import { ReactComponent as Eighth } from '../../../../../assets/Ranking/Card8.svg';
import { ReactComponent as Ninth } from '../../../../../assets/Ranking/Card9.svg';
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

  const ranks = [
    { ordinal: '16th', component: Sixteenth },
    { ordinal: '1st', component: First },
    { ordinal: '2nd', component: Second },
    { ordinal: '3rd', component: Third },
    { ordinal: '4th', component: Fourth },
    { ordinal: '5th', component: Fifth },
    { ordinal: '6th', component: Sixth },
    { ordinal: '7th', component: Seventh },
    { ordinal: '8th', component: Eighth },
    { ordinal: '9th', component: Ninth },
    { ordinal: '10th', component: Tenth },
    { ordinal: '11th', component: Eleventh },
    { ordinal: '12th', component: Twelfth },
    { ordinal: '13th', component: Thirteenth },
    { ordinal: '14th', component: Fourteenth },
    { ordinal: '15th', component: Fifteenth },
  ];

  useEffect(() => {
    // Start the automatic rotation
    intervalRef.current = setInterval(() => {
      setRotation((prevRotation) => prevRotation - 0.5); // Adjust the rotation speed as needed, loop over 720 degrees to handle two rounds
    }, 50); // Adjust the interval time as needed (slower speed)

    return () => clearInterval(intervalRef.current); // Cleanup interval on component unmount
  }, []);

  return <RankingProfileCardUI cards={cards} rotation={rotation} ranks={ranks} />;
}
