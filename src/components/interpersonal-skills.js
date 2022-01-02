import React, { Component } from 'react'
import ResumeData from '../data'

export default class InterpersonalSkills extends Component {
  renderIpSkills(){
    const ipSkills = ResumeData?.interpersonal_skills;
    const cols = 2;
    const chunkSize = Math.ceil(ipSkills.length / cols);
    const skillTable = [];

    for(var i=0; i<= ipSkills.length; i+=chunkSize) {
      skillTable.push(
        ipSkills.slice(i, i+chunkSize).map(function(skill, index){
          return (<li key={skill}>{ skill }</li>);
        })
      );
    }

    return skillTable.map(function(skillset, index){
      return(
        <div className={`col-lg-${12/cols} col-md-${12/cols} col-sm-12`} key={`skillset_${index}`}>
          <ul className="interpersonal-skills">
            { skillset }
          </ul>
        </div>
      )
    });
  }

  render(){
    return(
      <React.Fragment>
        <h2 className="section-title">
          <i className="fas fa-network-wired"></i>
          <span className="section-title-content">Interpersonal Skills</span>
        </h2>
        <div className="row ip-skills-container">
          { this.renderIpSkills() }
        </div>
      </React.Fragment>
    )
  }
}
