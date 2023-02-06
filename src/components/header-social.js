import React, { Component } from 'react'
import ResumeData from '../data'

export default class HeaderSocial extends Component {
  formatSocial() {
    return ResumeData?.social.map(social_ent => {
      return (
        <li>
          <i className={social_ent?.icon}></i>
          <span>{social_ent?.handle}</span>
        </li>
      )
    })
  }

  render() {
    return (
      <ul className="header-social">
        {this.formatSocial()}
      </ul>
    )
  }
}
