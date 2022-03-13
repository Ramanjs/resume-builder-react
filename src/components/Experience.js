import React, { Component } from 'react';
import Heading from './Heading';
import Text from './Text';
import _ from 'lodash';

class Experience extends Component {
  constructor(props) {
    super(props);

    const sample = {
      id: _.uniqueId('section-'),
      company: "Some Company",
      role: 'Software Developer Intern',
      loc: 'Delhi, IN | May 2021 - July 2021',
      achievements: [
        {
          id: _.uniqueId('item-'),
          text: "Created a XYZ feature to accomplish ABC"
        },
        {
          id: _.uniqueId('item-'),
          text: "Retrieved data XYZ for ABC"
        },
        {
          id: _.uniqueId('item-'),
          text: "Implemented XYZ library for ABC"
        },
        {
          id: _.uniqueId('item-'),
          text: "Utilized XYZ that increased A by B%"
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
            text: ' '
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
        <Text className="section-name" value="Work Experience"/>
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
            {section.achievements.map(achievement => 
              <Text
                key={achievement.id}
                value={achievement.text}
                id={achievement.id}
                onChange={this.handleItemChange}
                onDel={this.handleTextDelete}
                onAdd={this.handleTextAdd}
                isEditable={true}
              />
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Experience;
