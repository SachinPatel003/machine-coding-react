import React, { useState } from "react";

const counterHoc = (Component, initial, step) => {
  const CounterHoc = (props) => {
    const [count, setCount] = useState(initial);

    const increment = () => setCount((pre) => pre + step);

    const decrement = () => setCount((pre) => pre - step);

    return <Component {...{ ...props, count, increment, decrement }} />;
  };

  return CounterHoc;
};

export default counterHoc;
