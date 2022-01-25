import React, { Component } from "react"
import ResumeData from '../data';

class RecommendationElement extends Component {
  render() {
    return (
      <blockquote class="otro-blockquote">
        { this.props.content }
        div
        <span className="author" >{ this.props.author }</span>
        <span className="author_meta" >{ this.props.author_meta }</span>
      </blockquote>
    )
  }
}

export default class Recommendations extends Component {
  loadRecommndations() {
    return ResumeData.recommendations.map(recomm => {
      return (
        <RecommendationElement
          key={ recomm.author }
          author={ recomm.author}
          content={ recomm.content }
          author_meta={ recomm.author_meta }
        />
      )
    })
  }

  render() {
    return(
      <React.Fragment>
        <h2 className="section-title">
          <i className="fas fa-star"></i>
          <span className="section-title-content">Recommendations</span>
        </h2>
        { this.loadRecommndations() }
      </React.Fragment>
    )
  }
}
