import React from 'react';
import './Principles.scss';
import { motion } from 'framer-motion';

const principles = [
  "We declare a climate and ecological emergency.",
  "We will speak the truth about the climate and ecological crisis.",
  "We pledge to bring our sector together for climate justice.",
  "We will reimagine design through the lens of climate and ecology.",
  "We will change our practices, recognising that business as usual is not an option.",
  "We will demand systemic change from the institutions we are part of.",
  "We will share our knowledge and tools.",
  "We will evaluate the impact of our work and design with accountability.",
];

const Principles = () => {
  return (
    <section className="principles">
      <motion.div
        className="principles__grid"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.1 }}
        viewport={{ once: true }}
      >
        {principles.map((text, index) => (
          <motion.div
            className="principle-card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <p>{text}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Principles;
