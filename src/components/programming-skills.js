import React, { Component } from 'react'
import ResumeData from '../data'
import $ from 'jquery'

class SkillProficiency extends Component {
  render() {
    return (
      <li>
        <span className="programming-skill">{this.props.skillName}</span>
        <div className="progress">
          <div className="progress-filled" style={{ "width": `${this.props.proficiency}%` }}></div>
        </div>
      </li>
    )
  }
}

export default class ProgrammingSkills extends Component {
  listSkills() {
    return ResumeData?.programming_skills.map(function(skill, index) {
      return (
        <SkillProficiency
          key={`skill_${index}`}
          skillName={skill.skill_name}
          proficiency={skill.proficiency}
        />
      )
    });
  }

  componentDidMount() {
    $('div[data-percentage]').remove();
  }

  render() {
    return (
      <React.Fragment>
        <h2 className="section-title">
          <i className="fas fa-terminal"></i>
          <span className="section-title-content">Programming Skills</span>
        </h2>
        <ul className="programming-skills-list">
          {this.listSkills()}
        </ul>
      </React.Fragment>
    );
  }
}
