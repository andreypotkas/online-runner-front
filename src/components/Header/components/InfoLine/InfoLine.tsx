import React from "react";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

import "./InfoLine.scss";

import { Button } from "primereact/button";

function InfoLine() {
  return (
    <div className="info-line">
      <div className="flex gap-2 text-2xl text-primary">Online Runner</div>
      <div
        className="flex gap-2 flex-shrink-0 overflow-hidden p-1"
        style={{ background: "var(--surface-card)" }}
      >
        <ThemeSwitcher />
        <Button label="Войти" className="flex-shrink-0" />
      </div>
    </div>
  );
}

const MemoizedInfoLine = React.memo(InfoLine);
export default MemoizedInfoLine;
