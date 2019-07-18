import React, { Component } from 'react';
import { getRandomInt } from '../Utility';

const randomizedTunesArray = [
  // demoreel
  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/185023185&amp;color=%23ff5500&amp;inverse=false&amp;auto_play=false&amp;show_user=false",
  // eloryn
  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/330082702&color=%23ff5500&inverse=false&auto_play=false&show_user=false",
  // watchingthenighttimethief
  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/141150491&color=%23ff5500&inverse=false&auto_play=false&show_user=false",
  // signsinthesnow 
  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/148912001&color=%23ff5500&inverse=false&auto_play=false&show_user=false",
];

class DemoReelWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trackToShow: randomizedTunesArray[1]
    }
  }
  componentWillMount(){
    this.setState({ trackToShow: randomizedTunesArray[getRandomInt(randomizedTunesArray.length)]});
  }
  render() {
    return (
      <div className={"positionAbsolute top24 right24 animFadeIn"}>
        <iframe  width="100%" height="20" scrolling="no" frameBorder="no" allow="autoplay"
          src={this.state.trackToShow}></iframe>
      </div>
    );
  }
}

export default DemoReelWidget;

