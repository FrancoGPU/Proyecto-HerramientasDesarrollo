import React from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import ScrollToTop from './components/ScrollToTop';
import './styles/globals.css';
import './App.css';

// ⚡ Bolt: Code-split non-critical routes to reduce initial bundle size and speed up first paint
const About = React.lazy(() => import('./pages/About/About'));
const Services = React.lazy(() => import('./pages/Services/Services'));
const Contact = React.lazy(() => import('./pages/Contact/Contact'));

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <React.Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center' }}>Cargando...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </React.Suspense>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;