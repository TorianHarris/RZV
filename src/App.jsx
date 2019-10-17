import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "./Actions";

import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Modal from "./components/Modal";
import TimeSlot from "./components/TimeSlot";
import ReservationInfo from "./components/ReservationInfo";

const times = [
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm"
];

const style = {
  container: {
    height: "100%",
    display: "flex",
    // flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    color: 'white'
  },
  timeSlotContainer: {
    width: 300,
    margin: "auto"
  },
  date: {
    color: "white",
    textAlign: "center",
    marginTop: 0,
    marginBottom: 20
  },
  divider: {
    backgroundColor: "white",
    marginLeft: 15,
    marginRight: 15,
    height: "60%"
  }
};

class App extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <>
      <h1>RZV</h1>
      <Container style={style.container}>
        {/* <DatePicker /> */}
        <div>
          <h1 style={style.date}>Thursday, October 17</h1>
          <Modal />
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
      </Container>
      </>
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
