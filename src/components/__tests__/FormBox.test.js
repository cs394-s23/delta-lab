import { render, screen } from '@testing-library/react';
import { useUser, UserProvider } from '../../context/AuthContext';
import FormBox from '../FormBox';
import App from '../../App'

describe('App', () => {
  it('renders App component', () => {
    render(<App />);
  });
});


test('renders text containing "Delta"', () => {
  render(<App />);
  const deltaTextElements = screen.getAllByText(/Delta/i);
  expect(deltaTextElements.length).toBeGreaterThan(0);
});

// jest.mock('../../context/AuthContext', () => ({
//   useUser: jest.fn(),
// }));

// test('renders text containing "People"', () => {
//   useUser.mockReturnValue({
//     user: 'mockedUser',
//     signIn: jest.fn(),
//     signOut: jest.fn(),
//   });

//   render(
//     <UserProvider>
//       <FormBox />
//     </UserProvider>
      
//   );
// });