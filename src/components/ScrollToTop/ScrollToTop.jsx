import React, { useEffect, useState } from 'react';
import './ScrollToTop.scss';

const ScrollToTop = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  const updateScrollProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollWidth(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div
      className="scroll-progress-bar"
      style={{ width: `${scrollWidth}%` }}
    ></div>
  );
};

export default ScrollToTop;
