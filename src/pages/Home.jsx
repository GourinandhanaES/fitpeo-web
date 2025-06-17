// pages/Home.jsx
import React from 'react';
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

const Home = () => {
  return (
    <>
      <ScrollToTop />
      <main>
        <HeroSection />
        <BreakdownSection/>
        <Declaration />
        <Emergency />
        <DeclareEmergency />
        <Latest/>
        <Newsletter/>
        <Signatories />
      </main>
      <Footer />
    </>
  );
};

export default Home;
