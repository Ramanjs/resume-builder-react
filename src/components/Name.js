import React, { Component } from 'react';
import Text from './Text';

class Name extends Component {
  constructor(props) {
    super(props);

    const sample = {
      name: 'First Last',
      email: 'someEmail@edu.com',
      phone: '1-234-567-890',
      linkedin: 'linkedIn/linkedInUsername',
      github: 'github/githubUsername'
    }

    this.state = {
      name: sample.name,
      email: sample.email,
      phone: sample.phone,
      linkedin: sample.linkedin,
      github: sample.github
    }

    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(value) {
    this.setState({
      name: value
    })
  }

  render() {
    return (
      <div className="name">
        <Text
          value={this.state.name}
          onChange={this.handleNameChange}
        />
      </div>
    )
  }
}

export default Name;
