import React, { Component } from 'react'


export default class Languages extends Component {
  listLanguages(index){
    const languageList = [
      { "name": "English", "proficiency": 5 },
      { "name": "Kannada", "proficiency": 3 },
      { "name": "Tamil", "proficiency": 4 },
      { "name": "Hindi", "proficiency": 4 },
      { "name": "Malayalam", "proficiency": 5 },
      { "name": "Arabic", "proficiency": 4 },
    ]

    const languageComponentList = [[], []];
    let columnSelector = 0;
    languageList.forEach((language) => {
      languageComponentList[columnSelector].push(
        <div className="row language-element" key={language.name}>
          <div className="col-6">
            <h4 className="language-name">{language.name}</h4>
          </div>
          <div className="col-6">
            <span className="proficiency-indicator">{'*'.repeat(language.proficiency || 0) }</span>
          </div>
        </div>
      );
      columnSelector = (columnSelector == 0 ? 1 : 0);
    });
    return languageComponentList[index];
  }

  render(){
    return(
      <React.Fragment>
        <h2 className="section-title">
          <i className="fas fa-language"></i>
          <span className="section-title-content">Languages</span>
        </h2>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
            { this.listLanguages(0)}
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            { this.listLanguages(1)}
          </div>
        </div>
      </React.Fragment>
    )
  }
}
