import { render, screen } from '@testing-library/react';
import TriangleGraph from '../TriangleGraph';

describe('Triangle SVG', () => {
  it('renders App component', () => {
    render(<TriangleGraph />);
  });
});

describe('Triangle SVG', () => {
  it('does not render when data is not provided', () => {
    render(<TriangleGraph />);
    expect(screen.queryByTestId('triangle-svg')).not.toBeInTheDocument();
  });
});