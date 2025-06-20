import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LatestPage from './pages/LatestPage';
import About from './pages/About';
import Contact from './pages/Contact';
import Global from './pages/Global';
import Latestdetails from './components/Latestdetails/Latestdetails';
import IrelandPage from './pages/Ireland';
import BrazilPage from './pages/Brazil';
import AustraliaPage from './pages/Australia';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ie" element={<IrelandPage />} />
      <Route path="/br" element={<BrazilPage />} />
      <Route path="/au" element={<AustraliaPage />} />
      <Route path="/latest" element={<LatestPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/global" element={<Global />} />
      <Route path="/latest-study/:id" element={<Latestdetails />} />

    </Routes>
  </Router>
);

export default App;
