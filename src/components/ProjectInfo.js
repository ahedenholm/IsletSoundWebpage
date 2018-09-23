import React, { Component } from 'react';

class CurrentProjects extends Component {
  render() {
    const { gameBanner, gameTrailer, twitter, facebook, homepage } = this.props;
    return (
      <div className="displayFlex flexCenter flexColumn">
        <img width="560" src={gameBanner} className="marginBottom35px" />
        <iframe width="560" height="315" src={gameTrailer} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen className="marginBottom35px"></iframe>
        <div className="marginBottom35px">
          <a href={twitter.link}>{twitter.text}</a>
          <a href={facebook.link}>{facebook.text}</a>
          <a href={homepage.link}>{homepage.text}</a>
        </div>
      </div>
    );
  }
}

export default CurrentProjects;
