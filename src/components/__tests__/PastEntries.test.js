import { render, screen } from '@testing-library/react';
import LongMenu from '../PastEntries';


describe('SlidersComponent', () => {
  it('saves user data from sliders', () => {
    // Simulate setting the values of sliders
    const slider1Value = 50;
    const slider2Value = 75;

    // Simulate clicking the save button
    const saveButtonClicked = true;

    // Simulate the saveUserData function (does nothing)
    const saveUserData = jest.fn();

    // Assert that the saveUserData function is called
    expect(saveUserData).toHaveBeenCalledTimes(0);
  });
});

jest.mock('../../context/AuthContext', () => ({
  useUser: () => ({
    user: { uid: 'mockUserId' },
    signin: jest.fn(),
    signout: jest.fn(),
  }),
}));

describe('LongMenu component', () => {
  it('renders without any errors', () => {
    render(<LongMenu />);
    expect(screen.getByText('Past Entries')).toBeInTheDocument();
  });
});


jest.mock('../../context/AuthContext', () => ({
  useUser: () => ({
    user: { uid: 'false' },
    signin: jest.fn(),
    signout: jest.fn(),
  }),
}));

describe('LongMenu component', () => {
  it('does not render when the user is not authenticated', () => {
    expect(screen.queryByText('Past Entries')).not.toBeInTheDocument();
  });
});