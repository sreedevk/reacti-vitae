import React, { Component } from 'react'

export default class HeaderSocial extends Component {
  render(){
    return(
      <ul className="header-social">
        <li>
          <i className="fas fa-code-branch"></i>
          <span>@sreedevk</span>
        </li>
        <li>
          <i className="fab fa-linkedin"></i>
          <span>/in/ksreedev</span>
        </li>
        <li>
          <i className="fab fa-reddit-alien"></i>
          <span>/u/sdevk</span>
        </li>
        <li>
          <i className="fas fa-globe-asia"></i>
          <span>www.sree.dev</span>
        </li>

      </ul>
    )
  }
}
