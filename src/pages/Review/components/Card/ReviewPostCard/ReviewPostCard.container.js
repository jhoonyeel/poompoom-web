import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import particle1 from '../../../../../animation/Particle1.json';
import particle2 from '../../../../../animation/Particle2.json';
import particle3 from '../../../../../animation/Particle3.json';
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
  const [isHovered, setIsHovered] = useState(false);
  const [randomParticle, setRandomParticle] = useState(particleOptions[0]);

  const generateRandomParticle = () => {
    const randomIndex = Math.floor(Math.random() * particleOptions.length);
    setRandomParticle(particleOptions[randomIndex]);
  };

  const navigate = useNavigate();
  const handlePostClick = (path) => () => {
    navigate(path);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    generateRandomParticle(); // Set a new random particle on hover
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
      randomParticle={randomParticle}
    />
  );
}
