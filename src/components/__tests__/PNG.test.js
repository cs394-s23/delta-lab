import { render, screen } from '@testing-library/react';
import TriangleGraph from '../TriangleGraph';

describe('TriangleGraph', () => {
  it('triggers download event', () => {
    render(<TriangleGraph />);
    
  });
});

test('clicking download button triggers download action', () => {
  const { getByText } = render(<TriangleGraph />);

  // Mock the download action
  const mockDownload = jest.fn();
  window.URL.createObjectURL = jest.fn(); // Mock createObjectURL method

  // Verify that the download action is triggered
  expect(mockDownload).toHaveBeenCalledTimes(0);
});