import React from 'react';
import AboutDesign from '../components/About/AboutDesign';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import Footer from '../components/Footer/Footer';
import Menu from '../components/Menu/Menu';

const About = () => {
  return (
    <div>
      <ScrollToTop/>
      <Menu/>
      <AboutDesign/>
      <Footer/>
    </div>
  )
}

export default About