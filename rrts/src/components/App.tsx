import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';

interface AppProps {
  color?: string;
}

export default class App extends Component<AppProps> {

  state = {
    counter: 0
  };
  
  onIncreament = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };

  onDecrement = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Counter: {this.state.counter}</p>
        <p>Color: {this.props.color}</p>
        <button onClick={this.onIncreament}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
      </header>
    </div>
    )
  }
}
