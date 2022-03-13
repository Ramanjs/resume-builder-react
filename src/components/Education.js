import React, { Component } from 'react';
import Heading from './Heading';
import Text from './Text'

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="section">
          <Text className="section-name" value="Education"/>
          <div>
            <Heading section="education" value="B Tech Computer Science and Engineering"/>
            <Text value="Indraprastha Institute of Information Technology, Delhi" />
          </div>
       </div>

    );
  }
}

export default Education;
