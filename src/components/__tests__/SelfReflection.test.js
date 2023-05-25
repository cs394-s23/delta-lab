import { render, screen } from '@testing-library/react';
import App from '../SelfReflection';

test('renders text containing "Delta"', () => {
  render(<App />);
  const deltaTextElements = screen.getAllByText(/People/i);
  expect(deltaTextElements.length).toBeGreaterThan(0);
});

