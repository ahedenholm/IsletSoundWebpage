import React, { Component } from 'react';

import Contact from './components/Contact';
import CurrentProjects from './components/CurrentProjects';
import LandingPage from './components/LandingPage';
import Listen from './components/Listen';
import NavigationBar from './components/NavigationBar';

const 
  INTRO = 'INTRO',
  LISTEN = 'LISTEN',
  CURRENT = 'CURRENT',
  CONTACT = 'CONTACT';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeContent: INTRO,
    }
  }
  toggleActiveContent = (content) => {
    this.setState({ activeContent : content });
  }
  render() {
    return (
      <div class="container">
        <section className="displayFlex flexCenter flexColumn marginTop150px">
          <h2>Islet Sound</h2>
          <h4>Music production for games</h4>
          <div>
            <button onClick={()=> this.toggleActiveContent(LISTEN)} className={(this.state.activeContent === LISTEN ? "button-primary" : "button") + " button margin2px" }>LISTEN</button>
            <button onClick={()=> this.toggleActiveContent(CURRENT)} className={(this.state.activeContent === CURRENT ? "button-primary" : "button") + " button margin2px"}>CURRENT PROJECTS</button>
            <button onClick={()=> this.toggleActiveContent(CONTACT)} className={(this.state.activeContent === CONTACT ? "button-primary" : "button") + " button margin2px"}> CONTACT</button>
          </div>
          <Listen />
        </section>
      </div>
    );
  }
}

export default App;
