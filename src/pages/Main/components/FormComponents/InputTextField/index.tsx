import React from 'react';

// Material
import { TextField } from '@material-ui/core';

// Styles
import { useStyles } from './styles';

export interface InputTextFieldProps {
  id: string;
  label: string;
  isRequired?: boolean;
}

const InputTextField: React.FC<InputTextFieldProps> = ({
  id,
  label,
  isRequired = false,
}) => {
  const classes = useStyles();

  return (
    <TextField
      id={id}
      label={label}
      required={isRequired}
      className={classes.textField}
    />
  );
};

export default InputTextField;
