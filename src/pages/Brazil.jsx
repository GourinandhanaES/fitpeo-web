import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/Hero/HeroSection';
import Declaration from '../components/Declaration/Declaration';
import DeclareEmergency from '../components/DeclareEmergency/DeclareEmergency';
import Signatories from '../components/Signatories/Signatories';
import Footer from '../components/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import BreakdownSection from '../components/Breakdown/Breakdown';
import Emergency from '../components/Emergency/Emergency';
import Newsletter from '../components/Newsletter/Newsletter';
import Latest from '../components/Latest/Latest';
import Menu from '../components/Menu/Menu';

const BrazilPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  }, [location]);

  return (
    <>
      <ScrollToTop />
      <div style={{ position: 'relative' }}>
      <main>
        <HeroSection country="BRAZIL" />
        <BreakdownSection />
        <Declaration />
        <Emergency />
        <DeclareEmergency />
        <Latest />
        <Newsletter />
        <Signatories count={284} subtitle="Signatories and counting in" highlight="D! BRAZIL"  />
        <Signatories count={98} subtitle="Global Supporters" highlight="D! BRAZIL"/>
        <div style={{ height: '150px', backgroundColor:'black', borderBottomRightRadius:"35px", borderBottomLeftRadius:"35px" }}></div>
        <Menu />
      </main>
      </div>
      <Footer />
    </>
  );
};

export default BrazilPage;
