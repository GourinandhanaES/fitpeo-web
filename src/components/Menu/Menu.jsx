// components/Menu/Menu.js
import React, { useState, useEffect } from 'react';
import './Menu.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faXmark, faHome, faInfo, faNewspaper, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      <div className="menu__fixed-nav">
        <button className="menu__menu-btn" onClick={() => setIsOpen(!isOpen)}>
          Menu <FontAwesomeIcon icon={isOpen ? faXmark : faPlus} className="icon" />
        </button>
        <a href="#declareEmergency">
          <button className="menu__declare-btn">Declare Now</button>
        </a>
      </div>

      <AnimatePresence>
        {isOpen && (
            <motion.div
                className="menu__overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <motion.div
                className="menu__panel"
                animate={{ width: 420, height: 'auto' }}
                exit={{ width: 0, height: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                <div className="menu__header">
                    Menu
                    <FontAwesomeIcon icon={faXmark} className="icon" onClick={() => setIsOpen(false)} />
                </div>

                <ul>
                    <a href="/" style={{textDecoration:"none"}}><li><FontAwesomeIcon icon={faHome} /> <span>Home</span></li></a>
                    <a href="" style={{textDecoration:"none"}}><li><FontAwesomeIcon icon={faInfo} /> <span>About</span></li></a>
                    <a href="/latest" style={{textDecoration:"none"}}><li><FontAwesomeIcon icon={faNewspaper} /> <span>Latest</span></li></a>
                    <a href="" style={{textDecoration:"none"}}><li><FontAwesomeIcon icon={faEnvelope} /> <span>Contact</span></li></a>
                    <a href="" style={{textDecoration:"none"}}><li><FontAwesomeIcon icon={faGlobe} /> <span>Choose Global Chapter</span></li></a>
                </ul>

                <a href="#declareEmergency">
                    <button className="menu__declare-btn-inside">Declare Now</button>
                </a>
                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Menu;
