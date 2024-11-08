import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Content from './components/Content/Content';
import Navbar from './components/Navbar/Navbar';
import Product from './components/Page/Product/Product';
import Features from './components/Page/Features';
import About from './components/Page/About/About';
import Footer from './components/Footbar/Footer';
import EsLumut from './components/Page/Food.jsx/Eslumut';
import BaksoAyam from './components/Page/Food.jsx/BaksoAyam';
import KFC from './components/Page/Food.jsx/Kfc';
import Starbucks from './components/Page/Food.jsx/Starbucks';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/product" element={<Product />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/es-lumut" element={<EsLumut />} />
        <Route path="/product/bakso-ayam" element={<BaksoAyam />} />
        <Route path="/product/kfc" element={<KFC />} />
        <Route path="/product/starbucks" element={<Starbucks />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
