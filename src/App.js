import React, { Component } from 'react';

import isletLogo from './assets/images/logo200pxround.png';
import Contact from './components/Contact';
import CurrentProjects from './components/CurrentProjects';
import LandingPage from './components/LandingPage';
import Listen from './components/Listen';
import NavigationBar from './components/NavigationBar';
import DemoReelWidget from './components/DemoReelWidget';

const
  LANDINGPAGE = 'LANDINGPAGE',
  LISTEN = 'LISTEN',
  CURRENT = 'CURRENT',
  CONTACT = 'CONTACT';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeContent: LANDINGPAGE,
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
  render() {
    console.log('active content: ', this.state.activeContent);
    return (
      <div className="">
          <DemoReelWidget />
        <div className="container">
          <header id="header" className="displayFlex flexCenter flexColumn marginTop150px marginBottom35px">
            <h2 onClick={() => this.toggleActiveContent(LANDINGPAGE)}>Islet Sound</h2>
            {/* <img className="borderRadius50percent marginBottom35px" src={isletLogo} onClick={() => this.toggleActiveContent(LANDINGPAGE)}></img> */}
            <h5>Music production for games</h5>
            <div>
              <button
                onClick={() => this.toggleActiveContent(LISTEN)}
                className={(this.state.activeContent === LISTEN ? "button-primary" : "button") + " button margin2px"}>LISTEN</button>
              <button
                onClick={() => this.toggleActiveContent(CURRENT)}
                className={(this.state.activeContent === CURRENT ? "button-primary" : "button") + " button margin2px"}>CURRENT PROJECTS</button>
              <button
                onClick={() => this.toggleActiveContent(CONTACT)}
                className={(this.state.activeContent === CONTACT ? "button-primary" : "button") + " button margin2px"}> CONTACT</button>
            </div>
          </header>
          <section className="container">
            <LandingPage hidden={this.state.activeContent !== LANDINGPAGE} />
            <Listen hidden={this.state.activeContent !== LISTEN} />
            <CurrentProjects hidden={this.state.activeContent !== CURRENT} />
            <Contact hidden={this.state.activeContent !== CONTACT} />
          </section>
        </div>
      </div >
    );
  }
}

export default App;
