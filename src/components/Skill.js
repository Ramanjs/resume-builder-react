import React, { Component } from 'react';
import Text from './utils/Text';

class Skill extends Component {
  constructor(props) {
    super(props);

    const sample = {
      lang: 'JavaScript, C++, Python, C#, PHP, Prolog, Bash, C, SQL',
      tech: 'Git, React, Vim, AWS, GCP, Azure, Docker, Unity, Apache'
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
       <div className="section-name">
         <Text value="SKILLS" />
       </div>
       <div className="text">
         <Text
           value={"Languages: " + this.state.lang}
           onChange={this.handleLangChange}
         />
       </div>
       <div className="text">
         <Text
           value={"Technologies: " + this.state.tech}
           onChange={this.handleTechChange}
         />
       </div>
     </div>
    )
  }
}

export default Skill;
