import React, { Component } from 'react';
import Heading from './Heading';
import Text from './Text';
import _ from 'lodash';

class Project extends Component {
  constructor(props) {
    super(props);

    const sample = {
      id: _.uniqueId('section-'),
      name: 'Automated Spear-Phisher',
      tech: 'Python, PySpark, Selenium, Apache, NLP, Big Data',
      desc: 'A security research tool to send targeted spam messages on either Facebook or Twitter. The program analyzes the feed of its target to increase the effectiveness of the messages.',
    }

    this.state = {
      sampleProject: JSON.parse(JSON.stringify(sample)),
      projects: [
        JSON.parse(JSON.stringify(sample))
      ]
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleTechChange = this.handleTechChange.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this);
    this.findProjectIndex = this.findProjectIndex.bind(this);
    this.handleProjectAdd = this.handleProjectAdd.bind(this);
    this.handleProjectDel = this.handleProjectDel.bind(this);
  }

  findProjectIndex(id) {
    for (let i = 0; i < this.state.projects.length; i++) {
      if (this.state.projects[i].id == id) {
        return i;
      }
    }
  }

  handleProjectAdd(id) {
    const curProjects = this.state.projects.filter(() => true);
    const index = this.findProjectIndex(id);
    const sample = JSON.parse(JSON.stringify(this.state.sampleProject));
    sample.id = _.uniqueId('section-')
    curProjects.splice(index + 1, 0, sample);
    this.setState({
      projects: curProjects
    })
  }

  handleProjectDel(id) {
    const curProjects = this.state.projects.filter(() => true);
    if (curProjects.length == 1) {
      return;
    }
    const index = this.findProjectIndex(id);
    curProjects.splice(index, 1);
    this.setState({
      projects: curProjects
    })
  }

  handleNameChange(value, id) {
    this.setState({
      projects: this.state.projects.map(project => {
        if (project.id == id) {
          project.name = value;
        }
        return project;
      })
    })
  }

  handleTechChange(value, id) {
    this.setState({
      projects: this.state.projects.map(project => {
        if (project.id == id) {
          project.tech = value;
        }
        return project;
      })
    })
  }

  handleDescChange(value, id) {
    this.setState({
      projects: this.state.projects.map(project => {
        if (project.id == id) {
          project.desc = value;
        }
        return project;
      })
    })
  }

  render() {
    return (
      <div className="section">
        <Text className="section-name" value="Projects" />
        {this.state.projects.map(project => 
          <div key={project.id}>
            <Heading
              id={project.id}
              section="project"
              value={project.name}
              loc={project.tech}
              onCompanyChange={this.handleNameChange}
              onLocChange={this.handleTechChange}
              onAdd={this.handleProjectAdd}
              onDel={this.handleProjectDel}
            />
            <Text
              id={project.id}
              value={project.desc}
              onChange={this.handleDescChange}
            />
          </div>
        )}
      </div>
    )
  }
}

export default Project;
