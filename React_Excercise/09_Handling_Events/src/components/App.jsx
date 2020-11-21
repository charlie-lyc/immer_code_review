import React from "react";
import "../styles.css";

import ToggleButton from "./ToggleButton";
import ActionLink from "./ActionLink";

function App() {
  return (
    <div className="App">
      <h2>Start editing to see some magic happen!</h2>
      <hr />
      <br />
      <ToggleButton />
      <hr />
      <br />
      <ActionLink />
    </div>
  );
}

export default App;
