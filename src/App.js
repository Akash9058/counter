import "./styles.css";
import Counter from "./Counter";
import { useState } from "react";
export default function App() {
  const [count, setCount] = useState(0);
  const handleIncrementTwo = () => {
    setCount(count + 2);
  };
  const squareIncrement = () => {
    setCount(count * count);
  };
  const doubleIncrement = () => {
    setCount(count * 2);
  };
  const dividedByTwo = () => {
    setCount(count / 2);
  };
  const handleDecrementTwo = () => {
    setCount(count - 2);
  };

  return (
    <div className="App">
      {/* <Counter /> */}
      <h1>{count}</h1>
      <div style={{ padding: 20 }}>
        <button style={{ margin: 20 }} onClick={handleIncrementTwo}>
          ADD2!
        </button>
        <button style={{ margin: 20 }} onClick={squareIncrement}>
          Square!
        </button>
        <button style={{ margin: 20 }} onClick={doubleIncrement}>
          Double!
        </button>
        <button style={{ margin: 20 }} onClick={dividedByTwo}>
          Dividedby2!
        </button>
        <button style={{ margin: 20 }} onClick={handleDecrementTwo}>
          Subtract2!
        </button>
      </div>
    </div>
  );
}
