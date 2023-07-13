import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-container">
      <div className="counter-value">{count}</div>
      <div className="counter-buttons">
        <button className="counter-button" onClick={decrement}>Decrement</button>
        <button className="counter-button" onClick={increment}>Increment</button>
      </div>
    </div>
  );  
}

export default Counter;
