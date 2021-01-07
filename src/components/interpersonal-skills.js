import React, { Component } from 'react'

export default class InterpersonalSkills extends Component {
  render(){
    return(
      <React.Fragment>
        <h2 className="section-title">
          <i className="fas fa-network-wired"></i>
          <span className="section-title-content">Interpersonal Skills</span>
        </h2>
        <div className="row ip-skills-container">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <ul className="technical-skills">
              <li>Emotional Intelligence</li>
              <li>Excellent Leadership Abilities</li>
              <li>Team Building Skills</li>
              <li>Responsibility & Accountability</li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <ul className="technical-skills">
              <li>Stellar Communication Skills</li>
              <li>Conflict Resolution</li>
              <li>Problem Solving Skills</li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
