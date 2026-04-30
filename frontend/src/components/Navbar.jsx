import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants/data';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  const handleNavClick = () => {
    // Scroll al top cuando se hace click en un link
    if (process.env.NODE_ENV !== 'test') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo" onClick={handleNavClick}>Álamo<span> Rent</span></Link>
      <ul className="nav-links">
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <Link 
              to={link.to} 
              className="nav-link"
              onClick={handleNavClick}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/contacto" className="nav-cta" onClick={handleNavClick}>Reservar ahora</Link>
    </nav>
  );
};

export default Navbar;
