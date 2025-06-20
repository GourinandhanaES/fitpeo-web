import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './Latestdetails.scss';
import LogoImg from '../../assets/images/Logo.png';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';
import { latestNews } from '../../data/latestData';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

const LatestPage = () => {
  const { id } = useParams();
  const latestStudy = latestNews.find(item => item.id === parseInt(id));

  if (!latestStudy) return <p>Not found</p>;

  return (
    <div id='latestdetails'>
    <div className="latestdetails__page">
      <ScrollToTop />   
      <img src={LogoImg} alt="Logo" className="latestdetails__logo" />

      <div className="latestdetails__content-wrapper">
        <div className="latestdetails__left">
          <h1 className="latestdetails__title">{latestStudy.title}</h1>

          <div className="latestdetails__meta">
            <div className="latestdetails__tags-date">
              {latestStudy.tags.map((tag, i) => (
                <span key={i} className="latestdetails__tag">{tag}</span>
              ))}
              <span className="latestdetails__date">{latestStudy.date}</span>
            </div>
            <Link to="#" className="latestdetails__share-btn">Share Article</Link>
          </div>

          <img src={latestStudy.image} alt={latestStudy.title} className="latestdetails__image" />
        </div>
      </div>
      <p className="latestdetails__summary">{latestStudy.summary}</p>
      <div className="latestdetails__text-content">
        {latestStudy.description &&
          latestStudy.description.split('\n\n').map((para, idx) => (
            <p key={idx} className="latestdetails__description">{para}</p>
          ))}
      </div>

      <Menu />
    </div>
    <Footer />
    </div>
  );
};

export default LatestPage;
