import React from "react";

import InfoLine from "./components/InfoLine/InfoLine";
import NavBar from "./components/Navbar/NavBar";

import "./Header.scss";

 function Header() {
  return (
    <div className="header">
      <InfoLine />
      <NavBar />
    </div>
  );
}
const MemoizedHeader = React.memo(Header)
export default MemoizedHeader;
