import React, { Component } from 'react';
import '../CSS/App.css';
import Nav from './Nav';
import Header from './Header';
import Projects from './Projects';
import Contact from './Contact';


class App extends Component {
  render() {
    return (
     <div className="bartender scroll">
       <Nav/>
       <Header/>
       <Projects/>
       <Contact/>
     </div>
    );
  }
}

export default App;

