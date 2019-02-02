import React, { Component } from 'react';
import './App.css';

class Display extends Component {
  render() {
    return (
      <div>
          <div>
            <h2 data-testid='balls'>Balls:</h2>
            <p>{this.props.ballsCount}</p>
          </div>
          <div>
            <h2 data-testid='strikes'>Strikes:</h2>
            <p>{this.props.strikesCount}</p>
          </div>
      </div>
    );
  }
}

export default Display;
