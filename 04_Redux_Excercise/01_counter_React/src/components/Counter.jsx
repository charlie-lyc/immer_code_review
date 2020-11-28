import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }
  handleChange(event) {
    this.setState({ counter: event.target.value });
  }
  handleIcrement() {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  }
  handleDecrement() {
    this.setState((prevState) => ({ counter: prevState.counter - 1 }));
  }
  handleIcrementIfOdd() {
    this.setState((prevState) => {
      if (prevState.counter % 2 !== 0) {
        return { counter: prevState.counter + 1 };
      }
    });
  }
  handleIcrementAsync() {
    setTimeout(() => {
      this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    }, 1000);
  }
  render() {
    return (
      <div>
        <label>
          Clicked:{" "}
          <input
            value={this.state.counter}
            onChange={this.handleChange.bind(this)}
          />{" "}
          times
        </label>
        <button id="increment" onClick={this.handleIcrement.bind(this)}>
          {" "}
          +{" "}
        </button>
        <button id="decrement" onClick={this.handleDecrement.bind(this)}>
          {" "}
          -{" "}
        </button>
        <button
          id="incrementIfOdd"
          onClick={this.handleIcrementIfOdd.bind(this)}
        >
          Increment if odd
        </button>
        <button
          id="incrementAsync"
          onClick={this.handleIcrementAsync.bind(this)}
        >
          Increment async
        </button>
      </div>
    );
  }
}

export default Counter;
