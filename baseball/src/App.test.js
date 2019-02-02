import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Dashboard from './Dashboard.js';
import Display from './Display.js';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// DISPLAY COMPONENT TESTS

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

  it('redisplays with different ball count depending on props', () => {
    const { getByTestId, rerender } = render(<Display ballsCount={0}/>);
    expect(getByTestId('ballsCount').textContent).toBe('0');
    rerender(<Display ballsCount={1}/>);
    expect(getByTestId('ballsCount').textContent).toBe('1');
  });

  it('redisplays with different strike count depending on props', () => {
    const { getByTestId, rerender } = render(<Display strikesCount={0}/>);
    expect(getByTestId('strikesCount').textContent).toBe('0');
    rerender(<Display strikesCount={1}/>);
    expect(getByTestId('strikesCount').textContent).toBe('1');
  });

  it('strike button increments strike count', () => {
    const app = render(<App/>);
    const display = render(<Display/>);
    const dashboard = render(<Dashboard/>);
    const button = dashboard.getByTestId('strikeButton');
    const count = display.getByTestId('strikesCount');

    fireEvent.click(button);

    expect(count).toHaveTextContent('1');
  });

  it('three strikes resets counter', () => {
    const app = render(<App/>);
    const display = render(<Display/>);
    const dashboard = render(<Dashboard/>);
    const button = dashboard.getByTestId('strikeButton');
    const strikesCount = display.getByTestId('strikesCount');
    const ballsCount = display.getByTestId('ballsCount');

    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    expect(strikesCount).toHaveTextContent('0');
    expect(ballsCount).toHaveTextContent('0');
  });

  it('ball button increments ball count', () => {
    const app = render(<App/>);
    const display = render(<Display/>);
    const dashboard = render(<Dashboard/>);
    const button = dashboard.getByTestId('ballButton');
    const count = display.getByTestId('ballsCount');

    fireEvent.click(button);
    fireEvent.click(button);

    expect(count).toHaveTextContent('2');
  });

  it('four balls resets counter', () => {
    const app = render(<App/>);
    const display = render(<Display/>);
    const dashboard = render(<Dashboard/>);
    const button = dashboard.getByTestId('ballButton');
    const strikesCount = display.getByTestId('strikesCount');
    const ballsCount = display.getByTestId('ballsCount');

    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    expect(strikesCount).toHaveTextContent('0');
    expect(ballsCount).toHaveTextContent('0');
  });

  it('foul button increments strikes count to max of 2', () => {
    const app = render(<App/>);
    const display = render(<Display/>);
    const dashboard = render(<Dashboard/>);
    const button = dashboard.getByTestId('foulButton');
    const count = display.getByTestId('strikesCount');

    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    expect(count).toHaveTextContent('2');
  });
});

// DASHBOARD COMPONENT TESTS

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