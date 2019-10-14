import React, { Component } from "react";
import TimeSlot from "./components/TimeSlot";
import DatePicker from "./DatePicker";
const times = [9, 10, 11, 12, 1, 2, 3, 4];

const style = {
  timeSlotContainer: {
    width: 300,
  }
}

export default class Test extends Component {
  render() {
    return (
      <div>
        <DatePicker/>
        <div style={style.timeSlotContainer}>
          {times.map(t => (
            <TimeSlot>{t}</TimeSlot>
          ))}
        </div>
      </div>
    );
  }
}
