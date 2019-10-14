import React, { Component } from "react";
import { connect } from 'react-redux';
import { simpleAction } from './actions/simpleAction';

import Button from '@material-ui/core/Button';
import TimeSlot from "./components/TimeSlot";
import DatePicker from "./DatePicker";
const times = [9, 10, 11, 12, 1, 2, 3, 4];

const style = {
  timeSlotContainer: {
    width: 300,
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

class Test extends Component {
  simpleAction = (event) => {
    this.props.simpleAction();
  }
  render() {
    return (
      <div>
        <DatePicker />
        <Button onClick={this.simpleAction}>
          Redux Test
        </Button>
        <pre>
          {
            JSON.stringify(this.props)
          }
        </pre>
        <div style={style.timeSlotContainer}>
          {times.map(t => (
            <TimeSlot>{t}</TimeSlot>
          ))}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);