import React from "react";
import TemperatureInput from "./TemperatureInput";

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

/***************************************************/
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = { temperature: "", scale: "c" };
  }
  handleCelsiusChange(temper) {
    this.setState({ scale: "c", temperature: temper });
  }
  handleFahrenheitChange(temper) {
    this.setState({ scale: "f", temperature: temper });
  }
  render() {
    const celsiusDegree =
      this.state.scale === "f"
        ? tryConvert(this.state.temperature, toCelsius)
        : this.state.temperature;
    const fahrenheitDegree =
      this.state.scale === "c"
        ? tryConvert(this.state.temperature, toFahrenheit)
        : this.state.temperature;
    return (
      <fieldset>
        <TemperatureInput
          scale="c"
          temperature={celsiusDegree}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheitDegree}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsiusDegree)} />
      </fieldset>
    );
  }
}

export default Calculator;
