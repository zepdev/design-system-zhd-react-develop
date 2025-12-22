import { useEffect, useState } from 'react';

const getScreenSize = () => {
  if (typeof window === 'undefined') {
    return { width: 0, height: 0 };
  }
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState(getScreenSize);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    // Set initial size on mount (for SSR hydration)
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenSize;
};
