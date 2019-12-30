import React, { Component } from 'react';
import '../CSS/App.css';
import Nav from './Nav';
import Header from './Header';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';
import zenscroll from 'zenscroll';


class App extends Component {
  render() {
    const defaultDuration = 1000;
    const edgeOffset = -9;
    zenscroll.setup(defaultDuration, edgeOffset)  

    return (
     <React.Fragment>
       <Nav/>
       <Header/>
       <AboutMe/>
       <Projects/>
       <Contact/>
     </React.Fragment>
    );
  }
}

export default App;

