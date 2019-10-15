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
  }
};

function TimeSlot(props) {
  return <Button onClick={() => props.onTimeSlotClick(props.children)} style={style.root} color='primary' variant='contained'>{props.children}</Button>;
}

function mapDispatchToProps(dispatch) {
  return {
    onTimeSlotClick: time => {
      dispatch(openModal(time))
    }
  }
    // onOpenClick: (time) => {
    //   const action = { type: "OPENMODAL", time };
    //   dispatch(action);
    // },
}

export default connect(null, mapDispatchToProps)(TimeSlot)
