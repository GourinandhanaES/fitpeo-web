import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './Latestdetails.scss'
import LogoImg from "../../assets/images/Logo.png";
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';
import { latestNews } from '../../data/latestData';
import ScrollToTop from '../ScrollToTop/ScrollToTop';



const LatestPage = () => {
  const { id } = useParams();
  const latestStudy = latestNews.find((item) => item.id === parseInt(id));

  return (
    <div>
    <div id='LatestPage' className="latestpage">
     <ScrollToTop/>
     <Menu/>
      <div className="latestpage__container">
        {/* Left Side */}
        <div className="latestpage__left">
            <div>
              <img src={LogoImg} alt="Logo" style={{ marginTop: '-4rem' , marginLeft: '-2rem'}} />
            </div>
         <div className="heading">
            <h1>{latestStudy.title}</h1>
            <div className="content-wrapper">
              {/* Header Section */}
              <div className="header-section">
                <div className="tags-container">
                  <div>
                    {latestStudy.tags.map((tag, i) => (
                    <span className="tag" key={i}>{tag}</span>
                  ))}
                  <span className="date">{latestStudy.date}</span>
                  </div>
                  <button className="share-button">
                    Share Article
                  </button>
                </div>
              </div>

              {/* Hero Image */}
              <img 
                src={latestStudy.image} 
                alt={latestStudy.title} 
                className="hero-image"
              />

              {/* Content Section */}
              <div className="content-section">
                <div className="summary">{latestStudy.summary}</div>
                
                {latestStudy.description && (
                  <div className="description">
                    {/* Check if description has multiple paragraphs */}
                    {latestStudy.description.split('\n\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default LatestPage;
