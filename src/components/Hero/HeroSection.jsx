import React from 'react';
import './HeroSection.scss';
import { motion } from 'framer-motion';
import Menu from '../Menu/Menu';

const textVariants = {
  hidden: { opacity: 0, y: 50, scaleY: 1, },
  visible: i => ({
    opacity: 1,
    y: 0,
    scaleY: 2, 
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};


const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero__left">
        {['DESIGN', 'DECLARES', 'UK'].map((word, index) => (
         <motion.h1
            key={word}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className={word === 'UK' ? 'highlight' : ''}
            style={{ transform: 'scaleY(1.5)', transformOrigin: 'top' }}
          >
            {word}
         </motion.h1>
        ))}
      </div>

      <div className="hero__right">
        <p>
          Design Declares is a growing group of designers, design studios,
          agencies and institutions here to declare a climate and ecological
          emergency. As part of the global declaration <br /> movement, we commit to
          harnessing the tools of our <br /> industry to reimagine, rebuild and heal
          our world.
        </p>
      </div>

      <Menu/>
    </section>
  );
};

export default HeroSection;
