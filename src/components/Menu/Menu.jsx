import React, { useState, useEffect, useRef } from 'react';
import './Menu.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faXmark, faHome, faInfo, faNewspaper, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import GlobalOverlay from '../GlobalOverlay/GlobalOverlay';
import { useNavigate, useLocation } from 'react-router-dom';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showGlobalOverlay, setShowGlobalOverlay] = useState(false);
  const [atFooter, setAtFooter] = useState(false);
  const menuRef = useRef(null);
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

  // footer hide

  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setAtFooter(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);


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
    <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 0.8, ease: 'easeOut' }}
          >
      <div ref={menuRef} className={`menu__fixed-nav ${atFooter ? 'stuck-to-footer' : ''}${isOpen ? 'hide-on-open' : ''}`} >
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
    </motion.div>
    </>
  );
};

export default Menu;
