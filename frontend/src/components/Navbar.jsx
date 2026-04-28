import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../constants/data';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">Álamo<span> Rent</span></Link>
      <ul className="nav-links">
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <Link to={link.to} className="nav-link">{link.label}</Link>
          </li>
        ))}
      </ul>
      <Link to="/contacto" className="nav-cta">Reservar ahora</Link>
    </nav>
  );
};

export default Navbar;
