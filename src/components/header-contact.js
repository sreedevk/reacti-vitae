import React, { Component } from 'react'
import ResumeData from '../data'

export default class HeaderContact extends Component {
  render(){
    return(
      <ul className="header-contact-ul">
        <li>
          <i className="fa fa-globe-asia"></i>
          <span className="header-contact-text">
            {
              `${ResumeData?.address?.street},
               ${ResumeData?.address?.city},
               ${ResumeData?.address?.state} - ${ResumeData?.address?.zip}`
            }
          </span>
        </li>
        <li>
          <i className="fas fa-envelope"></i>
          <span className="header-contact-text">{ResumeData?.email}</span>
        </li>
        <li>
          <i className="fas fa-address-card"></i>
          <span className="header-contact-text">{ResumeData?.phone}</span>
        </li>
      </ul>
    )
  }
}
