import React, { useEffect } from "react";
import { FaRunning } from "react-icons/fa";

import MemoizedAuthBtn from "./components/AuthBtn/AuthBtn";
import MemoizedNavBar from "./components/Navbar/NavBar";
import MemoizedThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import MemoizedUserIcon from "./components/UserIcon/UserIcon";

import "./Header.scss";

function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const header = document.getElementById("yourHeaderId");

      if (scrollPosition > 50) {
        header!.style.backgroundColor = "var(--surface-card)";
        header!.style.height = "6rem";
      } else {
        header!.style.backgroundColor = "transparent";
        header!.style.height = "7rem";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="header" id="yourHeaderId">
      <div className="flex gap-2 text-3xl text-primary align-items-center">
        <FaRunning />
        <span> Run connect</span>
        <MemoizedNavBar />
      </div>
      <div className="flex gap-2 flex-shrink-0 p-1">
        <MemoizedUserIcon />
        <MemoizedThemeSwitcher />
        <MemoizedAuthBtn />
      </div>
    </div>
  );
}
const MemoizedHeader = React.memo(Header);
export default MemoizedHeader;
