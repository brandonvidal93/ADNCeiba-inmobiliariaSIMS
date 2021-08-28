import React, { useState, useEffect } from 'react';

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
  const [value, setValue] = useState(isRequired ? 1 : 0);
  const [isDisabled, setIsDisabled] = useState(true);

  // useEffect to disable the button
  useEffect(() => {
    if (value === 0 || (value === 1 && isRequired)) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [value, isRequired]);

  // arrow function to handle the increment
  const handleIncrement = (): void => {
    setValue(value + 1);
  };

  // arrow function to handle the decrement
  const handleDecrement = (): void => {
    setValue(value - 1);
  };

  return (
    <div className={classes.numberContainer}>
      <Fab
        color="primary"
        aria-label="remove"
        size="small"
        disabled={isDisabled}
        onClick={handleDecrement}
      >
        <Remove />
      </Fab>
      <TextField
        label={title}
        color="primary"
        id={idValue}
        value={value}
        InputProps={{
          readOnly: true,
        }}
        variant="outlined"
        className={classes.textNumber}
        required={isRequired}
      />
      <Fab
        color="primary"
        aria-label="add"
        size="small"
        onClick={handleIncrement}
      >
        <Add />
      </Fab>
    </div>
  );
};

export default InputNumber;
