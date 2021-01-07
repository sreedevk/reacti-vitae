import React, { Component } from 'react';

export default class PersonalData extends Component {
  render(){
    return(
      <React.Fragment>
        <h2 className="section-title">
          <i className="fas fa-user-secret"></i>
          <span className="section-title-content">Personal Data</span>
        </h2>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <table className="pd-table">
              <tr>
                <th>Achievements</th>
                <td>
                  <ul className="pd-achievements-list">
                    <li>Electronic Keyboard Grade I - Trinity College of London</li>
                    <li>Guest Lectures at NGM College, Avinashilingam University for Women</li>
                    <li>Talk    - "Deep Web & Dark Net" @ Geek Nights Hosted by Thoughtworks, Inc. </li>
                    <li>Webinar - "Command Line Voodoo" Hosted by Sedin Technologies, Pvt. Ltd., </li>
                    <li>Webinar - "Ruby & Rails Tips & Tricks" Hosted by Sedin Technologies, Pvt. Ltd., </li>
                    <li>Webinar - "Materialized Views in Rails"</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th>Interests</th>
                <td>
                  Public Speaking, Blogging, OpenSource Contributions, Radiography (SDR & Amateur Radio), Music. 
                </td>
              </tr>
              <tr>
                <th>Date of Birth</th>
                <td>11/06/1997</td>
              </tr>
            </table>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
