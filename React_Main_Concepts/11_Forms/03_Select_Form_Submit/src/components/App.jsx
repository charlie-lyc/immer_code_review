import React from "react";
import "../styles.css";
import NameForm from "./NameForm";
import EssayForm from "./EssayForm";
import FlavorForm from "./FlavorForm";

export default function App() {
  return (
    <div className="App">
      <h2>Start editing to see some magic happen!</h2>
      <hr />
      <br />
      <NameForm />
      <EssayForm />
      <FlavorForm />
    </div>
  );
}
