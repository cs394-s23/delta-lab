import React, { useState } from 'react';
import { Link, Element, scroller } from 'react-scroll';
import TriangleGraph from './TriangleGraph';
import './styles/HomePage.css';
import FormBox from './FormBox';
import triangle from "./assets/deltatri.png";
import link from "./assets/Link.png";


export default function SelfReflection() {
  
  const [lblue, green, dblue] = ['rgb(76, 171, 226)', 'rgb(16, 149, 106)', 'rgb(9, 103, 164)']
  function toggledropdown(e) {
    console.log("hey")
    const dropdown = e.target.parentNode.querySelector(".links")
    
    dropdown.classList.toggle('show')
    const arrow = e.target.parentNode.querySelector(".material-symbols-outlined")
    arrow.innerHTML = arrow.innerHTML === "keyboard_arrow_down" ? "keyboard_arrow_up" : "keyboard_arrow_down"

  }
  return (
    <div className = "self-reflection">
      <div className = "description">
        <div>
          <h1 style={{color: lblue}}>People </h1>
          <p>Reflect on your comfort and confidence collaborating in teams, communicating with others, and dealing with emotions (yours and others). Consider taking behavioral, non-cognitive, and personality assessments law firms are increasingly using such as</p>
          <div className = "resource-links blue" onClick={toggledropdown}>
            <h5 style={{color: lblue}}>Resources</h5>
            <span className='smalltext'>Refer to these links to gain insights about your People skills</span>
            <span class="material-symbols-outlined"> keyboard_arrow_down</span>
            <div className = "links" >
              <a href = "https://www.pymetrics.ai/assessment">  <p>Pymetrics, a “gamified behavioral [assessment] to evaluate the entire talent lifecycle…[to] collect objective cognitive and behavioral data that measures everyone’s true potential” </p> </a>
              <a href = "https://www.thine.co/">  <p>Thine, “personality assessment [that] helps candidates identify their strengths and development areas, [and help employers] understand a candidate's potential value beyond the traditional benchmarks of success”</p> </a>
            </div>
          </div>
        </div>
        
        <div>
          <h1 style={{color: green}}>Process</h1>
          <p>Reflect on your comfort and confidence using technology to organize and enhance your professional  and law school activities. This may include skills such as using advanced features in Microsoft Word, or innovative tools for tracking and organizing research and resources.
           You may also consider</p>
           <div className = "resource-links green" onClick={toggledropdown}>
            <h5 style={{color: green}}>Resources</h5>
            <span className='smalltext'>Refer to these links to gain insights about your Process skills</span>
            <span class="material-symbols-outlined"> keyboard_arrow_down</span>
            <div className = "links" >
              <a href = "https://www.procertas.com/get-started">  <p> The Procertas Legal Tech Audit - a tool to assess your use of Microsoft Word and Adobe in the legal setting </p> </a>
              <a href = "https://cloc.org/wp-content/uploads/2018/12/CLOC_CCRM_2018.pdf">  <p>The Corporate Legal Operations Consortium’s (CLOC) 12 Core Competencies Reference Model </p> </a>
            </div>
          </div>
        </div>
        
        <div>
          <h1 style={{color: dblue}}>Practice</h1>   
          <p>Reflect on your comfort and confidence using the traditional skills related to “thinking like a lawyer.” 
          These skills are most often assessed in first year law school courses and upper level doctrinal courses. </p>     
            <div className = "resource-links navy" onClick={toggledropdown}> 
            <h5 style={{color: dblue}}>Resources</h5>
            <span className='smalltext'>Refer to these links to gain insights about your people skills</span>
            <span class="material-symbols-outlined"> keyboard_arrow_down</span>
            <div className = "links" >
            <a href = "https://www.law.georgetown.edu/wp-content/uploads/2017/10/Skills-Inventory.pdf">  <p>26 Lawyering Effectiveness Factors (Skills) Inventory provided in the Georgetown Law Career Compass Guide</p> </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
        
        
  );
};

