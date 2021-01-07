import React, { Component } from 'react'

export default class TechnicalSkills extends Component {
  technicalSkillTable(){
    const techSkills = [
      "Algorithms", "Data Structures", "Objected Oriented Design", "Functional Programming",
      "Dynamic Programming", "Systems Programming", "Machine Learning", "Web Development",
      "Design Patterns", "Software Architecture", "Data Visualization", "Concurrency & Parallelism",
      "Static Web Design", "SDR Programming", "Linux Systems", "Competitive Programming",
      "Game Development", "Graphics Programming", "Software Distribution",
      "Audio Programming", "Technical Documentation"
    ];

    const cols = 3;
    const chunkSize = techSkills.length / cols;
    const skillTable = [];

    for(var i=0; i<= techSkills.length; i+=chunkSize) {
      var current_slice = [];
      techSkills.slice(i, i+chunkSize).forEach(function(skill, index){
        current_slice.push(<li key={skill}>{ skill }</li>);
      })
      skillTable.push(current_slice);
    }

    return skillTable.map(function(skillset, index){
      return(
        <div className={`col-lg-${12/cols} col-md-${12/cols} col-sm-12`} key={`skillset_${index}`}>
          <ul className="technical-skills">
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
          <i className="fas fa-terminal"></i>
          <span className="section-title-content">Technical Skills</span>
        </h2>
        <div className="row technical-skills-container">
          { this.technicalSkillTable() }
        </div>
      </React.Fragment>
    )
  }
}
