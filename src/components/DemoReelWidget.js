
import React, { Component } from 'react';

const randomizedTunes = {
  demoreel : "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/185023185&amp;color=%23ff5500&amp;inverse=false&amp;auto_play=false&amp;show_user=false",
  eloryn: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/330082702&color=%23ff5500&inverse=false&auto_play=false&show_user=false",
  watchingthenighttimethief: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/141150491&color=%23ff5500&inverse=false&auto_play=false&show_user=true",
  signsinthesnow: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/148912001&color=%23ff5500&inverse=false&auto_play=false&show_user=true",
}

class DemoReelWidget extends Component {
  constructor(props){
    super(props);
    this.state = {
      demoreelPlaying: false,
      tracktoshow: randomizedTunes.demoreel,
    }
  }
  componentWillMount(){
    // this.setState({ });
  }
  toggleDemoReelPlaying = () => {
    this.setState({ demoreelPlaying: !this.state.demoreelPlaying });
  }
  render() {
    //TODO random song in widget?
    return (
      <div className={(this.props.demoreelPlaying ? "" : "positionAbsolute top24 right24") + " animFadeIn"}>
        <iframe onClick={this.toggleDemoReelPlaying} width={this.state.demoreelPlaying ? "15%" : "100%"} height="20" scrolling="no" frameborder="no" allow="autoplay" 
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/185023185&amp;color=%23ff5500&amp;inverse=false&amp;auto_play=false&amp;show_user=false"></iframe>
      </div>
    );
  }
}

export default DemoReelWidget;

