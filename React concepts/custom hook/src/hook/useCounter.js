import { useState } from "react";

const useCounter = (initialValue, value) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount((prevCount) => prevCount + value);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - value);
  };

  return [count, increment, decrement];
};

export default useCounter;
