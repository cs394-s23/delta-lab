import { render, screen } from '@testing-library/react';
import LongMenu from '../PastEntries';

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