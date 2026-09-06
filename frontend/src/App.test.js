import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navigation and home hero', async () => {
  render(<App />);

  // Navigation elements load synchronously
  expect(screen.getAllByRole('link', { name: /contacto/i }).length).toBeGreaterThan(0);

  // Wait for the async Home component to load
  const heading = await screen.findByRole('heading', { name: /alquila tu auto de lujo/i });
  expect(heading).toBeInTheDocument();
});
