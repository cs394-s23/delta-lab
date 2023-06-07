import { render, screen, fireEvent } from '@testing-library/react';
import { useUser } from '../../context/AuthContext';
import App from '../../App';
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
describe('Formbox Tests (Lev, harder)', () => {
  const user = {
    providerId: 'firebase',
    proactiveRefresh: {},
    reloadUserInfo: {},
    reloadListener: null,
    uid: 'LRI8P6tBCTMO3Bfpi4aRscO5OGx1',
    // Add other properties as needed
  };
  test('renders text containing "foundational"', () => {
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
  })
  // ,
  // test('FAILS: renders text containing "foundational"', () => {
  //   const user = {
  //     providerId: 'firebase',
  //     proactiveRefresh: {},
  //     reloadUserInfo: {},
  //     reloadListener: null,
  //     uid: 'LRI8P6tBCTMO3Bfpi4aRscO5OGx1',
  //     // Add other properties as needed
  //   };

  //   useUser.mockReturnValue({ user });

  //   render(
  //       <HomePage>
  //         <FormBox />
  //       </HomePage>
  //   );

  //   const button = screen.getByRole('button', { name: 'Create Your Playlist' });
  //   fireEvent.click(button)


  //   const formBoxTextElements = screen.getAllByText(/stupid/i);
  //   expect(formBoxTextElements.length).toBeGreaterThan(11);
  //   expect(formBoxTextElements.length).not.toBeGreaterThan(12);
  // })
});

/*
describe('FormBox component', () => {
  const user = null;
  test('requires user login to render', () => {
    useUser.mockReturnValue({ user });
    render(
      <HomePage>
        <FormBox />
      </HomePage>
    );

    const button = screen.getByText('Create Your Playlist');
    print(button);
    fireEvent.click(button);

    expect(screen.queryByText("Professionalism")).not.toBeInTheDocument();
  })
})

*/

describe('Formbox component 1', () => {
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


describe('Formbox component 2', () => {
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


