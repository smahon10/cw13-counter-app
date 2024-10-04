import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const updateCounter = (action: "increment" | "decrement" | "reset"): void => {
    if (action === "increment") {
      setCount(count + 1);
    } else if (action === "decrement") {
      setCount(count - 1);
    } else if (action === "reset") {
      setCount(0);
    }
  };

  useEffect(() => {
    console.log("Count updated:", count);
  }, [count]);

  return (
    <div>
      <div className="control">
        <button
          id="reset"
          onClick={() => {
            updateCounter("reset");
          }}
        >
          ↻
        </button>
      </div>
      <div id="counter">{count}</div>
      <div className="control">
        <button
          id="decrement"
          onClick={() => {
            updateCounter("decrement");
          }}
        >
          -
        </button>
        <button
          id="increment"
          onClick={() => {
            updateCounter("increment");
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;