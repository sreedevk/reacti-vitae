import React, { Component } from 'react'

export default class TechnicalSkills extends Component {
  render(){
    return(
      <React.Fragment>
        <h2 className="section-title">
          <i className="fas fa-terminal"></i>
          <span className="section-title-content">Technical Skills</span>
        </h2>
        <div className="row technical-skills-container">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <ul className="technical-skills">
              <li>Algorithms & Data Structures</li>
              <li>Objected Oriented Design</li>
              <li>Functional Programming</li>
              <li>Dynamic Programming</li>
              <li>Systems Programming</li>
              <li>Machine Learning</li>
              <li>Web Application Development</li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <ul className="technical-skills">
              <li>Design Patterns</li>
              <li>Software Architecture</li>
              <li>Data Visualization</li>
              <li>Concurrency & Parallelism</li>
              <li>Static Web Design</li>
              <li>SDR Programming</li>
              <li>Linux Systems</li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <ul className="technical-skills">
              <li>Competitive Programming</li>
              <li>Game Development</li>
              <li>Graphics Programming</li>
              <li>Containerization & Distribution</li>
              <li>Audio Programming</li>
              <li>Technical Documentation</li>
              <li>Systems Automation</li>
            </ul>
          </div>
        </div>
        
      </React.Fragment>
    )
  }
}
