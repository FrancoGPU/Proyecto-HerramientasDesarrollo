import React from 'react';
import { NAV_LINKS } from '../constants/data';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">Álamo<span> Rent</span></div>
      <ul className="nav-links">
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="nav-link">{link.label}</a>
          </li>
        ))}
      </ul>
      <button className="nav-cta">Reservar ahora</button>
    </nav>
  );
};

export default Navbar;
