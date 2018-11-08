import React, { Component } from 'react';
import twitterLogo from '../assets/images/Twitter_Logo_Blue.png'

class Contact extends Component {
  render() {
    return (
      <div className={(this.props.hidden ? "displayNone" : "") + " animFadeIn displayFlex flexCenter flexColumn"}>
        <div className="marginBottom35px">
          <a href="mailto:isletsound@gmail.com" id="mailTo"><strong> isletsound@gmail.com</strong></a>
        </div>
        <div className="marginBottom35px">
          <iframe width="32px" height="32px" allowtransparency="true" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/icon/?url=http%3A%2F%2Fsoundcloud.com%2Fisletsound&amp;color=orange_white&amp;size=32"></iframe>
        </div>
        <div className="marginBottom35px">
          <a href="https://twitter.com/IsletSound" target="_blank" rel="noopener noreferrer">
            <img src={twitterLogo} alt="Twitter" height="50" width="50"/>
          </a>
        </div>
      </div >
    );
  }
}

export default Contact;
