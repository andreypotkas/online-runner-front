import React from "react";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

import "./InfoLine.scss";

import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "@/state/auth.state";

function InfoLine() {
  const navigate = useNavigate();
  const { user } = useAuthState();

  const handleClick = () => {
    navigate("/auth/login");
  };
  return (
    <div className="info-line">
      <div className="flex gap-2 text-3xl text-primary">Run connect</div>
      <div
        className="flex gap-2 flex-shrink-0 overflow-hidden p-1"
        style={{ background: "var(--surface-card)" }}
      >
        <ThemeSwitcher />
        {user ? (
          <div>user</div>
        ) : (
          <Button
            label="Войти"
            className="flex-shrink-0"
            onClick={handleClick}
          />
        )}
      </div>
    </div>
  );
}

const MemoizedInfoLine = React.memo(InfoLine);
export default MemoizedInfoLine;
