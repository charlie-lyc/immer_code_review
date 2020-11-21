import React from "react";
import "../styles.css";

import Table from "./Table";
import Glossary from "./Glossary";

const glossaryData = [
  { id: 1, term: "react", description: "front-end frame-work" }
];
function App() {
  return (
    <div className="App">
      <h2>Start editing to see some magic happen!</h2>
      <hr />
      <br />
      <Table />
      <br />
      <hr />
      <Glossary items={glossaryData} />
    </div>
  );
}

export default App;
