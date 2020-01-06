import React, { Component } from "react";
import { connect } from "react-redux";
import { getData, changeDate } from "./Actions";

import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Modal from "./components/Modal";
import TimeSlot from "./components/TimeSlot";
import ReservationInfo from "./components/ReservationInfo";

import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon'

const timeMaker = function (start = 9, end = 5, startMeridiem = 'am', endMeridiem = 'pm') {
  let time = start;
  let meridiem = startMeridiem;
  const times = [];
  while (time + meridiem !== end + endMeridiem) {
    times.push(time + meridiem);
    if (time === 11)
      meridiem === 'am' ? meridiem = 'pm' : meridiem = 'am';
    time === 12 ? time = 1 : time++;
  }
  times.push(end + endMeridiem)
  return times;
}

const times = timeMaker();

const style = {
  container: {
    // height: "80%",
    display: "flex",
    flexDirection: 'column',
    justifyContent: "center",
  },
  title: {
    fontSize: 54,
    margin: 0,
    marginBottom: 5,
    backgroundColor: 'purple'
  },
  header: {
    color: 'white',
    textAlign: 'center',
  },
  row: {
    display: 'flex',
    alignItems: "center",
    justifyContent: "center"
  },
  column: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  timeSlotContainer: {
    width: 300,
  },
  date: {
    color: "white",
    marginTop: 0,
    marginBottom: 0,
  },
  vertDivider: {
    backgroundColor: "white",
    // marginLeft: 15,
    marginRight: 10,
    height: '100%'
  },
  horzDivider: {
    width: '40%',
    backgroundColor: 'white',
    marginTop: 8,
    marginBottom: 8
  }
};

class App extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <div style={style.container}>
        <div style={style.header}>
          <p style={style.title}>RZV</p>
          {/* <h3>Simple Reservation Application</h3> */}
        </div>
        {/* <div style={{ ...style.row, ...{ height: 300} }}> */}
          <div style={{...style.column, ...{ minWidth: 450} }}>
          <h1 style={style.date}>{this.props.year}</h1>
          <Divider style={style.horzDivider}/>
          <h1 style={style.date}>{this.props.date}</h1>
            <div style={style.row}>
              <IconButton onClick={() => {this.props.onDateChange('sub', 'M')}}><Icon className='fas fa-angle-double-left icon' /></IconButton>
              <IconButton onClick={() => {this.props.onDateChange('sub', 'd')}}><Icon className='fas fa-angle-left icon' /></IconButton>
              <IconButton onClick={() => {this.props.onDateChange('add', 'd')}}><Icon className='fas fa-angle-right icon' /></IconButton>
              <IconButton onClick={() => {this.props.onDateChange('add', 'M')}}><Icon className='fas fa-angle-double-right icon' /></IconButton>
            </div>
            <div style={style.timeSlotContainer}>
              {times.map((t, index) =>
                index < times.length - 1 ? (
                  <TimeSlot
                    currentTime={t}
                    nextTime={times[index + 1]}
                    reserved={this.props.data.find(
                      d => d.timeSlot === `${t} - ${times[index + 1]}`
                    )}
                    key={index}
                  />
                ) : null
              )}
            </div>
            <Divider style={style.vertDivider} />
            <ReservationInfo
            name={this.props.currentInfo ? this.props.currentInfo.name : "null"}
            phoneNumber={
              this.props.currentInfo ? this.props.currentInfo.phoneNumber : "null"
            }
          />
          </div>
        {/* </div> */}
        <Modal />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.modal.currentDateData,
    currentInfo: state.modal.currentInfo,
    date: state.modal.date,
    year: state.modal.year
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getData: () => {
      dispatch(getData());
    },
    onDateChange: (operation, key) => {
      dispatch(changeDate(operation, key))
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
