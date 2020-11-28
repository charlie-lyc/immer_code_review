import React from "react";

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActivated: false };
    this.activateLasers = this.activateLasers.bind(this);
  }
  activateLasers() {
    this.setState({ isActivated: !this.state.isActivated });
  }
  render() {
    return (
      <button onClick={this.activateLasers}>
        {this.state.isActivated ? "Lasers Activated!" : "Activate Lasers"}
      </button>
    );
  }
}

export default ToggleButton;
