import React, { Component } from "react";
import store from './Store';

import Button from "@material-ui/core/Button";
import Modal from './components/Modal';
import TimeSlot from "./components/TimeSlot";
import DatePicker from "./DatePicker";
const times = [9, 10, 11, 12, 1, 2, 3, 4];

const style = {
  timeSlotContainer: {
    width: 300
  }
};

export default class Test extends Component {
  render() {
    return (
      <div>
        <DatePicker />
        <Button>Redux Test</Button>
        <Modal store={store}/>
        <div style={style.timeSlotContainer}>
          {times.map(t => (
            <TimeSlot store={store}>{t}</TimeSlot>
          ))}
        </div>
      </div>
    );
  }
}
