import React, { Component } from 'react';

class CurrentProjects extends Component {
  render() {
    const { gameBanner, gameTrailer, twitter, facebook, soundcloud, homepage } = this.props;
    return (
      <div className="displayFlex flexCenter flexColumn">
        <img width="560" src={gameBanner} className="marginBottom4px maxWidth100percent" />
        <iframe width="560" height="315" src={gameTrailer} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen
          className="marginBottom10px maxWidth100percent"></iframe>
        <div className="marginBottom35px maxWidth100percent">
          {homepage ? <a href={homepage.link} target="_blank" rel="noopener noreferrer" className="marginRight5px" >{homepage.text}</a> : null}
          {facebook ? <a href={facebook.link} target="_blank" rel="noopener noreferrer" className="marginRight5px" >{facebook.text}</a> : null}
          {twitter ? <a href={twitter.link} target="_blank" rel="noopener noreferrer" className="marginRight5px" >{twitter.text}</a> : null}
          {soundcloud ? <a href={soundcloud.link} target="_blank" rel="noopener noreferrer" className="marginRight5px" >{soundcloud.text}</a> : null}
        </div>
      </div>
    );
  }
}

export default CurrentProjects;
