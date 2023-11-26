import React from "react";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

import "./AuthBar.scss";
import MemoizedAuthBtn from "./components/AuthBtn/AuthBtn";
import MemoizedUserIcon from "./components/UserIcon/UserIcon";
import { FaRunning } from "react-icons/fa";

function InfoLine() {
  return (
    <div className="auth-bar">
      <div className="flex gap-2 text-3xl text-primary align-items-center">
        <FaRunning />
        <span> Run connect</span>{" "}
      </div>
      <div
        className="flex gap-2 flex-shrink-0 p-1"
        style={{ background: "var(--surface-card)" }}
      >
        <MemoizedUserIcon />
        <ThemeSwitcher />
        <MemoizedAuthBtn />
      </div>
    </div>
  );
}

const MemoizedInfoLine = React.memo(InfoLine);
export default MemoizedInfoLine;
