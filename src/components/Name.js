import React, { Component } from 'react';
import Text from './utils/Text';

class Name extends Component {
  constructor(props) {
    super(props);

    const sample = {
      name: 'Firstname Lastname',
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
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleLinkedinChange = this.handleLinkedinChange.bind(this);
    this.handleGithubChange = this.handleGithubChange.bind(this);
  }

  handleNameChange(value) {
    this.setState({
      name: value
    })
  }

  handleEmailChange(value) {
    this.setState({
      email: value
    })
  }

  handlePhoneChange(value) {
    this.setState({
      phone: value
    })
  }

  handleLinkedinChange(value) {
    this.setState({
      linkedin: value
    })
  }

  handleGithubChange(value) {
    this.setState({
      github: value
    })
  }

  render() {
    return (
      <div className="name">
        <Text
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <div className="personal-info">
          <Text
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
          <div className="pipe info-pipe">|</div>
          <Text
            value={this.state.phone}
            onChange={this.handlePhoneChange}
          />
          <div className="pipe info-pipe">|</div>
          <Text
            value={this.state.linkedin}
            onChange={this.handleLinkedinChange}
          />
          <div className="pipe info-pipe">|</div>
          <Text
            value={this.state.github}
            onChange={this.handleGithubChange}
          />
        </div>
      </div>
    )
  }
}

export default Name;
