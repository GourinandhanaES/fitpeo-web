import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LatestPage from './pages/LatestPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/latest" element={<LatestPage />} />
    </Routes>
  </Router>
);

export default App;
