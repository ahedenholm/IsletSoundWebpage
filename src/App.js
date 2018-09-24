import React, { Component } from 'react';

import isletLogo from './assets/images/logo200pxround.png';
import Contact from './components/Contact';
import CurrentProjects from './components/CurrentProjects';
import LandingPage from './components/LandingPage';
import Listen from './components/Listen';
import NavigationBar from './components/NavigationBar';
import DemoReelWidget from './components/DemoReelWidget';
import constants from './components/constants';

import placeholderLogo from './assets/images/placeholder logo.png'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeContent: constants.LANDINGPAGE,
    }
  }
  toggleActiveContent = (content) => {
    this.setState({ activeContent: content });
  }
  slideTitleUp = () => {
    document.getElementById('img').classList.add('animSlideTitleUp');
  }
  slideTitleDown = () => {
    document.getElementById('img').classList.add('animSlideTitleDown');
  }

  // button primary colors  focus: #1EAEDB  #33C3F0
  // new colors 274b46, 274b46
  render() {
    return (
      <div className="">
        <DemoReelWidget />
        <div className="container animFadeIn">
          <header id="header" className="displayFlex flexCenter flexColumn marginTop150px marginBottom35px">
            {/* <img src={placeholderLogo} height="100" className="borderRadius50percent marignBottom35px" ></img> */}
            <h2 onClick={() => this.toggleActiveContent(constants.LANDINGPAGE)}>Islet Sound</h2>
            {/* <img className="borderRadius50percent marginBottom35px" src={isletLogo} onClick={() => this.toggleActiveContent(LANDINGPAGE)}></img> */}
            <h5>Music production for games</h5>
            <div className="">
              <NavigationBar activeContent={this.state.activeContent} toggleActiveContent={this.toggleActiveContent}/>
            </div>
          </header>
          <section className="">
            <LandingPage hidden={this.state.activeContent !== constants.LANDINGPAGE} />
            <Listen hidden={this.state.activeContent !== constants.LISTEN} />
            <CurrentProjects hidden={this.state.activeContent !== constants.CURRENT} />
            <Contact hidden={this.state.activeContent !== constants.CONTACT} />
          </section>
        </div>
      </div>
    );
  }
}

export default App;
