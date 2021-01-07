import React, { Component } from 'react';
import './resume.css';

import Header from './components/header.js'
import Tagline from './components/tagline.js'
import Introduction from './components/introduction.js'
import ProgrammingSkills from './components/programming-skills.js'
import TechnicalSkills from './components/technical-skills.js'
import Career from './components/career.js'
import Education from './components/education.js'
import Languages from './components/languages.js'
import SoftwareAndTools from './components/software-and-tools.js'
import PersonalData from './components/personal-data.js'
import InterpersonalSkills from './components/interpersonal-skills.js'
import Notes from './components/notes.js'
import Footer from './components/footer.js'

export default class Resume extends Component {
  render(){
    return(
      <React.Fragment>
        <div className="wrapper">
          <Header />
          <Tagline /> 
          <div className="container-fluid">
            <Introduction />
            <div className="row">
              <div className="col-lg-5 col-md-5 col-sm-12">
                <ProgrammingSkills />
              </div>
              <div className="col-lg-7 col-md-7 col-sm-12">
                <TechnicalSkills />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <Career />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <Education />
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12">
                <SoftwareAndTools />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <Languages />
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12">
                <InterpersonalSkills />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-5 col-md-5 col-sm-12">
                <PersonalData />
              </div>
              <div className="col-lg-7 col-md-7 col-sm-12">
                <Notes /> 
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Footer />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
