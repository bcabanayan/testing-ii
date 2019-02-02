import React, { Component } from 'react';
import './App.css';
import Display from './Display.js';
import Dashboard from './Dashboard.js';

class App extends Component {
   constructor(props) {
     super(props);
     this.state = {
      ballsCount: 0,
      strikesCount: 0
     }
   } 


  render() {
    return (
      <div className="App">
        <Display 
          ballsCount={this.state.ballsCount}
          strikesCount={this.state.strikesCount}
        />
        <Dashboard />
      </div>
    );
  }
}

export default App;
