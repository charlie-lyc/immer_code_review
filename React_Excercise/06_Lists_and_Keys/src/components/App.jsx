import React from "react";
import "../styles.css";
import NumberList from "./NumberList";
import Blog from "./Blog";

const numbersData = [1, 2, 3, 4, 5];
const postsData = [
  { id: 1, title: "Hello World", content: "Welcome to learning React!" },
  { id: 2, title: "Installation", content: "You can install React from npm." }
];

function App() {
  return (
    <div className="App">
      <h2>Start editing to see some magic happen!</h2>
      <hr />
      <br />
      <NumberList numbers={numbersData} />
      <hr />
      <br />
      <Blog posts={postsData} />
    </div>
  );
}

export default App;
