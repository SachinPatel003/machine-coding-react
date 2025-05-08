import React from "react";
import counterHoc from "../hoc/counterHoc";

const ComponentOne = ({ name, count, increment, decrement }) => {
  return (
    <div>
      <div>{name}</div>
      <div>{count}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default counterHoc(ComponentOne, 10, 10);
