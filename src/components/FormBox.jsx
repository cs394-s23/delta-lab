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

  return (
    <Grid container spacing={2}>
<Grid item xs={12} sm={6}>
  <Grid container direction="column" style={chartStyle} spacing={2}>
    <div>
      <UserInput value={values[0]} onChange={(value) => handleValueChange(value, 0)} />
      <div>{labels[0]}</div>
    </div>
    <div>
      <UserInput value={values[1]} onChange={(value) => handleValueChange(value, 1)} />
      <div>{labels[1]}</div>
    </div>
    <div>
      <UserInput value={values[2]} onChange={(value) => handleValueChange(value, 2)} />
      <div>{labels[2]}</div>
    </div>
    <div>
      <UserInput value={values[3]} onChange={(value) => handleValueChange(value, 3)} />
      <div>{labels[3]}</div>
    </div>
    <div>
      <UserInput value={values[4]} onChange={(value) => handleValueChange(value, 4)} />
      <div>{labels[4]}</div>
    </div>
    <div>
      <UserInput value={values[5]} onChange={(value) => handleValueChange(value, 5)} />
      <div>{labels[5]}</div>
    </div>
    <div>
      <UserInput value={values[6]} onChange={(value) => handleValueChange(value, 6)} />
      <div>{labels[6]}</div>
    </div>
    <div>
      <UserInput value={values[7]} onChange={(value) => handleValueChange(value, 7)} />
      <div>{labels[7]}</div>
    </div>
    <div>
      <UserInput value={values[8]} onChange={(value) => handleValueChange(value, 8)} />
      <div>{labels[8]}</div>
    </div>
    <div>
      <UserInput value={values[9]} onChange={(value) => handleValueChange(value, 9)} />
      <div>{labels[9]}</div>
    </div>
    <div>
      <UserInput value={values[10]} onChange={(value) => handleValueChange(value, 10)} />
      <div>{labels[10]}</div>
    </div>
    <div>
      <UserInput value={values[11]} onChange={(value) => handleValueChange(value, 11)} />
      <div>{labels[11]}</div>
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
