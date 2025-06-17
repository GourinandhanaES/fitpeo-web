// pages/Home.jsx
import React from 'react';
import Header from '../components/Header/Header';
import HeroSection from '../components/Hero/HeroSection';
import Declaration from '../components/Declaration/Declaration';
import Principles from '../components/Principles/Principles';
import JoinSection from '../components/JoinSection/JoinSection';
import Signatories from '../components/Signatories/Signatories';
import Footer from '../components/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import BreakdownSection from '../components/Breakdown/Breakdown';

const Home = () => {
  return (
    <>
      <ScrollToTop />
      <main>
        <HeroSection />
        <BreakdownSection/>
        <Declaration />
        <Principles />
        <JoinSection />
        <Signatories />
      </main>
      <Footer />
    </>
  );
};

export default Home;
