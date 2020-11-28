import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
/*****************************************************/
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

/*****************************************************/
/* In line : Embedding 'map()' Execution */
// const numbersData = [1, 2, 3, 4, 5];
// ReactDOM.render(
//   <React.StrictMode>
//     <ul>
//       {numbersData.map((number) => (
//         <li>{number}</li>
//       ))}
//     </ul>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

/*****************************************************/
/* Out of line */
// function NumberList(props) {
//   const listItems = props.numbers.map((number) => {
//     return <li>{number}</li>;
//   });
//   return <ul>{listItems}</ul>;
// }
// const numbersData = [1, 2, 3, 4, 5];
// ReactDOM.render(
//   <React.StrictMode>
//     <NumberList numbers={numbersData} />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
