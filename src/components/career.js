import React, { Component } from 'react'
import ResumeData from '../data'

class CareerCompany extends Component {
  loadCompanySummary() {
    return (
      <ol>
        {this.props.companySummary.map(csummary => <li>{csummary}</li>)}
      </ol>
    )
  }

  render() {
    return (
      <div className="row career-company-container">
        <div className="col-lg-2 col-md-2 col-sm-2">
          <span className="company-period-of-service">{this.props.companyStart} - {this.props.companyEnd} </span>
        </div>
        <div className="col-lg-10 col-md-10 col-sm-10">
          <div className="career-company">
            <h3 className="career-company-name">
              {this.props.companyName}
              <span className="career-company-location">{this.props.companyLocation}</span>
            </h3>
            <h4 className="career-company-designation">{this.props.companyDesignation}</h4>
            <p className="career-company-summary">{this.loadCompanySummary()}</p>
            <div className="company-tech-stack">
              <span className="company-tech-stack-descriptor">Tech Stack: </span>{this.props.companyStack}
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default class Career extends Component {
  loadCompanies() {
    const companyRenderList = [];
    ResumeData["career"].reverse().forEach((company) => {
      companyRenderList.push(
        <CareerCompany
          key={company.name}
          companyName={company.name}
          companyLocation={company.location}
          companySummary={company.summary}
          companyStack={company.stack}
          companyStart={company.start_date}
          companyEnd={company.end_date}
          companyDesignation={company.designation}
        />
      )
    });
    return companyRenderList;
  }

  render() {
    return (
      <React.Fragment>
        <h2 className="section-title">
          <i className="fas fa-briefcase"></i>
          <span className="section-title-content">Career</span>
        </h2>
        <div className="row">
          <div className="col-lg-10 col-md-10 col-sm-12">
            {this.loadCompanies()}
          </div>
        </div>
      </React.Fragment>
    )
  }
}
