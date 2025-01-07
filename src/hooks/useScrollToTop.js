export const useScrollToTop = () => {
  const scrollToTop = () => {
    console.log('start', window);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    console.log('end');
  };

  return scrollToTop;
};
