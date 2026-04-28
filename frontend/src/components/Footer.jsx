import React from 'react';
import { FOOTER_LINKS } from '../constants/data';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">Álamo Rent</div>
      <ul className="footer-links">
        {FOOTER_LINKS.map((link) => (
          <li key={link.label}>
            <a href={link.href} target={link.external ? '_blank' : undefined} rel={link.external ? 'noreferrer' : undefined}>{link.label}</a>
          </li>
        ))}
      </ul>
      <span className="footer-copy">© 2025 Álamo Rent. Todos los derechos reservados.</span>
    </footer>
  );
};

export default Footer;
