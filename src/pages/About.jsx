import React from 'react';
import AboutDesign from '../components/About/AboutDesign';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import Footer from '../components/Footer/Footer';
import Menu from '../components/Menu/Menu';
import Partnerships from '../components/About/Partnerships';
import Designers from '../components/About/Designers';
import Group from '../components/About/Group';
import '../styles/main.scss';

const About = () => {
  return (
    <div className='aboutt'>
      <ScrollToTop/>
      <div style={{ position: 'relative' }}>
      <AboutDesign/>
      <Partnerships/>
      <Designers/>
      <Group/>
      <Menu/>
      </div>
      <Footer/>
    </div>
  )
}

export default About