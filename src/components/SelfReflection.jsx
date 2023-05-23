import React, { useState } from 'react';
import { Link, Element, scroller } from 'react-scroll';
import TriangleGraph from './TriangleGraph';
import './styles/HomePage.css';
import FormBox from './FormBox';
import triangle from "./assets/deltatri.png";
import link from "./assets/Link.png";


export default function SelfReflection() {
  
  const [lblue, green, dblue] = ['rgb(76, 171, 226)', 'rgb(16, 149, 106)', 'rgb(9, 103, 164)']

  return (
    <div className = "self-reflection">
      <div className = "description">
        <div>
          <h1 style={{color: lblue}}>People </h1>
          <p>Reflect on your comfort and confidence collaborating in teams, communicating with others, and dealing with emotions (yours and others). Consider taking behavioral, non-cognitive, and personality assessments law firms are increasingly using such as</p>
          <div className = "resource-links blue">
            <h5 style={{color: lblue}}>Resources</h5>
            <span>Refer to these links to gain insights about your people skills</span>
          </div>
        </div>
        
        <div>
          <h1 style={{color: green}}>Process</h1>
          <p>Reflect on your comfort and confidence using technology to organize and enhance your professional  and law school activities. This may include skills such as using advanced features in Microsoft Word, or innovative tools for tracking and organizing research and resources. You may also consider</p>
        </div>
        
        <div>
          <h1 style={{color: dblue}}>Practice</h1>   
          <p>Reflect on your comfort and confidence using the traditional skills related to “thinking like a lawyer.” These skills are most often assessed in first year law school courses and upper level doctrinal courses. </p>     
        </div>
      </div>
    </div>
    
        
        
  );
};

