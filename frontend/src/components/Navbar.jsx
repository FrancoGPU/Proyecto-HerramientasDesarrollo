import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../constants/data';
import { scrollToTop } from '../utils/scroll';
import './Navbar.css';

const Navbar = () => {
  const handleNavClick = () => {
    // Scroll al top inmediatamente cuando se hace click
    scrollToTop();
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
