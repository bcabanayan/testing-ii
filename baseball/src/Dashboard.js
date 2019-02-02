import React, { Component } from 'react';
import './App.css';

class Dashboard extends Component {

  render() {
    return (
      <div>
        <button data-testid='strikeButton' onClick={this.props.strikeHandler}>
            Strike
        </button>
        <button data-testid='ballButton' onClick={this.props.ballHandler}>
            Ball
        </button>
        <button data-testid='foulButton' onClick={this.props.foulHandler}>
            Foul
        </button>
        <button data-testid='hitButton' onClick={this.props.hitHandler}>
            Hit
        </button>
      </div>
    );
  }
}

export default Dashboard;
