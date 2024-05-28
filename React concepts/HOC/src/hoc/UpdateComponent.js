import React, { useState } from "react";

const UpdateComponent = (Component, initialValue, value) => {
  const NewComponent = () => {
    const [count, setCount] = useState(initialValue);

    const increment = () => {
      setCount((prev) => prev + value);
    };

    const decrement = () => {
      setCount((prev) => prev - value);
    };

    return (
      <Component count={count} increment={increment} decrement={decrement} />
    );
  };
  return NewComponent;
};

export default UpdateComponent;
