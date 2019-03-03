import React, { Component } from 'react';
import './App.css';
import Nav from '../components/Nav/Nav';
import TitlePanel from '../components/TitlePanel/TitlePanel'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <TitlePanel />
      </div>
    );
  }
}

export default App;
