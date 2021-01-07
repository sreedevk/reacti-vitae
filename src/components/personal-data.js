import React, { Component } from 'react';

export default class PersonalData extends Component {
  listAchievements(){
    const achievements = [
      "Electronic Keyboard Grade I - Trinity College of London",
      "Guest Lectures at NGM College, Avinashilingam University for Women",
      "Talk    - 'Deep Web & Dark Net' @ Geek Nights Hosted by Thoughtworks, Inc. ",
      "Webinar - 'Command Line Voodoo' Hosted by Sedin Technologies, Pvt. Ltd., ",
      "Webinar - 'Ruby & Rails Tips & Tricks' Hosted by Sedin Technologies, Pvt. Ltd., ",
      "Webinar - 'Materialized Views in Rails' Hosted by TarkaLabs."
    ]
    return achievements.map(function(achievement, index){
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
                  <td>
                    <div className="interests">
                      Public Speaking, Blogging, OpenSource Contributions, Radiography (SDR & Amateur Radio), Music. 
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>DOB</th>
                  <td><span className="dob">11/06/1997</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
