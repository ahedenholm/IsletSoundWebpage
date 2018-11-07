import React, { Component } from 'react';
import ProjectInfo from './ProjectInfo';
import FallenGodsBanner from '../assets/images/FallenGodsBanner.png';

const fallenGods = {
  gameBanner: FallenGodsBanner,
  gameTrailer: "https://www.youtube.com/embed/DBodb6NSIL0",
  twitter: { link: "https://twitter.com/wwsgames", text: 'Twitter' },
  facebook: { link: 'https://www.facebook.com/WormwoodStudios/', text: 'Facebook' },
  homepage: { link: 'http://www.wormwoodstudios.com', text: 'Homepage' },
  soundcloud: { link: 'https://soundcloud.com/wormwoodstudios', text: 'Soundcloud'},
}
class CurrentProjects extends Component {
  render() {
    return (
      <div className={(this.props.hidden ? "displayNone" : "") + " animFadeIn"}>
        <ProjectInfo
          projectInfo={fallenGods}
        />
      </div>
    );
  }
}

export default CurrentProjects;
