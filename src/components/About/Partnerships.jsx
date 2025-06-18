import React from 'react';
import './Partnerships.scss';
import { motion, AnimatePresence } from 'framer-motion';

const Partnerships = () => {

  return (
    <section className="partnerships">
      <motion.div
        className="partnerships"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="partnerships__container">
        <div className="partnerships__left">
            <div className="partnerships__left sticky-heading">
              <h2>Global Partnerships</h2>
            </div>
        </div>

        <div className="partnerships__right">
          <p className="partnerships__description1">We invite our colleagues from across the design industry to join us in declaring an emergency, and starting to take urgent action.*</p>

          <div className='partnerships__buttons'>
            <a href="https://www.youtube.com/watch?v=XpnOe94eXdM&feature=youtu.be" target='_blank'><button className="intro-button">Get in Touch</button></a>
          </div>
        </div>
      </div>
      </motion.div>
    </section>
  );
};

export default Partnerships;
