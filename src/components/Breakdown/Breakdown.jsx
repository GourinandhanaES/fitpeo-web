import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './BreakdownSection.scss';

const breakdownData = [
  {
    title: 'The Role of Design',
    content: [
      'As designers working within an industry that relies on production and powers global consumption, we must acknowledge that we have had a role in bringing us to where we are now, and that we have an important role in what comes next.',
      'Because designers are makers. We make ideas real. We generate solutions. We build the world – dreaming up new futures and bringing them to life in ways that are beautiful, vital and impossible to resist. It’s not quite magic, but it feels like it.'
    ]
  },
  {
    title: 'Time for Change',
    content: [
      'Design must move from being part of the problem to becoming part of the solution.',
      'We have a responsibility to rethink how we create, consume and shape the world around us.'
    ]
  },
  {
    title: 'Act with Urgency',
    content: [
      'There is no time to wait. The breakdown is here.',
      'Designers must respond with urgency and action – aligning their work with the planet’s needs.'
    ]
  }
];

const BreakdownSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="breakdown">
      <div className="breakdown__container">
        <div className="breakdown__left">
            <div className="breakdown__left sticky-heading">
              <h2>This is Breakdown</h2>
            </div>
        </div>

        <div className="breakdown__right">
          <p className="breakdown__description">
            The science is settled. We are in an emergency of climate and nature. The world is past
            breaking point; the breakdown has begun...
          </p>

          <div className="breakdown__accordions">
            {breakdownData.map((item, index) => (
              <div className={`accordion ${openIndex === index ? 'open' : ''}`} key={index}>
                <div className="accordion__header" onClick={() => toggle(index)}>
                  <h3>{item.title}</h3>
                  <FontAwesomeIcon icon={openIndex === index ? faChevronUp : faChevronDown} className="icon-large"/>
                </div>
                {openIndex === index && (
                  <div className="accordion__content">
                    {item.content.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <button className="intro-button">View our D! Intro Video</button>
        </div>
      </div>
    </section>
  );
};

export default BreakdownSection;
