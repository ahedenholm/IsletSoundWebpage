import React, { Component } from 'react';
import constants from './constants';

class NavigationBar extends Component {
  render() {
    return (
      <div className="">
        <button
          onClick={() => this.props.toggleActiveContent(constants.LISTEN)}
          className={(this.props.activeContent === constants.LISTEN ? "button-primary" : "button") + " button margin2px"}>LISTEN</button>
        <button
          onClick={() => this.props.toggleActiveContent(constants.CURRENT)}
          className={(this.props.activeContent === constants.CURRENT ? "button-primary" : "button") + " button margin2px"}>CURRENT PROJECTS</button>
        <button
          onClick={() => this.props.toggleActiveContent(constants.CONTACT)}
          className={(this.props.activeContent === constants.CONTACT ? "button-primary" : "button") + " button margin2px"}> CONTACT</button>
      </div>
    );
  }
}

export default NavigationBar;
