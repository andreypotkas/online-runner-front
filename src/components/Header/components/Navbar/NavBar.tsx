import React from "react";
import { useNavigate } from "react-router-dom";

import { MenuItem } from "primereact/menuitem";
import { TabMenu } from "primereact/tabmenu";
import "./NavBar.scss";

function NavBar() {
  const navigate = useNavigate();
  const items: MenuItem[] = [
    {
      label: "Главная",
      command: () => navigate("/coins"),
    },
    {
      label: "События",
      command: () => navigate("/arbitrage"),
    },
  ];

  return (
    <div id="header-nav">
      <TabMenu model={items} />
    </div>
  );
}

const MemoizedNavBar = React.memo(NavBar);
export default MemoizedNavBar;
