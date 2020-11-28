import React, { useState } from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

function Example() {
  // "count"라는 새 상태 변수를 선언합니다
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
    <hr />
    <br />
    <Example />
  </React.StrictMode>,
  document.getElementById("root")
);
