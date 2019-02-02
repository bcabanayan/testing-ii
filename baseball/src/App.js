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
  
  strikeHandler = () => {
    if (this.state.strikesCount < 2) {
      this.setState({
        strikesCount: this.state.strikesCount + 1
      });
    }
    else {
      this.setState({
        strikesCount: 0,
        ballsCount: 0
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Display 
          ballsCount={this.state.ballsCount}
          strikesCount={this.state.strikesCount}
        />
        <Dashboard 
          strikeHandler={this.strikeHandler}
        />
      </div>
    );
  }
}

export default App;
