import { render, screen} from '@testing-library/react';

import { useUser } from '../../context/AuthContext';
import HomePage from '../HomePage';
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

// Tanya Test 2: spidergraph displays on all screen-widths , browsers and devices

describe('Spiderchart Test 1', () => {
    beforeEach(() => {
      window.resizeTo = function(width, height) {
        Object.assign(this, {
          innerWidth: width,
          innerHeight: height,
          outerWidth: width,
          outerHeight: height,
        }).dispatchEvent(new this.Event('resize'));
      };
    });
  
    afterEach(() => {
      delete window.resizeTo;
    });
  
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
    it('remains visible when screen size changes', () => {
      useUser.mockReturnValue({ user, signIn, signOut});
      render(<FormBox />);
      const spiderchart = screen.getByTestId('spiderchart');
  
      expect(window.innerWidth).toBe(1024); // Initial width
      expect(window.innerHeight).toBe(768); // Initial height
      expect(spiderchart).toBeInTheDocument();
  
      window.resizeTo(800, 600); // reduce viewport dimensions
  
      expect(window.innerWidth).toBe(800); 
      expect(window.innerHeight).toBe(600); 
      expect(spiderchart).toBeInTheDocument();
  
      window.resizeTo(375, 812); // set mobile viewport dimenstions
  
      expect(window.innerWidth).toBe(375); 
      expect(window.innerHeight).toBe(812);
      expect(spiderchart).toBeInTheDocument();
    });
  });
  
  
  
  
  