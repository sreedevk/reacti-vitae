import React, { Component } from 'react'
import ResumeData from '../data'

export default class OpenSourceProjects extends Component {
  generateProjectCards() {
    return ResumeData.projects.map(project => {
      return (
        <div className="project-card" key={project.name}>
          <h1>{project.name}</h1>
          <p className="project-description">{project.description}</p>
        </div>
      )
    })
  }

  render() {
    return (
      <React.Fragment>
      <h2 className="section-title">
        <i className="fas fa-terminal"></i>
        <span className="section-title-content">Open Source Projects</span>
      </h2>
      <div className="project-card-holder">
        { this.generateProjectCards() }
      </div>
      </React.Fragment>
    )
  }
}
