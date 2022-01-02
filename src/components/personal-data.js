import React, { Component } from 'react';
import ResumeData from '../data';

export default class PersonalData extends Component {j
  listAchievements(){
    return ResumeData?.achievements.map(function(achievement, index){
      return(<li key={`achievement_${index}`}>{achievement}</li>)
    });
  }

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
              <tbody>
                <tr>
                  <th>ACHIEVEMENTS</th>
                  <td>
                    <ul className="pd-achievements-list">
                      { this.listAchievements() }
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>INTERESTS</th>
                  <td><div className="interests">{ResumeData?.interests}</div></td>
                </tr>
                <tr>
                  <th>DOB</th>
                  <td><span className="dob">{ResumeData?.date_of_birth}</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
