import React from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "primereact/button";

function AuthBtn() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/auth/login");
  };

  return (
    <Button
      icon="pi pi-user"
      label=""
      className="flex-shrink-0"
      onClick={handleLoginClick}
    />
  );
}

const MemoizedAuthBtn = React.memo(AuthBtn);
export default MemoizedAuthBtn;
