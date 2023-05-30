import { render, screen, fireEvent } from '@testing-library/react';
import { UserProvider, useUser } from '../../context/AuthContext';
import HomePage from '../HomePage';
import FormBox from '../FormBox';


jest.mock('../../context/AuthContext', () => ({
  useUser: jest.fn(),
  UserProvider: jest.fn(({ children }) => children),
}));

// jest.mock('../TriangleGraph', () => require('../__mocks__/svg-mock'));

jest.mock('../RadarChart', () => {
  const RadarChartMock = () => <div />;
  RadarChartMock.displayName = 'RadarChart';
  return RadarChartMock;
});

test('renders text containing "foundational"', () => {
  const user = {
    providerId: 'firebase',
    proactiveRefresh: {},
    reloadUserInfo: {},
    reloadListener: null,
    uid: 'LRI8P6tBCTMO3Bfpi4aRscO5OGx1',
    // Add other properties as needed
  };

  useUser.mockReturnValue({ user });

  render(
      <HomePage>
        <FormBox />
      </HomePage>
  );

  const button = screen.getByRole('button', { name: 'Create Your Playlist' });
  fireEvent.click(button)


  const formBoxTextElements = screen.getAllByText(/foundational/i);
  expect(formBoxTextElements.length).toBeGreaterThan(11);
  expect(formBoxTextElements.length).not.toBeGreaterThan(12);
});