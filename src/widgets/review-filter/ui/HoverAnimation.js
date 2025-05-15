import React, { useEffect, useRef } from 'react';
import Lottie from 'react-lottie';
import writeAnimation from '../assets/PostWrite.json';

const HoverAnimation = ({ isHovered }) => {
  const lottieRef = useRef();

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: writeAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  useEffect(() => {
    if (isHovered) {
      lottieRef.current.play();
    } else {
      lottieRef.current.stop();
    }
  }, [isHovered]);

  return <Lottie options={defaultOptions} width="70px" height="100%" isStopped={!isHovered} ref={lottieRef} />;
};
HoverAnimation.displayName = 'HoverAnimation';

export default React.memo(HoverAnimation);
