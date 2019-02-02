import React, { Component } from 'react';
import './App.css';
import Display from './Display.js';
import Dashboard from './Dashboard.js';

class App extends Component {


  render() {
    return (
      <div className="App">
        <Display />
        <Dashboard />
      </div>
    );
  }
}

export default App;
