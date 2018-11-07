import React, { Component } from 'react';

class CurrentProjects extends Component {
  render() {
    const { projectInfo } = this.props;
    return (
      <div className="displayFlex flexCenter flexColumn">
        <img width="560" src={projectInfo.gameBanner} className="marginBottom4px maxWidth100percent" />
        <iframe width="560" height="315" src={projectInfo.gameTrailer} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen
          className="marginBottom10px maxWidth100percent"></iframe>
        <div className="marginBottom35px maxWidth100percent">
          {projectInfo.homepage ? <a href={projectInfo.homepage.link} target="_blank" rel="noopener noreferrer" className="marginRight5px" >{projectInfo.homepage.text}</a> : null}
          {projectInfo.facebook ? <a href={projectInfo.facebook.link} target="_blank" rel="noopener noreferrer" className="marginRight5px" >{projectInfo.facebook.text}</a> : null}
          {projectInfo.twitter ? <a href={projectInfo.twitter.link} target="_blank" rel="noopener noreferrer" className="marginRight5px" >{projectInfo.twitter.text}</a> : null}
          {projectInfo.soundcloud ? <a href={projectInfo.soundcloud.link} target="_blank" rel="noopener noreferrer" className="marginRight5px" >{projectInfo.soundcloud.text}</a> : null}
        </div>
      </div>
    );
  }
}

export default CurrentProjects;
