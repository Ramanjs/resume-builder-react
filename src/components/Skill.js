import React, { Component } from 'react';
import Text from './Text';

class Skill extends Component {
  constructor(props) {
    super(props);

    const sample = {
      lang: 'JavaScript,C++,Python,C#,PHP,Prolog,Bash,C,SQL',
      tech: 'Git,React,Vim,AWS,GCP,Azure,Docker,Unity,Apache'
    }

    this.state = {
      lang: sample.lang,
      tech: sample.tech
    }

    this.handleLangChange = this.handleLangChange.bind(this);
    this.handleTechChange = this.handleTechChange.bind(this);
  }

  handleLangChange(value) {
    this.setState({
      lang: value
    })
  }

  handleTechChange(value) {
    this.setState({
      tech: value
    })
  }
 
  render() {
   return (
     <div className="section">
       <Text className="section-name" value="Skills" />
       <Text
         value={this.state.lang}
         onChange={this.handleLangChange}
       />
       <Text
         value={this.state.tech}
         onChange={this.handleTechChange}
       />
     </div>
    )
  }
}

export default Skill;
