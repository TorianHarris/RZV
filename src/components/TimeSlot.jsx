import React from "react";
import { connect } from "react-redux";
import { openModal } from '../actions/modalActions'

import Button from '@material-ui/core/Button'
const style = {
  root: {
    width: 50,
    height: 50,
    border: "1px solid black",
    margin: 5,
    color: "white",
    fontSize: 18,
    textTransform: 'lowercase'
  }
};

function TimeSlot(props) {
  return (
    <Button
      onClick={() => props.onTimeSlotClick(`${props.currentTime} - ${props.nextTime}`, props.currentTime)}
      style={style.root} color='primary'
      variant='contained'
    >
      {props.currentTime}
    </Button>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    onTimeSlotClick: (title, time) => {
      dispatch(openModal(title, time))
    }
  }
}

export default connect(null, mapDispatchToProps)(TimeSlot)
