import React, { Component } from 'react';

class LandingPage extends Component {
  render() {
    return (
      <div className={(this.props.show ? "" : "displayNone") + " animFadeIn"}>
      </div>
    );
  }
}

export default LandingPage;
