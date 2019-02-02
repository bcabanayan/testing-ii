import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Dashboard from './Dashboard.js';
import Display from './Display.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('The Display component', () => {

  it('renders the Display component', () => {
    render(<Display/>);
  }); 
  
  it('displays Balls description', () => {
    const component = render(<Display/>);
    const balls = component.getByTestId('balls');

    expect(balls).toHaveTextContent(/balls:/i);
  });

  it('displays Strikes description', () => {
    const component = render(<Display/>);
    const strikes = component.getByTestId('strikes');

    expect(strikes).toHaveTextContent(/strikes:/i);
  });
});

describe('The Dashboard component', () => {
  it('renders the Dashboard component', () => {
    render(<Dashboard/>);
  }); 

  it('displays Strike button', () => {
    const component = render(<Dashboard/>);
    const strikeButton = component.getByTestId('strikeButton');

    expect(strikeButton).toHaveTextContent(/strike/i);
  });

  it('displays Ball button', () => {
    const component = render(<Dashboard/>);
    const ballButton = component.getByTestId('ballButton');

    expect(ballButton).toHaveTextContent(/ball/i);
  });

  it('displays Foul button', () => {
    const component = render(<Dashboard/>);
    const foulButton = component.getByTestId('foulButton');

    expect(foulButton).toHaveTextContent(/foul/i);
  });

  it('displays Hit button', () => {
    const component = render(<Dashboard/>);
    const hitButton = component.getByTestId('hitButton');

    expect(hitButton).toHaveTextContent(/hit/i);
  });
});