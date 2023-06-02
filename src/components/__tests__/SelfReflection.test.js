import { render, screen } from '@testing-library/react';
import App from '../SelfReflection';


describe('Self Reflection Tests (easy)', () => {
  test('renders text containing "3 Reflection Areas"', () => {
    render(<App />);
    const TextElements = screen.getAllByText(/3 Reflection Areas/i);
    expect(TextElements.length).toBeGreaterThan(0);
  })
  // test('FAILS: renders text containing "3 Reflection Areas"', () => {
  //   render(<App />);
  //   const TextElements = screen.getAllByText(/4 Reflection Areas/i);
  //   expect(TextElements.length).toBeGreaterThan(0);
  // })
});
