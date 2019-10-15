import React, { Component } from 'react';
import FormInput from './FormInput';
import Button from '@material-ui/core/Button'

const style = {
  container: {
    margin: 30,
    textAlign: 'center',
  },
  button: {
    marginTop: 20
  }
}

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      phoneNumber: '',
      email: '',
    }
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    console.log(value)
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div style={style.container}>
        <h3>{this.props.title} Time Slot</h3>

        <FormInput required label='Name' name='name' value={this.state.name} handleChange={this.handleInputChange} />
        <FormInput required label='Phone Number' name='phoneNumber' value={this.state.phoneNumber} handleChange={this.handleInputChange} />
        <FormInput label='E-Mail' name='email' value={this.state.email} handleChange={this.handleInputChange}/>
        <Button
          color='primary'
          variant='contained'
          size='large'
          style={style.button}
        >
          Reserve
        </Button>
      </div>
    );
  }
}

export default Form;