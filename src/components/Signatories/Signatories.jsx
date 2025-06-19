import React, { useEffect, useRef, useState } from 'react';
import signatories from '../../data/signatories';
import './Signatories.scss';

const SignatoriesSection = ({ count }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`signatories-section ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
      <h2 className="signatories-title">#{count}</h2>
      <h3 className="signatories-subtitle">
        Signatories and counting in <span className="highlight">D! UK</span>
      </h3>

      <div className="signatories-grid">
        {signatories.map(({ name, url }, idx) => (
          <a key={idx} href={url} target="_blank" rel="noopener noreferrer" className="signatory-link">
            {name}
          </a>
        ))}
      </div>
    </section>
  );
};

export default SignatoriesSection;
