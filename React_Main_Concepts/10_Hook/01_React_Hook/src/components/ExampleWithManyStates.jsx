import React, { useState } from "react";

function ExampleWithManyStates() {
  const [age, setAge] = useState(43);
  const [favoriteFruit, setFruit] = useState("Banana");
  const [todos, setTodos] = useState([
    { text: "Learn React Hook" },
    { text: "Code React Hook" }
  ]);
  function handleClick() {
    setTodos([
      { text: "Learn React Hook" },
      { text: "Code React Hook" },
      { text: "Eat yummy food" }
    ]);
    /* 'state' 를 변화시킬 수 있는 메소드는 오직 'setState' 뿐이다. */
    // todos.push({ text: "Eat yummy food" });
  }
  return (
    <div>
      <p>Your age is {age}.</p>
      <button onClick={() => setAge(age + 1)}>Click me</button>
      <p>Your favorite fruit is {favoriteFruit}.</p>
      <button onClick={() => setFruit("Kiwi")}>Change Fruit</button>
      <p>You have {todos.length} todos.</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default ExampleWithManyStates;
