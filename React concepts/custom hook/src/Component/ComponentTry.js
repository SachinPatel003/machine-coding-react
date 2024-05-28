import React from "react";
import useTheTry from "../hook/useTheTry";

const ComponentTry = () => {
  const [count, increment, decrement] = useTheTry(10, 10);
  return (
    <div>
      <div>{count}</div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default ComponentTry;
