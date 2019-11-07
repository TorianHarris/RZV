import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "./Actions";

import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Modal from "./components/Modal";
import TimeSlot from "./components/TimeSlot";
import ReservationInfo from "./components/ReservationInfo";

import Moment from 'react-moment';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon'
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';

const timeMaker = function (start = 9, end = 5, startMeridiem = 'am', endMeridiem = 'pm') {
  let time = start;
  let meridiem = startMeridiem;
  const times = [];
  while(time + meridiem !== end + endMeridiem ) {
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
    height: "80%",
    display: "flex",
    flexDirection: 'column',
    justifyContent: "center",
  },
  title: {
    fontSize: 72,
    margin: 5
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
  divider: {
    backgroundColor: "white",
    marginLeft: 15,
    marginRight: 15,
    height: '100%'
  },
};

class App extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    const date = new Date();
    return (
      <Container style={style.container}>
        <div style={style.header}>
          <p style={style.title}>RZV</p>
          <h3>Simple Reservation Application</h3>
        </div>
        <div style={{...style.row, ...{height: 250}}}>
          <div style={style.column}>
            <h1 style={style.date}><Moment format="dddd, MMMM DD">{date}</Moment></h1>
            <div style={style.row}>
              <IconButton><Icon className='fas fa-angle-double-left icon'/></IconButton>
              <IconButton><Icon className='fas fa-angle-left icon'/></IconButton>
              <IconButton><Icon className='fas fa-angle-right icon'/></IconButton>
              <IconButton><Icon className='fas fa-angle-double-right icon'/></IconButton>
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
          </div>
          <Divider orientation="vertical" style={style.divider} />
          <ReservationInfo
            name={this.props.currentInfo ? this.props.currentInfo.name : "null"}
            phoneNumber={
              this.props.currentInfo ? this.props.currentInfo.phoneNumber : "null"
            }
          />
        </div>
        <Modal />
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.modal.data,
    currentInfo: state.modal.currentInfo
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getData: () => {
      dispatch(getData());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
