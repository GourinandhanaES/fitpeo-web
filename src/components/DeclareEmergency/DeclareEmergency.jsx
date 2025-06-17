import React from 'react';
import './DeclareEmergency.scss';
import { motion, AnimatePresence } from 'framer-motion';
import DeclareEmergencyForm from '../EmergencyForm/EmergencyForm';

const DeclareEmergency = () => {

  return (
    <section id='declareEmergency' className="declareEmergency">
      <motion.div
        className="declareEmergency"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="declareEmergency__container">
        <div className="declareEmergency__left">
            <div className="declareEmergency__left sticky-heading">
              <h2>Declare Emergency Now</h2>
            </div>
        </div>

        <div className="declareEmergency__right">
          <p className="declareEmergency__description">
            Design Declares is open to individuals and institutions working in industrial, digital, graphic, communication and service design. To declare here, you must be a company with an office in the UK employing at least one full-time designer. We also welcome declarations from practising freelance designers who are registered as self-employed in the UK, and global supporters from other countries. All declarations will be named and published on this site.
          </p>

          <div className='declareEmergency__form'>
            <DeclareEmergencyForm/>
          </div>
        </div>
      </div>
      </motion.div>
    </section>
  );
};

export default DeclareEmergency;
