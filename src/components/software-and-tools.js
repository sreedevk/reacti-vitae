import React, { Component } from 'react'

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
    const software = [
      {
        "category_name": "Database",
        "category_items": ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "GraphQL", "", ""]
      },
      {
        "category_name": "WebApp Frameworks",
        "category_items": ["Rails", "ExpressJS", "Flask", "Django", "Padrino", "Sinatra", ""]
      },
      {
        "category_name": "Frontend Tools",
        "category_items": ["ReactJS", "Boostrap", "Foundation", "jQuery", "SCSS", "VueJS", "Gatsby"]
      },
      {
        "category_name": "Embedded Systems",
        "category_items": ["ESP-IDF", "FreeRTOS", "microPython", "mRuby", "", "", ""]
      },
      {
        "category_name": "Game Development",
        "category_items": ["SDL2", "DragonRuby", "p5.js", "Cairo", "Vulkan", "", ""]
      },
      {
        "category_name": "Test Frameworks",
        "category_items": ["RSpec", "Cucumber", "Watir (Automation)", "MiniTest", "", "", ""]
      },
      {
        "category_name": "Others",
        "category_items": ["ArchLinux", "Git", "Metasploit", "Sidekiq", "Wordpress", "Gentoo", ""]
      }
    ];
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
