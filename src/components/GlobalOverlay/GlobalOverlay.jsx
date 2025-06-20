import React from 'react';
import './GlobalOverlay.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import LogoImg from '../../assets/images/Logo.png';

const chapters = [
  { label: 'UNITED KINGDOM', path: '/' },
  { label: 'IRELAND', path: '/ie' },
  { label: 'BRAZIL', path: '/br' },
  { label: 'AUSTRALIA', path: '/au' }
];

const GlobalOverlay = ({ onClose }) => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <div className="chapter-overlay">
      <div className="chapter-overlay__close" onClick={onClose}>
        <FontAwesomeIcon icon={faXmark} />
      </div>
      <div className="chapter-overlay__content">
        <div className="chapter-overlay__left">
          <h2>Select Global Chapter:</h2>
        </div>
        <div className="chapter-overlay__right">
          {chapters.map((chapter, index) => (
            <div
              key={index}
              onClick={() => handleClick(chapter.path)}
              className="chapter-overlay__item"
              style={{ cursor: 'pointer' }}
            >
              {chapter.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlobalOverlay;
