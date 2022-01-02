import React, { Component } from 'react'
import ResumeData from '../data'

export default class Introduction extends Component {
  render(){
    return(
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <h2 className="section-title">
            <i className="fas fa-user-cog"></i>
            <span className="section-title-content">Introduction</span>
          </h2>
          <p className="section-para">{ ResumeData?.introduction }</p>
        </div>
      </div>
    );
  }
}
