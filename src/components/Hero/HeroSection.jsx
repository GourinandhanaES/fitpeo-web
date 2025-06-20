import React, { useState, useEffect } from 'react';
import './HeroSection.scss';
import { motion, AnimatePresence } from 'framer-motion';

const letterVariants = {
  hidden: { opacity: 0, y: 50},
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  }),
};

const lineVariants = {
  hidden: { opacity: 0, y: 50},
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const HeroSection = ({ country = 'UK' }) => {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLogo(false);
    }, 1500); 

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="hero">
      <div className="hero__left">
        <AnimatePresence>
          {showLogo && (
            <motion.div
              className="hero__heading1"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {['D', '!'].map((char, index) => (
                <motion.h1
                  key={char}
                  custom={index}
                  variants={letterVariants}
                  className="hero__letter"
                >
                  {char}
                </motion.h1>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {!showLogo && (
            <motion.div
              className="hero__heading2"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {['DESIGN', 'DECLARES', country.toUpperCase()].map((line, index) => (
                <motion.h1
                  key={index}
                  variants={lineVariants}
                  className={line === country.toUpperCase() ? 'highlight' : ''}
                >
                  {line}
                </motion.h1>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.div
        className="hero__right"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8, ease: 'easeOut' }}
      >
        <p>
          Design Declares is a growing group of designers, design studios,
          agencies and institutions here to declare a climate and ecological
          emergency. As part of the global declaration movement, we commit to
          harnessing the tools of our industry to reimagine, rebuild and heal
          our world.
        </p>
      </motion.div>

    </section>
  );
};

export default HeroSection;
