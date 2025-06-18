import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LatestPage from './pages/LatestPage';
import About from './pages/About';
import Contact from './pages/Contact';
import Global from './pages/Global';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/latest" element={<LatestPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/global" element={<Global />} />
    </Routes>
  </Router>
);

export default App;
