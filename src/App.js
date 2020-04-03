import React, { Component } from 'react';
import './App.css';
import CounterButton from './CounterButton';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 0
    };
  }

  clickHandler = () => {
    let counter = this.state.text;
    counter++;
    const newState = { ...this.state };
    newState.text = counter;
    this.setState(newState);
  };

  render() {
    return (
      <div className="App">
        <CounterButton
          clickHandler={this.clickHandler}
          text={this.state.text}
        />
      </div>
    );
  }
}

export default App;
