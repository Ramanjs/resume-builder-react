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
        onAdd={this.props.onAdd}
        onChange={this.props.onCompanyChange}
      />
      if (this.props.section == "experience") {
        titleElement = <div>
            {titleElement} | <Text id={this.props.id} value={this.props.role} onChange={this.props.onRoleChange}/>
          </div>
      }

    return (
      <div className="heading">
        {titleElement}
        <Text id={this.props.id} value={this.props.loc} onChange={this.props.onLocChange}/>
      </div>
    )
  }
}

export default Heading;
