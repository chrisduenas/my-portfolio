import React, { Component } from 'react';
import '../CSS/App.css';
import Nav from './Nav';
import Header from './Header';
import Projects from './Projects';
import Footer from './Footer';
import Details from './Details';

class App extends Component {
  render() {
    return (
     <div className="bartender ui fluid">
       <Nav/>
       <Header/>
       <Details/>
       <Projects/>
       <Footer/>
     </div>
    );
  }
}

export default App;

