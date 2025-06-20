import React, { useState } from 'react';
import '../styles/main.scss';
import { motion } from 'framer-motion';
import { latestNews } from '../data/latestData';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import LogoImg from "../assets/images/Logo.png";
import Menu from '../components/Menu/Menu';
import Footer from '../components/Footer/Footer';
import { Link } from 'react-router-dom';

const categories = ["All", "Events", "Case Studies", "Updates", "Perspective"];
const chapters = ["All", "D! UK", "D! Ireland", "D! Australia"];

const LatestPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedChapter, setSelectedChapter] = useState('All');

  const filterNews = latestNews.filter((item) => {
    const matchCategory = selectedCategory === 'All' || item.tags.includes(selectedCategory);
    const matchChapter = selectedChapter === 'All' || item.tags.includes(selectedChapter);
    return matchCategory && matchChapter;
  });

  return (
    <div>
    <div id='LatestPage' className="latestpage" style={{ position: 'relative' }}>
     <ScrollToTop/>
     <Menu/>
      <div className="latestpage__container">
        {/* Left Side */}
        <div className="latestpage__left">
            <div>
              <img src={LogoImg} alt="Logo" style={{ marginTop: '-4rem' , marginLeft: '-2rem'}} />
            </div>
         <div className="sticky-heading">
            <h2>Categories</h2>
            <div className="filter-buttons">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={selectedCategory === cat ? 'active' : ''}
                >
                  {cat}
                </button>
              ))}
            </div>

            <h2>View by Chapter</h2>
            <div className="filter-buttons">
              {chapters.map((chap) => (
                <button
                  key={chap}
                  onClick={() => setSelectedChapter(chap)}
                  className={selectedChapter === chap ? 'active' : ''}
                >
                  {chap}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side */}
        <motion.div
          className="latestpage__right"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {filterNews.map((item) => (
            <Link to={`/latest-study/${item.id}`} key={item.id} className="latestpage__card">
              <div className="card__img-wrapper">
                <img src={item.image} alt={item.title} className="card__img" />
              </div>
              <div className="card__content">
                <div className="card__tags">
                  {item.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                  <span className="date">{item.date}</span>
                </div>
                <h3 className="card__title">{item.title}</h3>
                <p className="card__summary">{item.summary}</p>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default LatestPage;
