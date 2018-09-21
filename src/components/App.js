import React, { Component } from 'react';
import '../CSS/App.css';
import Nav from './Nav';
import Header from './Header';
import Projects from './Projects';
import Career from './Career';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
     <div className="bartender ui fluid">
       <Nav/>
       <Header/>
       <Projects/>
       <Career/>
       <Footer/>
     </div>
    );
  }
}

export default App;

