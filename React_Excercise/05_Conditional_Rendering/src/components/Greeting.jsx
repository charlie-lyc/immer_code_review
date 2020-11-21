import React from "react";

function UserGreeting() {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting() {
  return <h1>Please sign up</h1>;
}

function Greeting(props) {
  if (props.isLoggedIn) return <UserGreeting />;
  return <GuestGreeting />;
}

export default Greeting;
