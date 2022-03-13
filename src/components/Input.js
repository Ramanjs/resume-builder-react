import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.value}

    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {
    this.props.onChange(e.target.value, this.props.id);
  }

  render() {
    return (
      <input type="text" onChange={this.handleChange} value={this.props.value} />
    );
  }
}

export default Input;
