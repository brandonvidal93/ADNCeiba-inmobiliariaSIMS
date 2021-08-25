import React, { useState } from 'react';

// Material
import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

// Styles
import { useStyles } from './styles';

const SelectUbication: React.FC = () => {
  const data: { id: number; name: string }[] = [
    { id: 1, name: 'Comuna 1 - Popular' },
    { id: 2, name: 'Comuna 2 - Santa Cruz' },
    { id: 3, name: 'Comuna 3 - Manrique' },
    { id: 4, name: 'Comuna 4 - Aranjuez' },
    { id: 5, name: 'Comuna 5 - Castilla' },
    { id: 6, name: 'Comuna 6 - 12 de Octubre' },
    { id: 7, name: 'Comuna 7 - Robledo' },
    { id: 8, name: 'Comuna 8 - Villa Hermosa' },
    { id: 9, name: 'Comuna 9 - Buenos Aires' },
    { id: 10, name: 'Comuna 10 - La Candelaria' },
    { id: 11, name: 'Comuna 11 - Laureles Estadio' },
    { id: 12, name: 'Comuna 12 - La América' },
    { id: 13, name: 'Comuna 13 - San Javier' },
    { id: 14, name: 'Comuna 14 - El Poblado' },
    { id: 15, name: 'Comuna 15 - Guayabal' },
    { id: 16, name: 'Comuna 16 - Belén' },
  ];

  const [ubication, setUbication] = useState('');
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setUbication(event.target.value as string);
  };

  return (
    <FormControl required className={classes.formControl}>
      <InputLabel id="labelUbication">Tipo de propiedad</InputLabel>
      <Select
        labelId="labelUbication"
        id="selectUbication"
        value={ubication}
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

export default SelectUbication;
