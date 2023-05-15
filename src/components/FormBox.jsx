import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import UserInput from './UserInput';
import RadarChart from './RadarChart';
import Playlist from './Playlist';
import './styles/HomePage.css';
import { Link, Element, scroller } from 'react-scroll';

const FormBox = () => {
  const [values, setValues] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const [fourBox1, setFourBox1] = useState(false)
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

  const sliderdict = {}
  for (let i = 0; i < values.length; i++){
    sliderdict[i] = values[i]
  }

  console.log("DICT", sliderdict)

  const sortedValues = Object.entries(sliderdict).sort((a, b) => a[1] - b[1]);

  console.log("SORTED", sortedValues)
  const lowestKeys = sortedValues
    .slice(0,3)
    .map(entry => entry[0])
  console.log("LOWEST", lowestKeys)
  const handleDone = () => {
    setDone(true);
    setTimeout(scrollToFormBox, 200);
  };
  const scrollToFormBox = () => {
    scroller.scrollTo('playlist', {
      smooth: true,
      duration: 500,
    });
  };

  return (
   
    <div className="form-box">
     {done? <Element name='playlist' className='playlist'>
          <Playlist leastValues={lowestKeys}/>
          </Element>
      :
      <div className='sliders'>
      <div className='slider'>
      <div onClick={() => setFourBox1(!fourBox1)} className="ppp blue-box">People </div>
            {fourBox1 ? <div className="skillsList">
            {labels1.map((key, i) => (
              <div className="slide">
                <div>{key}</div>
                {/* {console.log(key)} */}
                <UserInput value={values[i]} onChange={(value) => handleValueChange(value, i)} />
              </div>
            ))}
            </div> : null}
    </div>
    
    <div className='slider'>
      <div onClick={() => setFourBox2(!fourBox2)} className="ppp green-box">Process </div>
      {fourBox2 ? <div className="skillsList">
    {labels2.map((key, i) => (
      <div className="slide">
        <div>{key}</div>
        {/* {console.log(key)} */}
        <UserInput value={values[4+i]} onChange={(value) => handleValueChange(value, 4+i)} />
      </div>
    ))}
    </div> : null}
    </div>
    <div className='slider'>
    <div onClick={() => setFourBox3(!fourBox3)} className="ppp navy-box">Practice </div>
      {fourBox3 ? <div className="skillsList">
    {labels3.map((key, i) => (
      <div className="slide">
        <div>{key}</div>
        {/* {console.log(key)} */}
        <UserInput value={values[8+i]} onChange={(value) => handleValueChange(value, 8+i)} />
      </div>
    ))}
    </div> : null}
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
      }
      <div className='spiderchart'>
         <RadarChart data={values} />
      </div>
   
          

    </div>
    
      

  );
};

export default FormBox;
