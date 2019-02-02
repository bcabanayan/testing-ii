import React, { Component } from 'react';
import './App.css';

class Dashboard extends Component {
  render() {
    return (
      <div>
          <button data-testid='strikeButton'>Strike</button>
          <button data-testid='ballButton'>Ball</button>
          <button data-testid='foulButton'>Foul</button>
          <button data-testid='hitButton'>Hit</button>
      </div>
    );
  }
}

export default Dashboard;
