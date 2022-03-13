import React, { Component } from 'react';

class EditPane extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleDelete() {
    this.props.onDel(this.props.id);
  }

  handleAdd() {
    this.props.onAdd(this.props.id);
  }

  render() {
    return (
      <div className="edit-pane">
        <div className="edit-button" onClick={this.handleAdd}>Add</div>
        <div className="edit-button" onClick={this.handleDelete}>Del</div>
      </div>
    )
  }
}

export default EditPane;
