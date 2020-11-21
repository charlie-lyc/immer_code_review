import React from "react";

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { temperature: "" };
  }
  handleChange(e) {
    this.setState({ temperature: e.target.value });
  }
  render() {
    return (
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input value={this.state.temperature} onChange={this.handleChange} />
        <BoilingVerdict celsius={parseFloat(this.state.temperature)} />
      </fieldset>
    );
  }
}

export default Calculator;
