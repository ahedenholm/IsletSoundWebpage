import React, { Component } from 'react';
import ProjectInfo from './ProjectInfo';
import FallenGodsBanner from '../assets/images/FallenGodsBanner.png';

class CurrentProjects extends Component {
  render() {
    return (
      <div className={(this.props.hidden ? "displayNone" : "") + " animFadeIn"}>
        <ProjectInfo
          gameBanner={FallenGodsBanner}
          gameTrailer="https://www.youtube.com/embed/DBodb6NSIL0"
          twitter={{ link: "", text: "Twitter" }}
          facebook={{ link: "", text: "Facebook" }}
          homepage={{ link: "", text: "Home page" }} />
      </div>
    );
  }
}

export default CurrentProjects;
