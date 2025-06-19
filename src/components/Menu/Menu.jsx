import React, { useState, useEffect } from 'react';
import './Menu.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faXmark, faHome, faInfo, faNewspaper, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import GlobalOverlay from '../GlobalOverlay/GlobalOverlay';
import { useNavigate, useLocation } from 'react-router-dom';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showGlobalOverlay, setShowGlobalOverlay] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();


  useEffect(() => {
    if (isOpen || showGlobalOverlay) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, showGlobalOverlay]);

  const handleDeclareNowClick = () => {
    setIsOpen(false);

    if (location.pathname === '/') {
      const el = document.getElementById('declareEmergency');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/#declareEmergency');
    }
  };


  return (
    <>
      <div className="menu__fixed-nav">
        <button className="menu__menu-btn" onClick={() => setIsOpen(!isOpen)}>
          Menu <FontAwesomeIcon icon={isOpen ? faXmark : faPlus} className="icon" />
        </button>
        <button className="menu__declare-btn" onClick={handleDeclareNowClick}>
          Declare Now
        </button>
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
                    <a href="/about" style={{textDecoration:"none"}}><li><FontAwesomeIcon icon={faInfo} /> <span>About</span></li></a>
                    <a href="/latest" style={{textDecoration:"none"}}><li><FontAwesomeIcon icon={faNewspaper} /> <span>Latest</span></li></a>
                    <a href="/contact" style={{textDecoration:"none"}}><li><FontAwesomeIcon icon={faEnvelope} /> <span>Contact</span></li></a>
                    <li onClick={() => {
                      setIsOpen(false);  
                      setShowGlobalOverlay(true);  
                    }}>
                      <FontAwesomeIcon icon={faGlobe} /> <span>Choose Global Chapter</span>
                    </li>
                </ul>

                <button className="menu__declare-btn-inside" onClick={handleDeclareNowClick}>
                 Declare Now
                </button>
                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
      {showGlobalOverlay && (
        <GlobalOverlay onClose={() => setShowGlobalOverlay(false)} />
      )}
    </>
  );
};

export default Menu;
