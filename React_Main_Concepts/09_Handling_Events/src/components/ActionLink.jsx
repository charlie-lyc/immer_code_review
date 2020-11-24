import React from "react";

class ActionLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isCliked: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.setState({ isClicked: !this.state.isClicked });
  }
  render() {
    return (
      <a href="https://reactjs.org/" onClick={this.handleClick}>
        {this.state.isClicked ? "Welcome" : "Click me"}
      </a>
    );
  }
}

export default ActionLink;
