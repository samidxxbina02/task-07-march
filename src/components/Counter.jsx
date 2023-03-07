import React from "react";

const Counter = ({ counter, increment, decrement }) => {
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
