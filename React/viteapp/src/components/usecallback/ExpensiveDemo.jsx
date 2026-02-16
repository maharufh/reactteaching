import { useState, useMemo } from "react";

const ExpensiveLagDemo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  // Heavy array to simulate real lag
  const bigArray = Array.from({ length: 5000000 }, (_, i) => i);

  // ----- WITHOUT useMemo -----
  const filteredWithout = bigArray.filter(num => num % 2 === 0);

  // ----- WITH useMemo -----
  const filteredWith = useMemo(() => {
    console.log("Filtering big array with useMemo...");
    return bigArray.filter(num => num % 2 === 0);
  }, []); // runs only once

  const increment = () => setCount(c => c + 1);
  const addTodo = () => setTodos(t => [...t, "New Todo"]);

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h1>React useMemo Lag Demo</h1>

      <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "20px" }}>
        <h2>My Todos</h2>
        {todos.map((todo, index) => <p key={index}>{todo}</p>)}
        <button onClick={addTodo}>Add Todo</button>
        <p style={{ color: "red" }}>
          Without useMemo: Click Add Todo → noticeable lag!
        </p>
      </div>

      <div style={{ border: "1px solid #f90", padding: "10px" }}>
        <h2>Count: {count}</h2>
        <button onClick={increment}>Increment</button>

        <h3>Filtered Array Length (Without useMemo)</h3>
        <p>{filteredWithout.length}</p>
        <p style={{ color: "red" }}>Recalculates every render → lag when adding todo</p>

        <h3>Filtered Array Length (With useMemo)</h3>
        <p>{filteredWith.length}</p>
        <p style={{ color: "green" }}>Calculates once → smooth re-render</p>
      </div>
    </div>
  );
};

export default ExpensiveLagDemo;
