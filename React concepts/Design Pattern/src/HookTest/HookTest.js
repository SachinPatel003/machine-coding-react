import React from "react";
import useTestHook from "./useTestHook";

const HookTest = () => {
  const { count, inc, dec } = useTestHook(10, 6);

  return (
    <div>
      <div>{count}</div>
      <button onClick={inc}>Inc</button>
      <button onClick={dec}>Dec</button>
    </div>
  );
};

export default HookTest;
