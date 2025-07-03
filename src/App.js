import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App" style={{ textAlign: "start", padding: "20px" }}>
      <h1>Counter App</h1>
      <p style={{ fontSize: "18px" }}>Count: {count}</p>
      <button
        name="Increment"
        style={{ padding: "10px 30px", marginRight: "10px" }}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        name="Decrement"
        style={{ padding: "10px 30px" }}
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
    </div>
  );
}

export default App;
