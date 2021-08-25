import React from 'react';

// Material
import { Typography, Slider } from '@material-ui/core';

const SliderLever = () => {
  const marks: { value: number; label: string }[] = [
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
  ];

  const valuetext = (value: number): string => {
    return `${value}`;
  };

  const valueLabelFormat = (value: number): number => {
    return marks.findIndex((mark) => mark.value === value) + 1;
  };

  return (
    <>
      <Typography id="levelId" gutterBottom>
        Estrato
      </Typography>
      <Slider
        defaultValue={1}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks={marks}
        min={1}
        max={6}
      />
    </>
  );
};

export default SliderLever;
