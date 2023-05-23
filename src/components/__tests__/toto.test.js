import { render, screen } from '@testing-library/react';
import App from './App';

test('renders text containing "Delta"', () => {
  render(<App />);
  const deltaText = screen.getByText(/Delta/i);
  expect(deltaText).toBeInTheDocument();
});


// test("test", ()=>{
//     expect(true).toBe(true);
// })
