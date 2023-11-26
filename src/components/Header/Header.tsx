import React, { useEffect } from "react";

import "./Header.scss";
import { FaRunning } from "react-icons/fa";
import MemoizedNavBar from "./components/Navbar/NavBar";
import MemoizedUserIcon from "./components/UserIcon/UserIcon";
import MemoizedThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import MemoizedAuthBtn from "./components/AuthBtn/AuthBtn";

function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const header = document.getElementById("yourHeaderId");

      if (scrollPosition > 50) {
        header!.style.backgroundColor = "#ffffff";
      } else {
        header!.style.backgroundColor = "transparent";
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
