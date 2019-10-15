import React, { Component } from "react";
import store from './Store';

import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Modal from './components/Modal';
import TimeSlot from "./components/TimeSlot";
import DatePicker from "./DatePicker";
const times = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];

const style = {
  container: {
    height: '100%',
    display: 'flex',
    // flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  timeSlotContainer: {
    width: 300,
    margin: 'auto'
  },
  date: {
    color: 'white',
    textAlign: 'center'
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
            {times.map((t, index) => (
              index < times.length -1 ?
              <TimeSlot store={store} currentTime={t} nextTime={times[index+1]} />
              : null
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
