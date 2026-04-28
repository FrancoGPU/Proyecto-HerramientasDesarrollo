import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navigation and home hero', () => {
  render(<App />);
  expect(screen.getAllByRole('link', { name: /contacto/i }).length).toBeGreaterThan(0);
  expect(screen.getByRole('heading', { name: /alquila tu auto de lujo/i })).toBeInTheDocument();
});
