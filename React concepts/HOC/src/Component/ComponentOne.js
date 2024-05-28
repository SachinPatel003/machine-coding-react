import React from "react";
import UpdateComponent from "../hoc/UpdateComponent";

const ComponentOne = ({ count, increment, decrement }) => {
  return (
    <div>
      <h2>Count = {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default UpdateComponent(ComponentOne, 10, 10);
