import React, { Component } from 'react'
import ResumeData from '../data'

class EducationalInstitution extends Component {
  render() {
    return (
      <div className="row education-row">
        <div className="col-lg-10 col-md-10 col-sm-10">
          <h3 className="degree">{this.props.degree}</h3>
          <h4 className="university">
            {this.props.university}.
            <span className="university-location"> {this.props.location}</span>
          </h4>
          <p className="education-description"><i>{this.props.description}</i></p>
        </div>
        <div className="col-lg-1 col-md-1 col-sm-1">
          <span className="education-year-of-comp">
            {this.props.year_of_completion}
          </span>
        </div>
      </div>
    );
  }
}

export default class Education extends Component {
  listEducation() {
    return ResumeData["education"].map((ed) => {
      return (
        <EducationalInstitution
          key={ed.degree}
          degree={ed.degree}
          location={ed.location}
          year_of_completion={ed.year_of_completion}
          university={ed.university}
          description={ed.description}
        />
      )
    });
  }

  render() {
    return (
      <React.Fragment>
        <h2 className="section-title">
          <i className="fas fa-university"></i>
          <span className="section-title-content">Education</span>
        </h2>
        {this.listEducation()}
      </React.Fragment>
    )
  }
}
