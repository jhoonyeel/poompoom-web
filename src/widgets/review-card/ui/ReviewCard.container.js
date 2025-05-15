import { useNavigatePath } from '@shared/hooks/useNavigatePath';
import { useState } from 'react';
import particle1 from '../assets/Particle1.json';
import particle2 from '../assets/Particle2.json';
import particle3 from '../assets/Particle3.json';
import ReviewCardUI from './ReviewCard.presenter';

const particleOptions = [
  {
    loop: false,
    autoplay: true,
    animationData: particle1,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  },
  {
    loop: false,
    autoplay: true,
    animationData: particle2,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  },
  {
    loop: false,
    autoplay: true,
    animationData: particle3,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  },
];

const ReviewCard = ({ post }) => {
  const [randomParticle, setRandomParticle] = useState(particleOptions[0]);
  const [isContentHovered, setIsContentHovered] = useState(false);
  const navigatePath = useNavigatePath();

  const generateRandomParticle = () => {
    const randomIndex = Math.floor(Math.random() * particleOptions.length);
    setRandomParticle(particleOptions[randomIndex]);
  };

  const handleContentMouseEnter = () => {
    setIsContentHovered(true);
    generateRandomParticle();
  };
  const handleContentMouseLeave = () => {
    setIsContentHovered(false);
  };

  return (
    <ReviewCardUI
      post={post}
      randomParticle={randomParticle}
      isContentHovered={isContentHovered}
      onMouseEnter={handleContentMouseEnter}
      onMouseLeave={handleContentMouseLeave}
      navigatePath={navigatePath}
    />
  );
};

export default ReviewCard;
