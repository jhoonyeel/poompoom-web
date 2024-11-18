import { useEffect, useRef, useState } from 'react';

export const useOutsideClick = () => {
  const [isVisible, setIsVisible] = useState();
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsVisible(false);
      }
    };

    document.addEventListener('click', handleClick, false);
    // 추후 이벤트 버블링 확인하기
    return () => {
      document.removeEventListener('click', handleClick, false);
    };
  }, [isVisible]);

  return { ref, isVisible, setIsVisible };
};
