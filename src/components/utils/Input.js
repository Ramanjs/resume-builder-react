import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.value}

    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {
    console.log(e.target)
    this.props.onChange(e.target.value, this.props.id);
  }

  render() {
    return (
      <span onChange={this.handleChange} contentEditable="true" spellCheck="false">
        {this.props.value}
      </span>
    );
  }
}

export default Input;
