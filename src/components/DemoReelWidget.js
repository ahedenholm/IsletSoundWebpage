
import React, { Component } from 'react';

class DemoReelWidget extends Component {
  constructor(props){
    super(props);
    this.state = {
      demoreelPlaying: false,
    }
  }
  toggleDemoReelPlaying = () => {
    this.setState({ demoreelPlaying: !this.state.demoreelPlaying });
  }
  render() {
    return (
      <div className={(this.props.demoreelPlaying ? "" : "positionAbsolute top24 right24") + " animFadeIn"}>
        <iframe onClick={this.toggleDemoReelPlaying} width={this.state.demoreelPlaying ? "15%" : "100%"} height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/185023185&amp;color=%23ff5500&amp;inverse=false&amp;auto_play=false&amp;show_user=false"></iframe>
      </div>
    );
  }
}

export default DemoReelWidget;

