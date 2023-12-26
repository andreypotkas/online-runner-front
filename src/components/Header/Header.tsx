import React from "react";
import { useNavigate } from "react-router-dom";

import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";

import logo from "@/assets/images/Header/logo.png";

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
              <img
                src={logo}
                alt="logo"
                style={{ width: "3rem", height: "3rem" }}
              />
              <div className="m-0 text-center flex-shrink-0">RunConnect</div>
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
