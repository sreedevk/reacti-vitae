import React, { Component } from 'react'
import ResumeData from '../data'

export default class OpenSourceProjects extends Component {
  generateProjectCards() {
    return ResumeData.projects.map(project => {
      return (
        <div className="project-card" key={project.name}>
          <h1>{project.name}</h1>
          <p className="project-description">{project.description}</p>
          <div class="project-meta">
            <svg aria-hidden="true" height="22" viewBox="0 0 16 16" version="1.1" width="22" data-view-component="true" class="octicon octicon-star UnderlineNav-octicon hide-sm">
        <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
            </svg>
            <span className="g-star-text">{project.stars}</span>
            <img src="/fork.png" className="g-star"/>
            <span className="g-star-text">{project.forks}</span>
          </div>
             
          
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
