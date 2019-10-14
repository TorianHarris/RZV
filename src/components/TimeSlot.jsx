import React from "react";
import Button from '@material-ui/core/Button'
const style = {
  root: {
    width: 50,
    height: 50,
    border: "1px solid black",
    margin: 5,
    color: "white",
  }
};

export default function TimeSlot(props) {
  return <Button style={style.root} color='primary' variant='contained'>{props.children}</Button>;
}
