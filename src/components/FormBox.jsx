import React, { useState, useEffect, useRef } from 'react';
import Sticky from 'react-stickynode';
import { Grid } from '@mui/material';
import UserInput from './UserInput';
import RadarChart from './RadarChart';
import Playlist from './Playlist';
import './styles/HomePage.css';
import { Link, Element, scroller } from 'react-scroll';
import { addTraitsToUsers, getDateTraitsByUser, getDatesByUser } from '../firebase';
import {useUser} from '../context/AuthContext';
import LongMenu from './PastEntries';

const FormBox = () => {
  const [values, setValues] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [pastValues, setPastValues] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

  const {user, signIn, signOut} = useUser();

  //this is for expanding the lists
  const divRef1 = useRef(true);
  const divRef2 = useRef(null);
  const divRef3 = useRef(null);
  const [fourBox1, setFourBox1] = useState(true)
  const [fourBox2, setFourBox2] = useState(false)
  const [fourBox3, setFourBox3] = useState(false)
  const [done , setDone] = useState(false)

  
  const chartStyle = {
    marginTop: '20%',
    marginLeft: '20%'
  };
  const labels1 = [
    "Professionalism",
    "Integrity/Trustworthiness",
    "Treat others with respect/courtesy",
    "Listen Attentively & Respectfully"]
    
  const labels2 = [
    "Respond Promptly",
    "Multitasking",
    "Using & Evaluating Tech Tools",
    "Adapting Work Habits"]

  const labels3 = [
    "Legal Research",
    "Identity & Gather Facts and Legal Issues",
    "Draft Pleadings Motions Briefs",
    "Request/Produce Discovery"
  ]
  const handleValueChange = (newValue, index) => {
    setValues(values.map((value, i) => (i === index ? newValue : value)));
  };
  const handleValueChange2 = (newValue, index) => {
    setValues(values.map((value, i) => (i === index ? newValue : value)));
  };
  const handleValueChange3 = (newValue, index) => {
    setValues(values.map((value, i) => (i === index ? newValue : value)));
  };
  const arr = [0,1,2,3,4,5,6,7,8,9,10,11]
  const ourID = "oZIq8NREUTYVpGxVz1pD"

  const sliderdict = {}
  for (let i = 0; i < values.length; i++){
    sliderdict[i] = values[i]
  }


  const sortedValues = Object.entries(sliderdict).sort((a, b) => a[1] - b[1]);

  const lowestKeys = sortedValues
    .slice(0,3)
    .map(entry => entry[0])

  const handleDone = () => {
    setDone(true);
    setTimeout(scrollToFormBox, 200);
    
    addTraitsToUsers(user.uid, values);
    getDatesByUser(user.uid);
    //getDateTraitsByUser(user.uid, "May 21, 2023");
  };
  const scrollToFormBox = () => {
    scroller.scrollTo('playlist', {
      smooth: true,
      duration: 500,
    });
  };
  const handleClickDiv1 = () => {
    setFourBox1(!fourBox1);
    setFourBox2(false);
    setFourBox3(false);
  };
  const handleClickDiv2 = () => {
    setFourBox2(!fourBox2);
    setFourBox1(false);
    setFourBox3(false);
  };
  const handleClickDiv3 = () => {
    setFourBox3(!fourBox3);
    setFourBox2(false);
    setFourBox1(false);
  };
  const divStyle1 = {height: fourBox1 ? `${divRef1.current.scrollHeight}px` : '0',};
  const divStyle2 = {height: fourBox2 ? `${divRef2.current.scrollHeight}px` : '0',};
  const divStyle3 = {height: fourBox3 ? `${divRef2.current.scrollHeight}px` : '0',};


  return (
   
    <div className="content">
      <div className="side">
      <div className='sliders'>
      <div className='slider'>
        <div onClick={handleClickDiv1} className="box" id="blue">People </div>
          <div className="skillsList" style={divStyle1} ref={divRef1}>
          {labels1.map((key, i) => (
            <div className="slide">
              <div>{key}</div>
              <UserInput value={values[i]} onChange={(value) => handleValueChange(value, i)}/>
            </div>
          ))}
          </div>
    </div>
    
    <div className='slider'>
      <div onClick={handleClickDiv2} className="box" id="green">Process </div>
      <div className="skillsList" style={divStyle2} ref={divRef2}>
    {labels2.map((key, i) => (
      <div className="slide">
        <div>{key}</div>
        <UserInput value={values[4+i]} onChange={(value) => handleValueChange(value, 4+i)} />
      </div>
    ))}
    </div>
    </div>
    <div className='slider'>
    <div onClick={handleClickDiv3} className="box" id="navy">Practice </div>
    <div className="skillsList" style={divStyle3} ref={divRef3}>
      {labels3.map((key, i) => (
        <div className="slide">
          <div>{key}</div>
          <UserInput value={values[8+i]} onChange={(value) => handleValueChange(value, 8+i)} />
        </div>
      ))}
    </div>
    </div>
        <Link
            activeClass='active'
            to='playlist'
            spy={true}
            smooth={true}
            duration={1000}
          >
            <button className='Done' onClick={handleDone} >
              Analyze
            </button>
          </Link>

      </div>
      
      {done && (
        <div className>
          <Element name='playlist' className='playlist'>
              <Playlist leastValues={lowestKeys}/>
          </Element>
        </div>
          )}  
      </div>
      <Sticky activeClass="spiderchart">
        <div className='spiderchart'>
          <RadarChart data={values} pastvalues={pastValues}/>
        </div>
        <div className='past-entries'>
          <LongMenu pastValues={pastValues}  setPastValues={setPastValues}/>
        </div>
      </Sticky>
   
      
    </div>
    
      

  );
};

export default FormBox;
