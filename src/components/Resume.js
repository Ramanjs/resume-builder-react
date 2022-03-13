import React, { Component } from 'react';
import Education from './Education';
import Experience from './Experience';
import Project from './Project';

class Resume extends Component {
  render() {
    return (
      <div className="resume">
        <Education />
        <Experience />
        <Project />
      </div>
    );
  }
}

export default Resume;
