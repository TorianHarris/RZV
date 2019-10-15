import React, { Component } from "react";
import store from './Store';

import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Modal from './components/Modal';
import TimeSlot from "./components/TimeSlot";
import DatePicker from "./DatePicker";
const times = [9, 10, 11, 12, 1, 2, 3, 4];

const style = {
  container: {
    height: '100%',
    display: 'flex',
    // flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  timeSlotContainer: {
    width: 300
  },
  date: {
    color: 'white'
  },
  divider: {
    backgroundColor: 'white',
    marginLeft: 15,
    marginRight: 15,
    height: '60%',
  }
};

export default class Test extends Component {
  render() {
    return (
      <Container style={style.container}>
        {/* <DatePicker /> */}
        <div>
          <h1 style={style.date}>Tuesday, October 15</h1>
          <Modal store={store} />
          <div style={style.timeSlotContainer}>
            {times.map(t => (
              <TimeSlot store={store}>{t}</TimeSlot>
            ))}
          </div>
        </div>
        <Divider orientation="vertical" style={style.divider}/>
        <div>
          <h3 style={style.date}>No reservation data for this day</h3>
        </div>
      </Container>
    );
  }
}
