import { render, screen } from '@testing-library/react';
import App from '../../App';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);
  });
});


test('renders text containing "Delta"', () => {
  render(<App />);
  const deltaTextElements = screen.getAllByText(/Delta/i);
  expect(deltaTextElements.length).toBeGreaterThan(0);
});

