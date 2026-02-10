import { useState, useEffect } from 'react';

const enum WindowSize {
  Small,
  Medium,
  Large,
  XLarge,
  DoubleXLarge,
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState<WindowSize>(WindowSize.Small);
 
  useEffect(() => {
    const handleResize = () => {
      let size = window.innerWidth;
      if (size >= 1536) setWindowSize(WindowSize.DoubleXLarge);
      else if (size >= 1280) setWindowSize(WindowSize.XLarge);
      else if (size >= 1024) setWindowSize(WindowSize.Large);
      else if (size >= 768) setWindowSize(WindowSize.Medium);
      else setWindowSize(WindowSize.Small);
    };

    // Initial check on mount
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}

export { WindowSize, useWindowSize };
