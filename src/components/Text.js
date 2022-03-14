import React, { Component } from 'react';
import EditPane from './EditPane';
import Input from './Input';

class Text extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isEditVisible: false
    }

    this.onFocused = this.onFocused.bind(this);
    this.onBlured = this.onBlured.bind(this);
  }

  onFocused() {
    this.setState({
      isEditVisible: true
    })
  }

  onBlured() {
    this.setState({
      isEditVisible: false
    })
  }

  render() {
    return (
      <div onMouseEnter={this.onFocused} onMouseLeave={this.onBlured} className="text-flex">
        {this.state.isEditVisible && this.props.isEditable ? <EditPane id={this.props.id} onDel={this.props.onDel} onAdd={this.props.onAdd}/> : null}
        <Input value={this.props.value} id={this.props.id} onChange={this.props.onChange} />
      </div>
    )
  }
}

export default Text;
