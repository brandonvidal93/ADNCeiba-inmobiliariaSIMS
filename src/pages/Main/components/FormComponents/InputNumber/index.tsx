import React from 'react';

// Material
import { Fab, TextField } from '@material-ui/core';

// Icons
import { Add, Remove } from '@material-ui/icons';

// Styles
import { useStyles } from './styles';

export interface InputNumberContextProps {
  title: string;
  idValue: string;
  isRequired?: boolean;
}

const InputNumber: React.FC<InputNumberContextProps> = ({
  title,
  idValue,
  isRequired = false,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.numberContainer}>
      <Fab color="primary" aria-label="remove" size="small">
        <Remove />
      </Fab>
      <TextField
        label={title}
        color="primary"
        id={idValue}
        defaultValue={isRequired ? '1' : '0'}
        InputProps={{
          readOnly: true,
        }}
        variant="outlined"
        className={classes.textNumber}
        required={isRequired}
      />
      <Fab color="primary" aria-label="add" size="small">
        <Add />
      </Fab>
    </div>
  );
};

export default InputNumber;
