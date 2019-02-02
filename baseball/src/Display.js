import React, { Component } from 'react';
import './App.css';

class Display extends Component {
  render() {
    return (
      <div>
          <div>
            <h2 data-testid='balls'>Balls:</h2>
          </div>
          <div>
            <h2 data-testid='strikes'>Strikes:</h2>
          </div>
      </div>
    );
  }
}

export default Display;
