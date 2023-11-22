import React from "react";
import { useNavigate } from "react-router-dom";

import { MenuItem } from "primereact/menuitem";
import { TabMenu } from "primereact/tabmenu";

function NavBar() {
  const navigate = useNavigate();
  const items: MenuItem[] = [
    {
      label: "Главная",
      icon: "pi pi-fw pi-bitcoin",
      command: () => navigate("/coins"),
    },
    {
      label: "События",
      icon: "pi pi-fw pi-sync",
      command: () => navigate("/arbitrage"),
    },
  ];

  return <TabMenu model={items} />;
}

const MemoizedNavBar = React.memo(NavBar);
export default MemoizedNavBar;
