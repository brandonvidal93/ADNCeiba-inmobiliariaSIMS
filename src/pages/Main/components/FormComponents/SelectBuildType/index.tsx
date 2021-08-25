import React, { useState } from 'react';

// Material
import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

// Styles
import { useStyles } from './styles';

const SelectBuildType: React.FC = () => {
  const data: { id: number; name: string }[] = [
    { id: 1, name: 'Apartamento' },
    { id: 2, name: 'Casa' },
  ];

  const [buildType, setBuildType] = useState('');
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setBuildType(event.target.value as string);
  };

  return (
    <FormControl required className={classes.formControl}>
      <InputLabel id="labelBuildType">Tipo de propiedad</InputLabel>
      <Select
        labelId="labelBuildType"
        id="selectBuildType"
        value={buildType}
        onChange={handleChange}
      >
        <MenuItem value="">Selecciona</MenuItem>
        {data &&
          data.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

export default SelectBuildType;
