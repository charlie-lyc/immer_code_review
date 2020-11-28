import React from "react";
import "../styles.css";
import NameForm from "./NameForm";
import EssayForm from "./EssayForm";
import FlavorForm from "./FlavorForm";
import Reservation from "./Reservation";

export default function App() {
  return (
    <div className="App">
      <h2>Start editing to see some magic happen!</h2>
      <hr />
      <br />
      <NameForm />
      <hr />
      <br />
      <EssayForm />
      <hr />
      <br />
      <FlavorForm />
      <hr />
      <br />
      <Reservation />
    </div>
  );
}
