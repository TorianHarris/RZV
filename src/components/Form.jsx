import React, { Component } from "react";
import { connect } from "react-redux";
import { closeModal, sumbitForm, updateData, deleteData } from "../Actions";

import FormInput from "./FormInput";
import Button from "@material-ui/core/Button";

const style = {
  container: {
    margin: 30,
    textAlign: "center"
  },
  button: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10
  }
};

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      phoneNumber: "",
      email: "",
      notes: "",
      nameError: false,
      phoneError: false,
      emailError: false
    };
  }

  componentDidMount() {
    if (this.props.modalType !== "create")
      this.setState({
        name: this.props.currentInfo.name,
        phoneNumber: this.props.currentInfo.phoneNumber
      });
  }

  handleFormValidation = () => {
    const rgx = /@/;
    this.setState(
      {
        nameError: this.state.name.length === 0,
        phoneError: this.state.phoneNumber.toString().length !== 10,
        emailError: this.state.email.length > 0 && !rgx.test(this.state.email),
      },
      () => {
        if (!this.state.nameError && !this.state.phoneError && !this.state.emailError) {
          this.props.modalType === "create"
            ? this.props.onReserveClick(
              this.state.name,
              this.state.phoneNumber,
              this.props.timeSlot,
              this.props.date + " " + this.props.year
            )
            : this.props.onFinishEditClick(
              this.props.currentInfo._id,
              this.state.name,
              this.state.phoneNumber
            );
        }
      }
    );
  };

  handleInputChange = event => {
    const target = event.target;
    let value = target.value;
    const name = target.name;

    if(name === 'name') {
      value = value.replace(/^[0-9]/, "")
    }
    if(name === "phoneNumber") {
      value = value.replace(/\D/, "")
    }

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div style={style.container}>
        {/* delete reservation modal */}
        {this.props.modalType === 'delete' ?
          <>
            <h3>Are you sure want to delete this reservation?</h3>
            <h3>Name: {this.props.currentInfo.name}</h3>
            <h3>Phone Number: {this.props.currentInfo.phoneNumber}</h3>
            <div>
              <Button
                color="primary"
                variant="contained"
                size="medium"
                style={style.button}
                onClick={this.props.onCancelDelete}
              >
                Cancel
            </Button>
              <Button
                color="secondary"
                variant="outlined"
                size="medium"
                style={style.button}
                onClick={() => this.props.onConfirmDelete(this.props.currentInfo._id)}
              >
                Delete
            </Button>
            </div>
          </>
          :
          // create / edit reservation modal 
          <>
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
             <FormInput
              error={this.state.emailError}
              label="Email"
              name="email"
              value={this.state.email}
              handleChange={this.handleInputChange}
            />
            <Button
              color="primary"
              variant="contained"
              size="large"
              style={style.button}
              onClick={this.handleFormValidation}
            >
              {this.props.modalType === "create" ? "Reserve" : "Finish Editing"}
            </Button>
          </>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    timeSlot: state.modal.timeSlot,
    date: state.modal.date,
    year: state.modal.year,
    modalType: state.modal.modalType,
    currentInfo: state.modal.currentInfo
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onReserveClick: (name, phoneNumber, timeSlot, date) => {
      dispatch(sumbitForm(name, phoneNumber, timeSlot, date));
    },
    onFinishEditClick: (id, name, phoneNumber) => {
      dispatch(updateData(id, name, phoneNumber));
    },
    onCancelDelete: () => {
      dispatch(closeModal());
    },
    onConfirmDelete: (id) => {
      dispatch(deleteData(id))
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
