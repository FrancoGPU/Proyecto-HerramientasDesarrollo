import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import { NAV_LINKS } from '../constants/data';

describe('Navbar Component', () => {
  const originalEnv = process.env.NODE_ENV;
  const originalScrollTo = window.scrollTo;

  beforeEach(() => {
    // Mock window.scrollTo
    window.scrollTo = jest.fn();
  });

  afterEach(() => {
    // Restore environment and scrollTo
    process.env.NODE_ENV = originalEnv;
    window.scrollTo = originalScrollTo;
    jest.clearAllMocks();
  });

  const renderNavbar = () => {
    return render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
  };

  test('renders logo correctly', () => {
    renderNavbar();
    const logoElement = screen.getByText(/Álamo/i);
    expect(logoElement).toBeInTheDocument();
  });

  test('renders all navigation links', () => {
    renderNavbar();
    NAV_LINKS.forEach(link => {
      const linkElement = screen.getByText(link.label);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement.closest('a')).toHaveAttribute('href', link.to);
    });
  });

  test('renders CTA button', () => {
    renderNavbar();
    const ctaButton = screen.getByText(/Reservar ahora/i);
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton.closest('a')).toHaveAttribute('href', '/contacto');
  });

  test('calls window.scrollTo when a link is clicked (in non-test environment)', () => {
    // Change environment to trigger scrollTo
    process.env.NODE_ENV = 'development';

    renderNavbar();

    const logoElement = screen.getByText(/Álamo/i);
    fireEvent.click(logoElement);

    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
  });

  test('does not call window.scrollTo when a link is clicked in test environment', () => {
    // Ensure we are in 'test' environment
    process.env.NODE_ENV = 'test';

    renderNavbar();

    const ctaButton = screen.getByText(/Reservar ahora/i);
    fireEvent.click(ctaButton);

    expect(window.scrollTo).not.toHaveBeenCalled();
  });
});
