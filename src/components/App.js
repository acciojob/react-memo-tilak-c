import React, { useState, useMemo } from "react";
import UseMemo from "./UseMemo";
import ReactMemo from "./ReactMemo";

const App = () => {
  const [todos, setTodos] = useState(["Initial Task"]);
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const todoCount = useMemo(() => {
    console.log("Calculating number of todos...");
    return todos.length;
  }, [todos.length]);

  const addTodo = () => {
    setTodos([...todos, "New todo"]);
  };

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  const handleSubmit = () => {
    if (inputValue.trim().length > 5) {
      setTodos([...todos, inputValue]);
      setInputValue("");
    } else {
      alert("Task must be more than 5 characters!");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Todo + Counter App</h2>

      <h3>Counter: {counter}</h3>
      <button onClick={increment}>Increment</button>

      <h3>Total Todos (useMemo): {todoCount}</h3>
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>

      <h3>Add Custom Task</h3>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter task (min 6 chars)"
      />
      <button onClick={handleSubmit}>Submit</button>

      <hr />
      <UseMemo count={counter} />
      <ReactMemo message="This is memoized" />
    </div>
  );
};

export default App;