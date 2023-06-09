import { render, screen, fireEvent, waitFor, getByTestId } from '@testing-library/react';

import { useUser } from '../../context/AuthContext';
import HomePage from '../HomePage';
import App from '../../App';
import FormBox from '../FormBox';


jest.mock('../../context/AuthContext', () => ({
  useUser: jest.fn(),
  UserProvider: jest.fn(({ children }) => children),
}));

jest.mock('../RadarChart', () => {
    const RadarChartMock = () => <div />;
    RadarChartMock.displayName = 'RadarChart';
    return RadarChartMock;
});
  
// Tanya Test 1: user login required to render page with sliders and spidergraph 
describe('Formbox Test 1', () => {
    const user = {
      providerId: 'firebase',
      proactiveRefresh: {},
      reloadUserInfo: {},
      reloadListener: null,
      uid: 'LRI8P6tBCTMO3Bfpi4aRscO5OGx1',
      // Add other properties as needed
    };
    const signIn = jest.fn();
    const signOut = jest.fn();
    test('renders when user logged in', () => {
      useUser.mockReturnValue({ user, signIn, signOut});
      render(
          <HomePage />
      );
  
      expect(screen.queryByText("Professionalism")).not.toBeInTheDocument();
  
      const button = screen.getByRole('button', { name: 'Create Your Playlist' });
      fireEvent.click(button);
  
      expect(screen.queryByText("Professionalism")).toBeInTheDocument();
      expect(signIn).not.toBeCalled();
    })
});

  
  
describe('Formbox Test 2', () => {
    const user = null;
    const signIn = jest.fn();
    const signOut = jest.fn();
    test('does not render when user logged out', () => {
      useUser.mockReturnValue({ user, signIn, signOut});
      render(
        <HomePage />
      );
  
      expect(screen.queryByText("Professionalism")).not.toBeInTheDocument();
  
      const button = screen.getByRole('button', { name: 'Create Your Playlist' });
      fireEvent.click(button);
  
      expect(screen.queryByText("Professionalism")).not.toBeInTheDocument();
      expect(signIn).toBeCalled();
    })
});
  
  