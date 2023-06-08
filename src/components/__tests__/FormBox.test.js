import { render, screen, fireEvent, waitFor, getByTestId } from '@testing-library/react';

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

describe('button test', ()=> {
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
  test("button only moves when signed in", () => {
    useUser.mockReturnValue({ user, signIn, signOut});
    render(
      <HomePage/>
    )
    const button = screen.getByRole('button', { name: 'Create Your Playlist' });

    fireEvent.click(button);
    render(<FormBox/>)
    const sliders = screen.getByTestId('formbox');
    expect(sliders).toBeInTheDocument();

  })
})

//coumba sliders display on screen :
describe('sliders test', () => {

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
  it('sliders display on the screen when user is logged in ', () => {
    useUser.mockReturnValue({ user, signIn, signOut});
    render(<FormBox />);
    const sliders = screen.getByTestId('sliders');
    expect(sliders).toBeInTheDocument();


  });
 
});
describe('Sliders test 2', () => {
  const user = null;
  const signIn = jest.fn();
  const signOut = jest.fn();
  test('sliders do not render when user logged out', () => {
    useUser.mockReturnValue({ user, signIn, signOut});
    render(
      <HomePage />
    );

    const formBox = screen.queryByTestId('formbox');
    expect(formBox).not.toBeInTheDocument();
    const sliders = screen.queryByTestId('sliders');
    expect(sliders).not.toBeInTheDocument();

    
  })
});
describe('playlist when sliders are zero', () => {
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

  it('renders the FormBox component with sliders all set to zero', async() => {
    useUser.mockReturnValue({ user, signIn, signOut });
    render(<FormBox />);
    
    // Check if sliders are rendered
    const sliders = screen.getByTestId('sliders');
    expect(sliders).toBeInTheDocument();

    // Check if all sliders have a value of zero
    const sliderInputs = screen.getAllByRole('slider');
    sliderInputs.forEach((sliderInput) => {
      expect(sliderInput.value).toBe('0');
      
    });
    const analyzeButton = screen.getByText('Analyze Your Skills');
    fireEvent.click(analyzeButton);

    // Check if the playlist component is rendered
    await waitFor(() => {
      const playlistComponentAfterDone = screen.getByTestId('playlist');
      expect(playlistComponentAfterDone).toBeInTheDocument();
    });

    // Check the count of playlist items
  });
    

    

    

    







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




