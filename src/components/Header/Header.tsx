import React from "react";

import AuthBar from "./components/AuthBar/AuthBar";
import NavBar from "./components/Navbar/NavBar";

import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <AuthBar />
      <NavBar />
    </div>
  );
}
const MemoizedHeader = React.memo(Header);
export default MemoizedHeader;
