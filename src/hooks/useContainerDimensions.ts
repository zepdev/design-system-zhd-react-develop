import { useEffect, useState } from 'react';
export const useContainerDimensions = (myRef: React.MutableRefObject<HTMLDivElement | null>) => {
  const [dimensions, setDimensions] = useState({ width: 0 });
  useEffect(() => {
    const updateDimensions = () => {
      if (myRef.current) {
        setDimensions({
          width: myRef.current.offsetWidth || 0,
        });
      }
    };
    // Observe the element's size
    const observer = new ResizeObserver(updateDimensions);
    if (myRef.current) {
      observer.observe(myRef.current);
      updateDimensions();
    }
    return () => {
      observer.disconnect();
    };
  }, [myRef]);
  return dimensions;
};
