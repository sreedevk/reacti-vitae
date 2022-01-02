import React, { Component } from 'react'
import ResumeData from '../data'

export default class Footer extends Component {
  render(){
    return(
      <footer>
        <h4>
          <i className="far fa-copyright"></i>&nbsp;
          <span>
            Resumé of { `${ResumeData?.name?.first} ${ResumeData?.name?.last}` } | All Rights Reserved
          </span>
        </h4>
      </footer>
    )
  }
}
