import React, { Component } from 'react'
import ResumeData from '../data'

class SoftwareCategory extends Component {
  render(){
    return(
      <tr key={`${this.props.categoryName}_cn`}>
        <th>{this.props.categoryName}</th>
        {this.props.categoryItems.map(function(categoryItem, index){
          return(<td key={`${index}_${categoryItem}_ci`}>{categoryItem}</td>);
        })}
      </tr>
    )
  }
}

export default class SoftwareAndTools extends Component {
  listSoftware(){
    const software = ResumeData?.software_and_tools;
    const softwareCategories = [];
    software.forEach(function(sftCat){
      softwareCategories.push(<SoftwareCategory
        key={`${sftCat.category_name}_cname`}
        categoryName={sftCat.category_name}
        categoryItems={sftCat.category_items}
      />);
    });
    return softwareCategories;
  }

  render(){
    return(
      <React.Fragment>
        <h2 className="section-title">
          <i className="fas fa-terminal"></i>
          <span className="section-title-content">Software & Tools</span>
        </h2>
        <table className="software-and-tools-table">
          <thead>
            <tr>
              <td colSpan="8"></td>
            </tr>
          </thead>
          <tbody>
            {this.listSoftware()}
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}
