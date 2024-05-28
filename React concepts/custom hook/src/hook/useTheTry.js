import { useState } from "react";

const useTheTry = (intit, value) => {
  const [count, setCount] = useState(intit);

  function increment() {
    setCount((pre) => pre + value);
  }

  function decrement() {
    setCount((pre) => pre - value);
  }

  return [count, increment, decrement];
};

export default useTheTry;
