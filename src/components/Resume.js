import React, { Component } from 'react';
import Education from './Education';
import Experience from './Experience';
import Name from './Name';
import Project from './Project';
import Skill from './Skill';

class Resume extends Component {
  render() {
    return (
      <div className="resume">
        <Name />
        <Education />
        <Experience />
        <Project />
        <Skill />
      </div>
    );
  }
}

export default Resume;
