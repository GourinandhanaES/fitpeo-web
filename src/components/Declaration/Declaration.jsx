import React from 'react';
import './Declaration.scss';
import { motion, AnimatePresence } from 'framer-motion';

const Declaration = () => {

  return (
    <section className="donate">
      <motion.div
        className="donate"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="donate__container">
        <div className="donate__left">
            <div className="donate__left sticky-heading">
              <h2>Donate to D!</h2>
            </div>
        </div>

        <div className="donate__right">
          <p className="donate__description">
            Design Declares is a CIC and would not exist without our dedicated team of co-steers, volunteers, and our passionate community working towards change in the creative industry. Your support can go a long way, and helps us too continue the valuable work needed in tackling the climate crises. If you believe in the work we do, please consider a small donation to help us on our journey for a more equitable and just planet.
          </p>

          <div className='donate__buttons'>
            <a href="https://www.youtube.com/watch?v=XpnOe94eXdM&feature=youtu.be" target='_blank'><button className="intro-button">Donate £10</button></a>
            <a href="https://www.youtube.com/watch?v=XpnOe94eXdM&feature=youtu.be" target='_blank'><button className="intro-button">Donate £20</button></a>
            <a href="https://www.youtube.com/watch?v=XpnOe94eXdM&feature=youtu.be" target='_blank'><button className="intro-button">Donate £30</button></a>
          </div>
        </div>
      </div>
      </motion.div>
    </section>
  );
};

export default Declaration;
