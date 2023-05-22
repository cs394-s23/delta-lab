import React, { useState } from 'react';
import { Link, Element, scroller } from 'react-scroll';
import TriangleGraph from './TriangleGraph';
import './styles/HomePage.css';
import FormBox from './FormBox';
import triangle from "./assets/deltatri.png";
import link from "./assets/Link.png";
import SelfReflection from "./SelfReflection"
import {useUser} from '../context/AuthContext';



const HomePage = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const {user, signin} = useUser();

  // Function to handle button click
  const handleButtonClick = () => {
    setButtonClicked(true);
    setTimeout(scrollToFormBox, 200);
  };
  const scrollToFormBox = () => {
    scroller.scrollTo('formBox', {
      smooth: true,
      duration: 500,
    });
  };


  return (
    <>
      {/* <header> logo</header> */}
      <main>
<<<<<<< HEAD
        <div className='container'>
          <div className='content'>
=======
        <button onClick={signin}> Sign In </button>
        <div className='dyd'>
          <div className='dyd-content'>
>>>>>>> 794cf3e0f557fe5a6285b9356e92863fe8b982a8
            <div className='description'>
              <h1> Design Your Delta </h1>
              <p>The Design Your Delta (DYD) tool guides individuals in self-reflection and assessment, providing an individualized playlist of resources that aligns with their identified growth areas.</p>
              <p>Established research demonstrates that legal professionals will need a holistic set of skills to be successful in the following categories: The Practice, The Process, and The People.</p>
            </div>
            <img src={triangle} ></img>
          </div>
          <div className= "scroll-reminder">
          <div className='scroll-reminder-tick'>
          <p>scroll</p>
          </div>
        </div>
        </div>
        <div className="container">
          <div className="content">
           
              <TriangleGraph/>
              {/* <span>Delta Model for Entry Level Legal Professionals</span> */}
            
              <div className="description">
                  <h1> The Delta Model </h1> 
                  <p>The DYD tool is grounded in the Delta Model, a holistic visualization of these skills. The midpoint of the triangle can move to increase or decrease the surface area of each Delta Model competency based on the differing depths of skill needed for various organizational roles and stages of careers.</p>
                  <p>The Delta Model for Entry Level Legal Professionals shifts the midpoint slightly to the right to demonstrate that regardless of the organizational role of a newly licensed attorney, the People skills are universally most critical to this success, followed by the Process and the Practice.</p>
              </div>
          </div>
          <div className= "scroll-reminder">
          <div className='scroll-reminder-tick'>
          <p>scroll</p>
          </div>
        </div>

        </div>
        <div className = "container">
          <SelfReflection />
          <Link
            activeClass='active'
            to='formBox'
            spy={true}
            smooth={true}
            duration={500}
          >
            <div className = "center-container" id= "center-container">
              <button className='create' onClick={handleButtonClick} disabled={buttonClicked}>
                Create Your Playlist
              </button>
            </div>
           
          </Link>
        </div>
        {buttonClicked && (
          <Element name='formBox' className='container'>
            <FormBox />
          </Element>
        )}
        
      </main>
    </>
  );
};

export default HomePage;
