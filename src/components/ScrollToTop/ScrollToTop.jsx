import React from 'react';
import { motion, useScroll } from 'framer-motion';
import './ScrollToTop.scss';

const ScrollToTop = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="scroll-progress-bar"
      style={{
        scaleX: scrollYProgress,
        top: 0,
        left: 0,
        right: 0,
        originX: 0,
        zIndex: 1000,
      }}
    />
  );
};

export default ScrollToTop;
