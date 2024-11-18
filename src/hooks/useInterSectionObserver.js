import { useEffect, useRef } from 'react';

export default function useIntersectionObserver({ onIntersect, threshold, hasNext, cursorId }) {
  const loader = useRef(null);
  useEffect(() => {
    if (!hasNext) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onIntersect();
        }
      },
      {
        threshold,
      },
    );

    if (loader.current) {
      observer.observe(loader.current);
    }

    // eslint-disable-next-line consistent-return
    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [cursorId, hasNext]);

  return { loader };
}
