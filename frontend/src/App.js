import React from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import './styles/globals.css';
import './App.css';

// Hook para scroll automático en cambios de ruta (versión diferente)
function ScrollToTopOnMount() {
  const location = useLocation();
  
  React.useEffect(() => {
    // Versión alternativa con pequeño delay
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  }, [location.pathname]);
  
  return null;
}

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ScrollToTopOnMount />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
