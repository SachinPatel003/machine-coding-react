import React from "react";
import UpdatedComponent from "../hoc/UpdateComponent";

const ComponentTwo = ({ count, increment, decrement }) => {
  return (
    <div>
      <h2>Count = {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default UpdatedComponent(ComponentTwo, 5, 5);
