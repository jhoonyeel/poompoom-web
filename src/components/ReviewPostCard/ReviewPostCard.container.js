import { useState } from 'react';
import particle1 from '../../animation/Particle1.json';
import particle2 from '../../animation/Particle2.json';
import particle3 from '../../animation/Particle3.json';
import { useNavigatePath } from '../../hooks/useNavigatePath';
import ReviewPostCardUI from './ReviewPostCard.presenter';

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

export default function ReviewPostCard({ post }) {
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
    <ReviewPostCardUI
      post={post}
      randomParticle={randomParticle}
      isContentHovered={isContentHovered}
      onMouseEnter={handleContentMouseEnter}
      onMouseLeave={handleContentMouseLeave}
      navigatePath={navigatePath}
    />
  );
}
