import React, { Component } from 'react';
import constants from './constants';

class NavigationBar extends Component {
  render() {
    return (
      <div className="">
        <button
          onClick={() => this.props.toggleActiveContent(cosntants.LISTEN)}
          className={(this.props.activeContent === cosntants.LISTEN ? "button-primary" : "button") + " button margin2px"}>LISTEN</button>
        <button
          onClick={() => this.props.toggleActiveContent(cosntants.CURRENT)}
          className={(this.props.activeContent === cosntants.CURRENT ? "button-primary" : "button") + " button margin2px"}>CURRENT PROJECTS</button>
        <button
          onClick={() => this.props.toggleActiveContent(cosntants.CONTACT)}
          className={(this.props.activeContent === cosntants.CONTACT ? "button-primary" : "button") + " button margin2px"}> CONTACT</button>
      </div>
    );
  }
}

export default NavigationBar;
