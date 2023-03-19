import React, { Component } from "react";

export default class counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  handleIncrementTwo = () => {
    this.setState({
      count: this.state.count + 2
    });
  };
  squareIncrement = () => {
    this.setState({
      count: this.state.count * this.state.count
    });
  };
  doubleIncrement = () => {
    this.setState({
      count: this.state.count * 2
    });
  };
  dividedByTwo = () => {
    this.setState({
      count: this.state.count / 2
    });
  };
  handleDecrementTwo = () => {
    this.setState({
      count: this.state.count - 2
    });
  };

  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <div>
          <button onClick={this.handleIncrementTwo}>ADD2!</button>
          <button onClick={this.squareIncrement}>Square!</button>
          <button onClick={this.doubleIncrement}>Double!</button>
          <button onClick={this.dividedByTwo}>Dividedby2!</button>
          <button onClick={this.handleDecrementTwo}>Subtract2!</button>
        </div>
      </>
    );
  }
}
