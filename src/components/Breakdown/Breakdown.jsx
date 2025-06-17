import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { motion, AnimatePresence } from 'framer-motion';
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
      'Together with our clients, partners and colleagues across the supply chain, we are daring to reimagine the way we create every product, service, campaign and designed solution we put out into the world.',
      'It means introducing principles of sustainability, circularity and - ultimately - regenerative design into our practice to recapture and repurpose resources and materials.',
      'This means measuring and actively reducing the greenhouse gas emissions and resource use linked to our designs.',
      'And it means acting systemically - seeing the bigger picture and working with others to sharpen design’s incredible capacity to influence and accelerate climate repair and justice.',
    ]
  },
  {
    title: 'Act with Urgency',
    content: [
      'We know all we need to make this a reality. The information, the guidance, the inspiration and solutions are there. What design needs now is action - meaningful steps that can begin to connect what we know to what we do.',
      'This is the most important brief of our lives. Join us as we begin to design a climate-positive future.'
    ]
  }
];

const BreakdownSection = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggle = (index) => {
    setOpenIndexes((prev) =>
    prev.includes(index)
      ? prev.filter((i) => i !== index) : [...prev, index]
  );
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
              <div className={`accordion ${openIndexes.includes(index) ? 'open' : ''}`} key={index}>
                <div className="accordion__header">
                  <h3>{item.title}</h3>
                  <FontAwesomeIcon
                    icon={openIndexes.includes(index) ? faChevronUp : faChevronDown}
                    className="icon-large" onClick={() => toggle(index)}
                  />
                </div>

                <AnimatePresence initial={false}>
                  {openIndexes.includes(index) && (
                    <motion.div
                      className="accordion__content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                    >
                      {item.content.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <a href="https://www.youtube.com/watch?v=XpnOe94eXdM&feature=youtu.be" target='_blank'><button className="intro-button">View our D! Intro Video</button></a>
        </div>
      </div>
    </section>
  );
};

export default BreakdownSection;
