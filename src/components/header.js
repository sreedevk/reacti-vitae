import React, { Component } from 'react'
import HeaderContact from './header-contact.js'
import HeaderSocial from './header-social.js'

export default class Header extends Component {
  render(){
    return(
      <header>
        <div className="row">
          <div className="col-lg-7 col-md-7 col-sm-12">
            <h1 className="site-title">SREEDEV <span className="last-name">KODICHATH</span></h1>
            <h4 className="designation">Senior Software Engineer</h4>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12">
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
