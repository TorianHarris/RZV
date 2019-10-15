import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function FormInput(props) {
  return (
    <TextField
      required={props.required}
      label={props.label}
      name={props.name}
      value={props.value}
      margin="normal"
      fullWidth
      onChange={props.handleChange}
    />
  )
}