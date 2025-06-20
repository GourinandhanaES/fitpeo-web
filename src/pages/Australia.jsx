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

const IrelandPage = () => {
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
      <main>
        <HeroSection country="AUSTRALIA" />
        <BreakdownSection />
        <Declaration />
        <Emergency />
        <DeclareEmergency />
        <Latest />
        <Newsletter />
        <Signatories count={284} />
        <Signatories count={98} />
      </main>
      <Footer />
    </>
  );
};

export default IrelandPage;
