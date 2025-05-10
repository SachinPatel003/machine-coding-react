import React, { useState } from "react";

const useTestHook = (init, step) => {
  const [count, setCount] = useState(init);

  const inc = () => setCount((pre) => pre + step);

  const dec = () => setCount((pre) => pre - step);

  return { count, inc, dec };
};

export default useTestHook;
