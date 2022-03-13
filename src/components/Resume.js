import React, { Component } from 'react';
import Education from './Education';
import Experience from './Experience';

class Resume extends Component {
  render() {
    return (
      <div className="resume">
        <Education />
        <Experience />
      </div>
    );
  }
}

export default Resume;
