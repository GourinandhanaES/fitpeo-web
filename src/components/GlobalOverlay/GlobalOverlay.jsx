// components/GlobalChapterOverlay.js
import React from 'react';
import './GlobalOverlay.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const chapters = [
  'UNITED KINGDOM',
  'IRELAND',
  'BRASIL',
  'AUSTRALIA'
];

const GlobalOverlay = ({ onClose }) => {
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
            <a
              key={index}
              href={`https://designdeclares.${chapter.toLowerCase().replace(/\s/g, '')}.ie`} // sample
              className="chapter-overlay__item"
            >
              {chapter}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlobalOverlay;
