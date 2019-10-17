import React, { Component } from "react";
import { connect } from "react-redux";
import { sumbitForm } from "../Actions";

import FormInput from "./FormInput";
import Button from "@material-ui/core/Button";

const style = {
  container: {
    margin: 30,
    textAlign: "center"
  },
  button: {
    marginTop: 20
  }
};

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      phoneNumber: "",
      email: "",
      nameError: false,
      phoneError: false
    };
  }

  handleFormValidation = () => {
    this.setState(
      {
        nameError: this.state.name.length === 0,
        phoneError: this.state.phoneNumber.length !== 10
      },
      () => {
        if (!this.state.nameError && !this.state.phoneError)
          this.props.onReserveClick(
            this.state.name,
            this.state.phoneNumber,
            this.props.timeSlot
          );
      }
    );
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]:
        name === "phoneNumber"
          ? value.replace(/\D/, "")
          : value.replace(/^[0-9]/, "")
    });
  };

  render() {
    return (
      <div style={style.container}>
        <h3>{this.props.timeSlot} Time Slot</h3>
        <FormInput
          error={this.state.nameError}
          required
          label="Name"
          name="name"
          value={this.state.name}
          handleChange={this.handleInputChange}
        />
        <FormInput
          error={this.state.phoneError}
          required
          label="Phone Number"
          name="phoneNumber"
          value={this.state.phoneNumber}
          handleChange={this.handleInputChange}
        />
        {/* <FormInput label='E-Mail' name='email' value={this.state.email} handleChange={this.handleInputChange}/> */}
        <Button
          color="primary"
          variant="contained"
          size="large"
          style={style.button}
          onClick={this.handleFormValidation}
        >
          {this.props.modalType === 'create' ? 'Reserve' : 'Edit'}
        </Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    timeSlot: state.modal.timeSlot,
    modalType: state.modal.modalType
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onReserveClick: (name, phoneNumber, timeSlot) => {
      dispatch(sumbitForm(name, phoneNumber, timeSlot));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
