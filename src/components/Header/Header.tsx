import React, { useEffect } from "react";
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
      command: () => navigate("/coins"),
    },
    {
      label: "События",
      command: () => navigate("/arbitrage"),
    },
  ];
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const header = document.getElementById("yourHeaderId");

      if (scrollPosition > 50) {
        header!.style.backgroundColor = "var(--surface-card)";
      } else {
        header!.style.backgroundColor = "transparent";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header-wrapper" id="yourHeaderId">
      <Menubar
        model={items}
        start={
          <>
            <div className="flex gap-2 text-3xl text-primary align-items-center ">
              <FaRunning />
              <span className="flex-shrink-0"> Run connect</span>
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
