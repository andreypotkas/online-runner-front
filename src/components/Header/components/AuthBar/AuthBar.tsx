import React from "react";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

import "./AuthBar.scss";
import MemoizedAuthBtn from "./components/AuthBtn/AuthBtn";

function InfoLine() {
  return (
    <div className="info-line">
      <div className="flex gap-2 text-3xl text-primary">Run connect</div>
      <div
        className="flex gap-2 flex-shrink-0 overflow-hidden p-1"
        style={{ background: "var(--surface-card)" }}
      >
        <ThemeSwitcher />
        <MemoizedAuthBtn />
      </div>
    </div>
  );
}

const MemoizedInfoLine = React.memo(InfoLine);
export default MemoizedInfoLine;
