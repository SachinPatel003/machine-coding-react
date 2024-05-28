import { useState } from "react";

function Folder({ explorer }) {
  const [isExpand, setIsExpand] = useState(false);
  return (
    <div>
      <>
        <div
          style={{ padding: "5px 0" }}
          onClick={() => setIsExpand(!isExpand)}
        >
          {explorer.name}
        </div>
        <div
          style={{ paddingLeft: "20px", display: isExpand ? "block" : "none" }}
        >
          {explorer?.items?.map((item) => {
            return (
              <div key={item.name}>
                <Folder explorer={item} />
              </div>
            );
          })}
        </div>
      </>
    </div>
  );
}

export default Folder;
