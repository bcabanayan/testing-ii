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
  
  // strike button click handler

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

  // ball button click handler

  ballHandler = () => {
    if (this.state.ballsCount < 3) {
      this.setState({
        ballsCount: this.state.ballsCount + 1
      });
    }
    else {
      this.setState({
        strikesCount: 0,
        ballsCount: 0
      });
    }
  };

  // foul button click handler

  foulHandler = () => {
    if (this.state.strikesCount < 2) {
      this.setState({
        strikesCount: this.state.strikesCount + 1
      });
    }
  };  

  // hit button click handler

  hitHandler = () => {
    this.setState({
      strikesCount: 0,
      ballsCount: 0
    })
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
          ballHandler={this.ballHandler}
          foulHandler={this.foulHandler}
          hitHandler={this.hitHandler}
        />
      </div>
    );
  }
}

export default App;
