import React from "react";

import Advantages from "./components/Advantages/Advantages";
import Events from "./components/Events/Events";
import Preview from "./components/Preview/Preview";

function Main() {
  return (
    <div className="layout-main-container">
      <Preview />
      <Advantages />
      <Events />
    </div>
  );
}

const MemoizedMain = React.memo(Main);
export default MemoizedMain;
