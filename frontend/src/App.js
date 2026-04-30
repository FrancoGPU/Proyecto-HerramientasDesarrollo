import React from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import ScrollToTop from './components/ScrollToTop';
import Contact from './pages/Contact/Contact';
import './styles/globals.css';
import './App.css';

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;