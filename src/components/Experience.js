import React, { Component } from 'react';
import Heading from './utils/Heading';
import Text from './utils/Text';
import _ from 'lodash';

class Experience extends Component {
  constructor(props) {
    super(props);

    const sample = {
      id: _.uniqueId('section-'),
      company: "Amazon",
      role: 'Software Developer Intern',
      loc: 'Delhi, IN | May 2021 - July 2021',
      achievements: [
        {
          id: _.uniqueId('item-'),
          text: "Designed and implemented a dashboard using React and TypeScript to visualize data stored in DynamoDB, decreasing time to understand delivery driver work sessions by over 10 times."
        },
        {
          id: _.uniqueId('item-'),
          text: "Ensured only authorized employees have access to the application by creating an AWS Lambda@Edge function to intercept and sign valid requests"
        },
        {
          id: _.uniqueId('item-'),
          text: "Devised and deployed the infrastructure in TypeScript through AWS CDK, then created efficient algorithms to process data from a custom REST API, so it could scale to handle millions of deliveries."
        },
        {
          id: _.uniqueId('item-'),
          text: "Setup a CI/CD pipeline and exceeded requirements in each stage, which lead to the application being pushed to production."
        }
      ]
    };

    this.state = {
      sampleSection: JSON.parse(JSON.stringify(sample)),
      sections: [
        JSON.parse(JSON.stringify(sample))
      ]
    }

    this.findSectionId = this.findSectionId.bind(this);
    this.findSectionIndex = this.findSectionIndex.bind(this);
    this.handleItemChange = this.handleItemChange.bind(this);
    this.handleCompanyChange = this.handleCompanyChange.bind(this);
    this.handleRoleChange = this.handleRoleChange.bind(this);
    this.handleLocChange = this.handleLocChange.bind(this);
    this.handleTextDelete = this.handleTextDelete.bind(this);
    this.handleTextAdd = this.handleTextAdd.bind(this);
    this.handleSectionAdd = this.handleSectionAdd.bind(this);
    this.handleSectionDel = this.handleSectionDel.bind(this);
  }

  findSectionId(id) {
    const sections = this.state.sections;
    for (let section of sections) {
      for (let achievement of section.achievements) {
        if (achievement.id == id) {
          return section.id;
        }
      }
    }
  }

  handleItemChange(value, id) {
    const sectionId = this.findSectionId(id);
    this.setState({
      sections: this.state.sections.map(section => {
        if (section.id == sectionId) {
          for (let achievement of section.achievements) {
            if (achievement.id == id) {
              achievement.text = value;
              break;
            }
          }
        }
        return section;
      })
    })
  }

  handleCompanyChange(value, id) {
    this.setState({
      sections: this.state.sections.map(section => {
        if (section.id == id) {
          section.company = value;
        }
        return section;
      })
    })
  }

  handleRoleChange(value, id) {
    this.setState({
      sections: this.state.sections.map(section => {
        if (section.id == id) {
          section.role = value;
        }
        return section;
      })
    })
  }

  handleLocChange(value, id) {
    this.setState({
      sections: this.state.sections.map(section => {
        if (section.id == id) {
          section.loc = value;
        }
        return section;
      })
    })
  }

  handleTextDelete(id) {
    const sectionId = this.findSectionId(id);
    this.setState({
      sections: this.state.sections.map(section => {
        if (section.id == sectionId && section.achievements.length > 1) {
          section.achievements = section.achievements.filter(item => item.id != id);
        }
        return section;
      })
    })
  }

  handleTextAdd(id) {
    const sectionId = this.findSectionId(id);
    this.setState({
      sections: this.state.sections.map(section => {
        if (section.id == sectionId) {
          let i = 0;
          for (i = 0; i < section.achievements.length; i++) {
            if (section.achievements[i].id == id) {
              break;
            }
          }
          i++;
          section.achievements.splice(i, 0, {
            id: _.uniqueId('item-'),
            text: 'Implemented XYZ library for ABC'
          });
        }
        return section;
      })
    })
  }

  findSectionIndex(id) {
    for (let i = 0; i < this.state.sections.length; i++) {
      if (this.state.sections[i].id == id) {
        return i;
      }
    }
  }

  handleSectionAdd(id) {
    const curSections = this.state.sections.filter(() => true);
    const index = this.findSectionIndex(id);
    const sample = JSON.parse(JSON.stringify(this.state.sampleSection));
    sample.id = _.uniqueId('section-');
    sample.achievements.forEach(achievement => {
      achievement.id = _.uniqueId('item-');
    })
    curSections.splice(index + 1, 0, sample);
    this.setState({
      sections: curSections
    })
  }

  handleSectionDel(id) {
    const curSections = this.state.sections.filter(() => true);
    if (curSections.length == 1) {
      return;
    }
    const index = this.findSectionIndex(id);
    curSections.splice(index, 1);
    this.setState({
      sections: curSections
    })
  }

  render() {
    return (
      <div className="section">
        <div className="section-name">
          <Text value="WORK EXPERIENCE"/>
        </div>
        {this.state.sections.map(section => 
          <div key={section.id}>
            <Heading
              id={section.id}
              section="experience"
              value={section.company}
              role={section.role}
              loc={section.loc}
              onAdd={this.handleSectionAdd}
              onDel={this.handleSectionDel}
              onCompanyChange={this.handleCompanyChange}
              onRoleChange={this.handleRoleChange}
              onLocChange={this.handleLocChange}
            />
            <ul className="text">
              {section.achievements.map(achievement => 
                <li key={achievement.id}>
                  <Text
                    value={achievement.text}
                    id={achievement.id}
                    onChange={this.handleItemChange}
                    onDel={this.handleTextDelete}
                    onAdd={this.handleTextAdd}
                    isEditable={true}
                  />
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default Experience;
