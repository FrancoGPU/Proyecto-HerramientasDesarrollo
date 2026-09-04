import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from './Footer';

describe('Footer Component', () => {
  test('renders footer logo and copyright', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    expect(screen.getByText('Álamo Rent')).toBeInTheDocument();
    expect(screen.getByText('© 2025 Álamo Rent. Todos los derechos reservados.')).toBeInTheDocument();
  });

  test('renders all footer links correctly', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    const contactoLink = screen.getByRole('link', { name: 'Contacto' });
    expect(contactoLink).toBeInTheDocument();
    expect(contactoLink).toHaveAttribute('href', '/contacto');
    expect(contactoLink).not.toHaveAttribute('target');

    const whatsappLink = screen.getByRole('link', { name: 'WhatsApp' });
    expect(whatsappLink).toBeInTheDocument();
    expect(whatsappLink).toHaveAttribute('href', 'https://wa.me/51987654321');
    expect(whatsappLink).toHaveAttribute('target', '_blank');
    expect(whatsappLink).toHaveAttribute('rel', 'noreferrer');

    const correoLink = screen.getByRole('link', { name: 'Correo' });
    expect(correoLink).toBeInTheDocument();
    expect(correoLink).toHaveAttribute('href', 'mailto:hola@alamorent.pe');
    expect(correoLink).toHaveAttribute('target', '_blank');
    expect(correoLink).toHaveAttribute('rel', 'noreferrer');
  });
});
