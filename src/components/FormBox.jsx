import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import UserInput from './UserInput';
import RadarChart from './RadarChart';

const FormBox = () => {
  const [values, setValues] = useState([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]);
  const chartStyle = {
    marginTop: '20%',
    marginLeft: '20%'
  };
  const labels = [
    "Professionalism",
    "Integrity/Trustworthiness",
    "Treat others with respect/courtesy",
    "Listen Attentively & Respectfully",
    "Respond Promptly",
    "Multitasking",
    "Using & Evaluating Tech Tools",
    "Adapting Work Habits",
    "Legal Research",
    "Identity & Gather Facts and Legal Issues",
    "Draft Pleadings Motions Briefs",
    "Request/Produce Discovery",
  ]
  const handleValueChange = (newValue, index) => {
    setValues(values.map((value, i) => (i === index ? newValue : value)));
  };
  const arr = [0,1,2,3,4,5,6,7,8,9,10,11]

  return (
    <Grid container spacing={2}>
  
<Grid item xs={12} sm={6}>
  <Grid container direction="column" style={chartStyle} spacing={2}>
    <div className="skillsList">
    {labels.map((key, i) => (
      <div className="sliders">
        <div>{key}</div>
        {/* {console.log(key)} */}
        <UserInput value={values[i]} onChange={(value) => handleValueChange(value, i)} />
      </div>
    ))}
    </div>
  </Grid>
</Grid>

      <Grid item xs={12} sm={6}>
        <RadarChart 
        data={values} />
      </Grid>
    </Grid>
  );
};

export default FormBox;
