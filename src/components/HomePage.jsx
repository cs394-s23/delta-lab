import React, { useState } from 'react';
import { Link, Element, scroller } from 'react-scroll';
import TriangleGraph from './TriangleGraph';
import './styles/HomePage.css';
import FormBox from './FormBox';
import triangle from "./assets/deltatri.png";
import link from "./assets/Link.png";


const HomePage = () => {
  const [buttonClicked, setButtonClicked] = useState(false);

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
      <header>logo and nav</header>
      <main>
        <div className="home-page">
            <div className="home-content">
                <div className="text-content">
                    <h1> The Delta Model </h1> 
                    <p> The Design Your Delta method is grounded in the Delta Model, a progressive and agile competency model for the 21st-century legal professional. The Delta Model consists of three competency areas foundational to the success of today’s legal professional: The Practice, The People, and The Process.</p>
                </div>
                <TriangleGraph/>
            </div>
            
        </div>
        <div className='dyd'>
         <img src={triangle}></img>
         <div className='description'>
         <p>
         The DYD tool is a human-centered design approach that helps you assess your proficiency in the three competency areas of the Delta Model, 
         and provides a personalized playlist of professional development opportunities to align with your goals.
         </p>
         <p>
        The Practice: Reflect on your comfort and confidence using the traditional skills related to “thinking like a lawyer.” 
         <span class="material-symbols-outlined"> link</span>
         </p>
         <p>
        The Process: Reflect on your comfort and confidence using technology.
         <span class="material-symbols-outlined"> link</span>
         </p>
         <p>
        The People: Reflect on your comfort and confidence collaborating in teams and dealing with emotions
         <span class="material-symbols-outlined"> link</span>
         </p>













         <Link
            activeClass='active'
            to='formBox'
            spy={true}
            smooth={true}
            duration={500}
          >
            <button className='create' onClick={handleButtonClick} disabled={buttonClicked}>
              Create Your Playlist
            </button>
          </Link>

         </div>

         




        </div>
        {buttonClicked && (
          <Element name='formBox' className='formBox'>
            <FormBox />
          </Element>
        )}
      </main>
    </>
  );
};

export default HomePage;
