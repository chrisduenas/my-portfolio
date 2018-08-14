import React, { Component } from 'react';
import '../CSS/App.css';

class App extends Component {
  render() {
    return (
      <div className="ui fixed inverted menu">
        <div class="ui container">
          <a href="#" class="header item">
            Chris Duenas
          </a>
          <a href="#" class="header item">
            About Me
          </a>
          <a href="#" class="header item">
            Projects
          </a>
        </div>
      </div>
    );
  }
}

export default App;

