import { useEffect, useRef, useState } from 'react';
import { ReactComponent as First } from '../assets/Card1.svg';
import { ReactComponent as Tenth } from '../assets/Card10.svg';
import { ReactComponent as Eleventh } from '../assets/Card11.svg';
import { ReactComponent as Twelfth } from '../assets/Card12.svg';
import { ReactComponent as Thirteenth } from '../assets/Card13.svg';
import { ReactComponent as Fourteenth } from '../assets/Card14.svg';
import { ReactComponent as Fifteenth } from '../assets/Card15.svg';
import { ReactComponent as Sixteenth } from '../assets/Card16.svg';
import { ReactComponent as Second } from '../assets/Card2.svg';
import { ReactComponent as Third } from '../assets/Card3.svg';
import { ReactComponent as Fourth } from '../assets/Card4.svg';
import { ReactComponent as Fifth } from '../assets/Card5.svg';
import { ReactComponent as Sixth } from '../assets/Card6.svg';
import { ReactComponent as Seventh } from '../assets/Card7.svg';
import { ReactComponent as Eighth } from '../assets/Card8.svg';
import { ReactComponent as Ninth } from '../assets/Card9.svg';
import RankingBoardUI from './RankingBoard.presenter';

const getOrdinal = (n) => {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

export default function RankingBoard() {
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

  return <RankingBoardUI cards={cards} rotation={rotation} ranks={ranks} />;
}
