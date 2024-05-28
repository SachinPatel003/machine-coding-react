import React from "react";
import Folder from "./Folder/Folder";
import explorer from "./Data/folderData";

function App() {
  return (
    <div>
      <Folder explorer={explorer} />
    </div>
  );
}

export default App;
