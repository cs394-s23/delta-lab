import { render, screen } from '@testing-library/react';
import TriangleGraph from '../TriangleGraph';

describe('Triangle SVG', () => {
  it('renders App component', () => {
    render(<TriangleGraph />);
  });
});

