import React, { Component } from 'react';
import Heading from './utils/Heading';
import Text from './utils/Text'
import _ from 'lodash';

class Education extends Component {
  constructor(props) {
    super(props);

    const sample = {
      id: _.uniqueId('section-'),
      degree: 'B Tech Computer Science and Engineering',
      uni: 'IIIT, Delhi',
      coursework: 'Data Structures and Algorithms; Operating Systems;  Computer Security; Software Testing; Advanced Networking; Big Data Analytics',
      duration: 'Jan 2022 - Present'
    };

    this.state = {
      sampleDegree: JSON.parse(JSON.stringify(sample)),
      degrees: [
        JSON.parse(JSON.stringify(sample))
      ]
    }

    this.handleDegreeChange = this.handleDegreeChange.bind(this);
    this.handleUniChange = this.handleUniChange.bind(this);
    this.handleCourseworkChange = this.handleCourseworkChange.bind(this);
    this.handleDurationChange = this.handleDurationChange.bind(this);
    this.handleDegreeAdd = this.handleDegreeAdd.bind(this);
    this.handleDegreeDel = this.handleDegreeDel.bind(this);
  }

  findDegreeIndex(id) {
    for (let i = 0; i < this.state.degrees.length; i++) {
      if (this.state.degrees[i].id == id) {
        return i;
      }
    }
  }

  handleDegreeAdd(id) {
    const curDegrees = this.state.degrees.filter(() => true);
    const index = this.findDegreeIndex(id);
    const sample = JSON.parse(JSON.stringify(this.state.sampleDegree));
    sample.id = _.uniqueId('section-')
    curDegrees.splice(index + 1, 0, sample);
    this.setState({
      degrees: curDegrees
    })
  }

  handleDegreeDel(id) {
    const curDegrees = this.state.degrees.filter(() => true);
    if (curDegrees.length == 1) {
      return;
    }
    const index = this.findDegreeIndex(id);
    curDegrees.splice(index, 1);
    this.setState({
      degrees: curDegrees
    })
  }

  handleDegreeChange(value, id) {
    this.setState({
      degrees: this.state.degrees.map(deg => {
        if (deg.id == id) {
          deg.degree = value;
        }
        return deg;
      })
    })
  }

  handleUniChange(value, id) {
    this.setState({
      degrees: this.state.degrees.map(deg => {
        if (deg.id == id) {
          deg.uni = value;
        }
        return deg;
      })
    })
  }

  handleCourseworkChange(value, id) {
    this.setState({
      degrees: this.state.degrees.map(deg => {
        if (deg.id == id) {
          deg.coursework = value;
        }
        return deg;
      })
    })
  }

  handleDurationChange(value, id) {
    this.setState({
      degrees: this.state.degrees.map(deg => {
        if (deg.id == id) {
          deg.duration = value;
        }
        return deg;
      })
    })
  }

  render() {
    return (
      <div className="section">
        <div className="section-name">
          <Text value="EDUCATION" />
        </div>
        {this.state.degrees.map(deg => 
          <div key={deg.id}>
            <Heading
              id={deg.id}
              section="education"
              value={deg.degree}
              loc={deg.duration}
              onCompanyChange={this.handleDegreeChange}
              onLocChange={this.handleDurationChange}
              onAdd={this.handleDegreeAdd}
              onDel={this.handleDegreeDel}
            />
            <div className="raleway">
              <Text
                id={deg.id}
                value={deg.uni}
                onChange={this.handleUniChange}
              />
            </div>
            <div className="text">
              <Text
                id={deg.id}
                value={"Coursework: " + deg.coursework}
                onChange={this.handleCourseworkChange}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Education;
