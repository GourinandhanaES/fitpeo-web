import React, { useEffect, useRef, useState } from 'react';
import signatories from '../../data/signatories';
import './Signatories.scss';
import CountUp from 'react-countup';

const SignatoriesSection = ({ count, subtitle, highlight }) => {
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
      <h2 className="signatories-title"> #{' '} {isVisible && (
          <CountUp end={count} duration={2.5} separator="," />
        )}
      </h2>
      <h3 className="signatories-subtitle">
        {subtitle} <span className="highlight">{highlight}</span>
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
