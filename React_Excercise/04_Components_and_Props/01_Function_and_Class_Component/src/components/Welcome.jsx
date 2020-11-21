import React from "react";
import ReaecDOM from "react-dom";

/* Class Component */
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

/* Function Component */
// function Welcome(props) {
//   return <h1>Hello, {props.name}!</h1>;
// }

export default Welcome;
