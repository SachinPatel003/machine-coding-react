import React from "react";
import ComponentOne from "./components/ComponentOne";
import ComponentTwo from "./components/ComponentTwo";
import CompoundComp from "./compoundComponent/Card";
import NormalComponent from "./compoundComponent/NormalComponent";
import ToggleExample from "./customHook/ToggleExample";
import HookTest from "./HookTest/HookTest";

const App = () => {
  return (
    <>
      {/* <div>HOC</div>
      <ComponentOne name={"Sachin"} />
      <ComponentTwo name={"Patel"} /> */}

      {/* <>Compound Component</>
      <NormalComponent /> */}

      <>Custom Hook</>
      {/* <ToggleExample /> */}
      <HookTest />
    </>
  );
};

export default App;
