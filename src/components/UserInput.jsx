import React from 'react';
import { Stack, Slider } from '@mui/material';

export default function UserInput(props) {
  const { value, onChange } = props;

  const handleSliderChange = (event, newValue) => {
    onChange(newValue);
    console.log(newValue)
  };

  return (
    <Stack spacing={2} direction="column" width={300} sx={{ mt: 1 }}>
      <Slider
        aria-label="Score"
        value={value}
        onChange={handleSliderChange}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={10}
        getAriaValueText={(value) => `${value} out of 10`}
      />
    </Stack>
  );
}
