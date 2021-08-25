import React, { useState } from 'react';

// Material
import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

// Styles
import { useStyles } from './styles';

const SelectAntiqueType: React.FC = () => {
  const data: { id: number; name: string }[] = [
    { id: 1, name: '0 a 5 años' },
    { id: 2, name: '6 a 10 años' },
    { id: 3, name: '11 a 15 años' },
    { id: 4, name: '16 a 20 años' },
    { id: 5, name: '21 a 25 años' },
    { id: 6, name: '26 a 30 años' },
  ];

  const [antiqueType, setAntiqueType] = useState('');
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAntiqueType(event.target.value as string);
  };

  return (
    <FormControl required className={classes.formControl}>
      <InputLabel id="labelAntiqueType">Antigüedad de la propiedad</InputLabel>
      <Select
        labelId="labelAntiqueType"
        id="selectAntiqueType"
        value={antiqueType}
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

export default SelectAntiqueType;
