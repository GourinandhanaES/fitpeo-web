import React from 'react';
import './Latest.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { latestNews } from '../../data/latestData';

const Latest = () => {
  const homepageLatest = latestNews.filter(item => item.id === 2 || item.id === 5);

  return (
    <section className="latest">
      <motion.div
        className="latest"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="latest__container">
        <div className="latest__left">
            <div className="latest__left sticky-heading">
              <h2>Latest</h2>
            </div>
        </div>

        <div className="latest__right">
          {homepageLatest.map((item) => (
              <div className="latest__card" key={item.id}>
                <div className="latest__meta">
                  {item.tags.map((tag, i) => (
                    <span className="latest__tag" key={i}>{tag}</span>
                  ))}
                  <span className="latest__date">{item.date}</span>
                </div>
                <div className="latest__content">
                  <div className="latest__title-col">
                    <h3 className="latest__title">{item.title}</h3>
                  </div>
                  <div className="latest__summary-col">
                    <p className="latest__summary">{item.summary}</p>
                    <a href={item.link} className="latest__link">Read story</a>
                  </div>
                </div>
              </div>
            ))}
            <a href="/latest"><button className="latest__button">See all the latest</button></a>
        </div>
      </div>
      </motion.div>
    </section>
  );
};

export default Latest;
