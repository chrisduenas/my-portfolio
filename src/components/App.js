import React, { Component } from 'react';
import '../CSS/App.css';
import Nav from './Nav';
import Header from './Header';
import Projects from './Projects';
import About from './About';

class App extends Component {
  render() {
    return (
     <div className="bartender ui fluid">
       <Nav/>
       <Header/>
       <Projects/>
        <About/>

     </div>
    );
  }
}

export default App;

