import React from 'react';
import './Declaration.scss';
import { motion } from 'framer-motion';

const Declaration = () => {
  return (
    <section className="declaration">
      <motion.div
        className="declaration__content"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p>
          As part of the global declaration movement, we commit to harnessing
          the tools of our industry to reimagine, rebuild and heal our world.
          We recognise that design has a critical role to play in bringing
          about transformation, and that we cannot do this alone.
        </p>
      </motion.div>
    </section>
  );
};

export default Declaration;
