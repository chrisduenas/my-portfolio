import React, { Component } from 'react';
import '../CSS/App.css';
import Nav from './Nav';
import Header from './Header';

class App extends Component {
  render() {
    return (
     <div className="bartender ui fluid">
       <Nav/>
       <Header/>
     </div>
    );
  }
}

export default App;

