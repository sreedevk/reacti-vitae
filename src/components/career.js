import React, { Component } from 'react'

class CareerCompany extends Component {
  render(){
    return(
      <div className="row career-company-container">
        <div className="col-lg-2 col-md-2 col-sm-2">
          <span className="company-period-of-service">{ this.props.companyStart } - {this.props.companyEnd } </span>
        </div>
        <div className="col-lg-10 col-md-10 col-sm-10">
          <div className="career-company">
            <h3 className="career-company-name">
              { this.props.companyName }
              <span className="career-company-location">{ this.props.companyLocation}</span>
            </h3>
            <h4 className="career-company-designation">{ this.props.companyDesignation }</h4>
            <p className="career-company-summary">{ this.props.companySummary }</p>
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
  loadCompanies(){
    const companies = [
      {
        "name": "Infineye Technologies",
        "location": "Coimbatore, IN.",
        "summary": "Worked on creation and maintenance of an API service web application for college application processing.",
        "stack": "Python, Django, Postgresql, Javascript, jQuery",
        "start_date": "Dec, 2017",
        "end_date": "Feb, 2018",
        "designation": "Software Developer"
      },
      {
        "name": "HousingMan",
        "location": "Bengaluru, IN.",
        "summary": "Worked with various teams to design & develop data heavy API systems & Web Applications. Developed Highly efficient data visualization & data processing platforms and content management systems.",
        "stack": "Ruby, Ruby on Rails, Postgresql, Javascript, jQuery, php, Nginx, Passenger, Unicorn",
        "start_date": "Feb, 2018",
        "end_date": "Feb, 2019",
        "designation": "Software Engineer"
      },
      {
        "name": "Riskcovry",
        "location": "Bengaluru, IN.",
        "summary": "Designed & developed APIs for insurance sales meant for third party consumption. Integrated various solutions including payment gateways & insurance sale points. Created administrative & operations dashboards and various reporting tools that helped influence decisions.",
        "stack": "Ruby, Ruby on Rails, Postgresql, Javascript, jQuery, Python, Nginx, Passenger",
        "start_date": "Feb, 2019",
        "end_date": "Jan, 2020",
        "designation": "Software Engineer"
      },
      {
        "name": "TarkaLabs",
        "location": "Bengaluru, IN.",
        "summary": "Worked with client on architecting and implementing software development solutions, solving customer facing challenges and improving performance of highly data intensive systems.",
        "stack": "Ruby, Ruby on Rails, Postgresql, Javascript, jQuery, Python, Nginx, Puma, Docker, AWS",
        "start_date": "Jan, 2020",
        "end_date": "Present",
        "designation": "Senior Software Engineer"
      }
    ]
    const companyRenderList = [];
    companies.reverse().forEach((company) => {
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

  render(){
    return(
      <React.Fragment>
        <h2 className="section-title">
          <i className="fas fa-briefcase"></i>
          <span className="section-title-content">Career</span>
        </h2>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            { this.loadCompanies() }
          </div>
        </div>
      </React.Fragment>
    )
  }
}
