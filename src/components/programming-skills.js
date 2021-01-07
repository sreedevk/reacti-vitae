import React, { Component } from 'react'
import $ from 'jquery'

export default class ProgrammingSkills extends Component {
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
          <li>
            <span className="programming-skill">Ruby</span>
            <div className="progress">
              <div className="progress-filled" data-percentage="100"></div>
            </div>
          </li>
          <li>
            <span className="programming-skill">Javascript</span>
            <div className="progress">
              <div className="progress-filled" data-percentage="90"></div>
            </div>
          </li>
          <li>
            <span className="programming-skill">Python</span>
            <div className="progress">
              <div className="progress-filled" data-percentage="60"></div>
            </div>
          </li>
          <li>
            <span className="programming-skill">C/C++</span>
            <div className="progress">
              <div className="progress-filled" data-percentage="80"></div>
            </div>
          </li>
          <li>
            <span className="programming-skill">Rust</span>
            <div className="progress">
              <div className="progress-filled" data-percentage="60"></div>
            </div>
          </li>
          <li>
            <span className="programming-skill">Clojure</span>
            <div className="progress">
              <div className="progress-filled" data-percentage="30"></div>
            </div>
          </li>
          <li>
            <span className="programming-skill">Bash</span>
            <div className="progress">
              <div className="progress-filled" data-percentage="80"></div>
            </div>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}
