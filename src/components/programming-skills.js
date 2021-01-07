import React, { Component } from 'react'
import $ from 'jquery'

class SkillProficiency extends Component {
  render(){
    return(
      <li>
        <span className="programming-skill">{this.props.skillName}</span>
        <div className="progress">
          <div className="progress-filled" style={{ "width": `${this.props.proficiency}%`}}></div>
        </div>
      </li>
    )
  }
}

export default class ProgrammingSkills extends Component {
  
  listSkills(){
    const skills = [
      { "skill_name": "Ruby", "proficiency": 100 },
      { "skill_name": "Javascript", "proficiency": 90 },
      { "skill_name": "Python", "proficiency": 60 },
      { "skill_name": "C/C++", "proficiency": 90 },
      { "skill_name": "Rust", "proficiency": 60 },
      { "skill_name": "Clojure", "proficiency": 40 },
      { "skill_name": "Shell Scripting", "proficiency": 60 },
    ];

    return skills.map(function(skill, index){
      return(
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

  render(){
    return(
      <React.Fragment>
        <h2 className="section-title">
          <i className="fas fa-terminal"></i>
          <span className="section-title-content">Programming Skills</span>
        </h2>
        <ul className="programming-skills-list">
          { this.listSkills() }
        </ul>
      </React.Fragment>
    );
  }
}
