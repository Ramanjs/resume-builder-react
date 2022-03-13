import React, { Component } from 'react';
import Text from './Text';

class Heading extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let titleElement = <Text
        id={this.props.id}
        className="title"
        value={this.props.value}
        isEditable={true}
        onChange={this.props.onCompanyChange}
        onAdd={this.props.onAdd}
        onDel={this.props.onDel}
      />
      if (this.props.section == "experience") {
        titleElement = <div>
            {titleElement} | <Text id={this.props.id} value={this.props.role} onChange={this.props.onRoleChange}/>
          </div>
      }

    return (
      <div className="heading">
        {titleElement}
        <Text
          id={this.props.id}
          value={this.props.loc}
          onChange={this.props.onLocChange}
        />
      </div>
    )
  }
}

export default Heading;
