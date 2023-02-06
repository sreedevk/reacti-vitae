import React, { Component } from 'react'
import HeaderContact from './header-contact.js'
import HeaderSocial from './header-social.js'
import ResumeData from '../data'

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="row">
          <div className="col-lg-9 col-md-7 col-sm-12">
            <h1 className="site-title">
              <span>{ResumeData?.name?.first.toUpperCase()}</span>
              <span>&nbsp;</span>
              <span className="last-name">{ResumeData?.name?.last.toUpperCase()}</span>
            </h1>
            <h4 className="designation">{ResumeData?.designation}</h4>
          </div>
          <div className="col-lg-3 col-md-5 col-sm-12">
            <HeaderContact />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <HeaderSocial />
          </div>
        </div>
      </header>
    );
  }
}
