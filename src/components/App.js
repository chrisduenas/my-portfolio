import React, { Component } from 'react';
import '../CSS/App.css';
import { Button } from 'semantic-ui-react';
import Nav from './Nav';
import Header from './Header';

class App extends Component {
  render() {
    return (
     <div className="bartender ui fluid">
       <Nav/>
       <Header/>
          <Button>Hello</Button>
          <Button>WORLD</Button>
     </div>
    );
  }
}

export default App;

