import React, { Component } from 'react';

import Contact from './components/Contact';
import CurrentProjects from './components/CurrentProjects';
import LandingPage from './components/LandingPage';
import Listen from './components/Listen';
import NavigationBar from './components/NavigationBar';
import DemoReelWidget from './components/DemoReelWidget';
import constants from './constants';
const version = require('../package.json').version;
const easteregg = 'Easter eggs for the curious: https://www.youtube.com/watch?v=KoZc9vjGmoA https://www.youtube.com/watch?v=fMZ4gHGAIkA https://www.youtube.com/watch?v=sIPmCqs3cnU&t=78s https://www.youtube.com/watch?v=HowbdxMKe1w https://www.youtube.com/watch?v=F6dGAZTj8xA https://www.youtube.com/watch?v=a-AthwabOLI https://www.youtube.com/watch?v=U-9rYC8RPu8' 

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
      <div className="displayNone">{version}</div>
      <div className="displayNone">{easteregg}</div>
        <DemoReelWidget />
        <div className="container animFadeIn">
          <header id="header" className="displayFlex flexCenter flexColumn marginTop150px marginBottom35px">
            <h2 id="titleText" onClick={() => this.toggleActiveContent(constants.LANDINGPAGE)}>Islet Sound</h2>
            <h5>Music production for games</h5>
            <NavigationBar activeContent={this.state.activeContent} toggleActiveContent={this.toggleActiveContent} />
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
