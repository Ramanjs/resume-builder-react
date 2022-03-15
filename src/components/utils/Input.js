import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.value}

    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {
    this.props.onChange(e.target.innerText, this.props.id);
  }

  render() {
    return (
      <span onBlur={this.handleChange} contentEditable={true} spellCheck={false} suppressContentEditableWarning={true}>
        {this.props.value}
      </span>
    );
  }
}

export default Input;
