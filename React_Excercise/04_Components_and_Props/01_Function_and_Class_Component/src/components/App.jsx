import React from "react";
import "../styles.css";

import Welcome from "./Welcome";

/* Class Component */
class App extends React.Component {
  render() {
    return (
      <div classNamex="App">
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
      </div>
    );
  }
}

/* Function Component */
// function App() {
//   return (
//     <div classNamex="App">
//       <Welcome name="Sara" />
//       <Welcome name="Cahal" />
//       <Welcome name="Edite" />
//     </div>
//   );
// }

export default App;
