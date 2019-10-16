import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../Actions'

import Button from '@material-ui/core/Button';

const style = {
  root: {
    marginLeft: 30,
    color: 'white'
  },
  timeSlot: {
    textAlign: 'center',
    textTransform: 'uppercase',
    margin: 0
  },
  button: {
    textAlign: 'center'
  }
}

function ReservationInfo(props) {
  return (
    <div style={style.root}>
      <h2 style={style.timeSlot}>{props.timeSlot}</h2>
      {props.name && props.phoneNumber ?
        <>
          <h2>Name: {props.name}</h2>
          <h3>Number: {props.phoneNumber}</h3>
        </>
        :
        <>
          <h3 style={style.header}>No reservation in this time slot</h3>
          <div style={{ textAlign: 'center' }}>
            <Button
              color='primary'
              variant='contained'
              size='large'
              style={style.button}
              onClick={props.onReservationClick}
            >
              Create Reservation
      </Button>
          </div>
        </>
      }
    </div>
  );
}

function mapStateToProps(state) {
  return {
    timeSlot: state.modal.timeSlot,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onReservationClick: () => {
      dispatch(openModal())
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReservationInfo);