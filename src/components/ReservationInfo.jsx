import React from "react";
import { connect } from "react-redux";
import { openModal } from "../Actions";

import Button from "@material-ui/core/Button";

const style = {
  root: {
    marginLeft: 30,
    color: "white",
    width: 300
  },
  timeSlot: {
    // textAlign: 'center',
    textTransform: "uppercase",
    margin: 0
  },
  button: {
    marginBottom: 20
  }
};

function formatPhoneNumber(num) {
  let formattedNum = num.toString();
  if (formattedNum.length === 10)
    return `(${formattedNum.slice(0, 3)}) ${formattedNum.slice(
      3,
      6
    )}-${formattedNum.slice(6)}`;
  return formattedNum;
}

function ReservationInfo(props) {
  return (
    <div style={style.root}>
      <h2 style={style.timeSlot}>{props.timeSlot}</h2>
      {props.name && props.phoneNumber ? (
        <>
          <h2>Name: {props.name}</h2>
          <h3>Number: {formatPhoneNumber(props.phoneNumber)}</h3>
          <Button
            color="primary"
            variant="contained"
            size="medium"
            style={style.button}
            onClick={() => props.onReservationClick("edit")}
          >
            Edit Reservation
          </Button>

          <Button
            color="secondary"
            variant="outlined"
            size="small"
            onClick={() => props.onReservationClick("edit")}
          >
            Delete Reservation
          </Button>
        </>
      ) : (
        <>
          <h3 style={style.header}>No reservation in this time slot</h3>
          <div>
            <Button
              color="primary"
              variant="contained"
              size="large"
              style={style.button}
              onClick={() => props.onReservationClick("create")}
            >
              Create Reservation
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    timeSlot: state.modal.timeSlot
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onReservationClick: modalType => {
      dispatch(openModal(modalType));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReservationInfo);
