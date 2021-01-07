import React, { Component } from 'react'

export default class InterpersonalSkills extends Component {
  renderIpSkills(){
    const ipSkills = [ "Emotional Intelligence", "Excellent Leadership Abilities", "Team Building Skills", "Responsibility & Accountability", "Stellar Communication Skills", "Conflict Resolution", "Problem Solving Skills"];

    const cols = 2;
    const chunkSize = Math.ceil(ipSkills.length / cols);
    const skillTable = [];

    for(var i=0; i<= ipSkills.length; i+=chunkSize) {
      var current_slice = [];
      ipSkills.slice(i, i+chunkSize).forEach(function(skill, index){
        current_slice.push(<li key={skill}>{ skill }</li>);
      })
      skillTable.push(current_slice);
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
