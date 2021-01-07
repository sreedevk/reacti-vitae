import React, { Component } from 'react'
import QRCode from '../assets/images/qr.png'

export default class Notes extends Component {
  render() {
    return(
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="notes-card">
            <h4><i className="far fa-sticky-note"></i> Notes</h4>
            <img src={QRCode} className="qr-code"/>
          </div>
        </div>
      </div>
    )
  }
}
