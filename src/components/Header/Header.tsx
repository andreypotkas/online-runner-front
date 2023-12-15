import React from "react";
import { FaRunning } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";

import MemoizedUserIcon from "./components/UserIcon/UserIcon";

import "./Header.scss";

function Header() {
  const navigate = useNavigate();

  const items: MenuItem[] = [
    {
      label: "Главная",
      command: () => navigate("/"),
    },
    {
      label: "События",
      command: () => navigate("/events"),
    },
  ];

  return (
    <header className="header-wrapper">
      <Menubar
        model={items}
        start={
          <>
            <div className="flex gap-2 text-3xl text-primary align-items-center ">
              <FaRunning />
              <span className="flex-shrink-0"> RunConnect</span>
            </div>
          </>
        }
        end={<MemoizedUserIcon />}
      />
    </header>
  );
}
const MemoizedHeader = React.memo(Header);
export default MemoizedHeader;
