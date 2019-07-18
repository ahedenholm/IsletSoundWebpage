import React, { Component } from 'react';

import Contact from './components/Contact';
import CurrentProjects from './components/CurrentProjects';
import LandingPage from './components/LandingPage';
import Listen from './components/Listen';
import NavigationBar from './components/NavigationBar';
import DemoReelWidget from './components/DemoReelWidget';
import constants from './constants';
const version = require('../package.json').version;
const easteregg = 'Easter eggs for the curious: '
  + '\nhttps://www.youtube.com/watch?v=KoZc9vjGmoA'
  + '\nhttps://www.youtube.com/watch?v=fMZ4gHGAIkA'
  + '\nhttps://www.youtube.com/watch?v=sIPmCqs3cnU&t=78s'
  + '\nhttps://www.youtube.com/watch?v=HowbdxMKe1w'
  + '\nhttps://www.youtube.com/watch?v=F6dGAZTj8xA'
  + '\nhttps://www.youtube.com/watch?v=a-AthwabOLI'
  + '\nhttps://www.youtube.com/watch?v=U-9rYC8RPu8'

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

  render() {
    return (
      <div>
        <div className="displayNone">{version}</div>
        <div className="displayNone">{easteregg}</div>
        <DemoReelWidget />
        <div className="container animFadeIn">
          <header id="header" className="displayFlex flexCenter flexColumn marginTop150px marginBottom35px">
            <h2 id="titleText" onClick={() => this.toggleActiveContent(constants.LANDINGPAGE)}>Islet Sound</h2>
            <h5>Music production for games</h5>
            <NavigationBar activeContent={this.state.activeContent} toggleActiveContent={this.toggleActiveContent} />
          </header>
          <section>
            <LandingPage show={this.state.activeContent === constants.LANDINGPAGE} />
            <Listen show={this.state.activeContent === constants.LISTEN} />
            <CurrentProjects show={this.state.activeContent === constants.CURRENT} />
            <Contact show={this.state.activeContent === constants.CONTACT} />
          </section>
        </div>
      </div>
    );
  }
}

export default App;
