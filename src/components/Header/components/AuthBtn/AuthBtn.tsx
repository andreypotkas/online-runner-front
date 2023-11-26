import { useAuthState } from "@/state/auth.state";
import { Button } from "primereact/button";
import React from "react";
import { useNavigate } from "react-router-dom";

function AuthBtn() {
  const navigate = useNavigate();
  const { user, logout } = useAuthState();

  const handleLoginClick = () => {
    navigate("/auth/login");
  };

  const handleLogoutClick = () => {
    logout();
  };

  return (
    <>
      {user ? (
        <Button
          icon="pi pi-sign-in"
          className="flex-shrink-0"
          onClick={handleLogoutClick}
        />
      ) : (
        <Button
          label="Войти"
          className="flex-shrink-0"
          onClick={handleLoginClick}
        />
      )}
    </>
  );
}

const MemoizedAuthBtn = React.memo(AuthBtn);
export default MemoizedAuthBtn;
