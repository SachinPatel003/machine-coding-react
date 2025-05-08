import React from "react";
import useToggle from "./useToggle";

const ToggleExample = () => {
  const { value: isVisible, toggle, setTrue, setFalse } = useToggle();

  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      <button onClick={setTrue}>Show</button>
      <button onClick={setFalse}>Hide</button>

      {isVisible && <p>This text is visible!</p>}
    </div>
  );
};

export default ToggleExample;
