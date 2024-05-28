import React from "react";
import useCounter from "../hook/useCounter";

const ComponentTwo = () => {
  const [count, increment, decrement] = useCounter(1, 1);
  return (
    <div>
      <h2>Count = {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default ComponentTwo;
