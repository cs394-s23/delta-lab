import React, { useState } from 'react';
import { Link, Element, scroller } from 'react-scroll';
import TriangleGraph from './TriangleGraph';
import './styles/HomePage.css';
import FormBox from './FormBox';
import triangle from "./assets/deltatri.png";
import link from "./assets/Link.png";


export default function SelfReflection() {
  


  return (
    <>
      <header>logo and nav</header>
      <div className = "reflect-content">
        <header>
          <h1>Self Reflection</h1>
          <p>Feel free to refer to the following resources as a means of gaining some additional insight about the skills you possess 
            on each side of the Delta Model.
          </p>
        </header>
        <div className="container">
          <div className = "reflect-defs">
            <div className = "reflect-def">
              <p>The People</p>
              <p>Dorem Ipsum blah blah people things. Dorem Ipsum blah blah people things. Dorem Ipsum blah blah people things. Dorem 
                Ipsum blah blah people things. Dorem Ipsum blah blah people things. Dorem Ipsum blah blah people things.
              </p>
            </div>
            <div className = "reflect-def">
              <p>The Process</p>
              <p>Reflect on your comfort and confidence using technology to organize and enhance your professional  and law school 
                activities. This may include skills such as using advanced features in Microsoft Word, or innovative tools for tracking 
                and organizing research and resources.
              </p>
            </div>
            <div className = "reflect-def">
              <p>The Practice</p>
              <p>Reflect on your comfort and confidence using the traditional skills related to “thinking like a lawyer.” These skills
                 are most often assessed in first year law school courses and upper level doctrinal courses. 
              </p>
            </div>
          </div>
          <div className = "ppp-reflect-links">
              <div className = "reflect-links people-links">
                <div className = "reflect-link">
                  <h5>Thine</h5>
                  <p>
                  a personality assessment [that] helps candidates identify their strengths and development areas, and serves as 
                  an introduction to potential employers who—by using the same assessment results—can understand a candidate's potential value 
                  beyond the traditional benchmarks of success
                  </p>
                </div>
              </div>
              <div className = "reflect-links process-links">
                <div className = "reflect-link">
                  <h5>The Procertas Legal Tech Audit</h5>
                  <p>A tool to assess your use of Microsoft Word and Adobe in the legal setting</p>
                </div>
                <div className = "reflect-link">
                  <h5>12 Core Competencies Reference Mode</h5>
                  <p>provided by The Corporate Legal Operations Consortium’s (CLOC)</p>
                </div>
                <div className = "reflect-link">
                  <h5>Pymetrics</h5>
                  <p> a “gamified behavioral [assessment] to evaluate the entire talent lifecycle…[to] collect objective cognitive and 
                    behavioral data that measures everyone’s true potential
                  </p>
                </div>
              </div>
              <div className = "reflect-links practice-links">
                <div className = "reflect-link">
                  <h5>26 Lawyering Effectiveness Factors (Skills) Inventory</h5>
                  <p>provided in the Georgetown Law Career Compass Guide</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

