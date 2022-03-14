import React, { Component } from 'react';
import Text from './Text';

class Heading extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let titleElement = <div className="heading-main-one">
        <Text
          id={this.props.id}
          className="title"
          value={this.props.value}
          isEditable={true}
          onChange={this.props.onCompanyChange}
          onAdd={this.props.onAdd}
          onDel={this.props.onDel}
        />
      </div>
      if (this.props.section == "experience") {
        titleElement = <div className="heading-main">
            {titleElement}
            <div className="pipe">|</div>
            <div className="heading-main-two">
              <Text id={this.props.id} value={this.props.role} onChange={this.props.onRoleChange}/>
            </div>
          </div>
      }

    return (
      <div className="heading">
        {titleElement}
        <div className="heading-side">
          <Text
            id={this.props.id}
            value={this.props.loc}
            onChange={this.props.onLocChange}
          />
        </div>
      </div>
    )
  }
}

export default Heading;
