import React, { Component } from 'react'
import ResumeData from '../data'

export default class Tagline extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <h4 className="tagline">{ResumeData?.tagline.toUpperCase()}</h4>
        </div>
      </div>
    );
  }
}
