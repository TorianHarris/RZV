import React from "react";
import { connect } from "react-redux";

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
  return <Button style={style.root} color='primary' variant='contained'>{props.children}</Button>;
}

function mapDispatchToProps(dispatch) {
  return {
    onOpenClick: () => {
      const action = { type: "OPENMODAL" };
      dispatch(action);
    },
    onCloseClick: () => {
      const action = { type: "CLOSEMODAL" };
      dispatch(action);
    }
  };
}

export default connect (null, mapDispatchToProps) (TimeSlot)
