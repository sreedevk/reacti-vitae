import React, { Component } from 'react'

export default class HeaderContact extends Component {
  render(){
    return(
      <ul className="header-contact-ul">
        <li>
          <i className="fa fa-globe-asia"></i>
          <span className="header-contact-text">BTM Layout, Bengaluru, Karnataka - 560029</span>
        </li>
        <li>
          <i className="fas fa-envelope"></i>
          <span className="header-contact-text">sreedevpadmakumar@gmail.com</span>
        </li>
        <li>
          <i className="fas fa-address-card"></i>
          <span className="header-contact-text">+91-9600928275</span>
        </li>
      </ul>
    )
  }
}
