import React, { useContext, useEffect } from "react";
import DayNightToggle from "react-day-and-night-toggle";

import { ThemeContext } from "@/context/themeContext";
import { ThemeModes } from "@/types/common.types";

function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext)!;

  const loadTheme = (theme: ThemeModes) => {
    const linkEl = document.getElementById("theme-link") as HTMLLinkElement;

    if (!linkEl) {
      const link = document.createElement("link") as HTMLLinkElement;
      link.id = "theme-link";
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = `themes/lara-${theme}-teal.css`; // Path to your default theme CSS file
      document.head.appendChild(link);
      return;
    }

    linkEl.href = `themes/lara-${theme}-teal.css`; // Path to your default theme CSS file
  };

  useEffect(() => {
    loadTheme(theme);
  }, [theme]);

  return (
    <>
      <DayNightToggle
        size={32}
        onChange={() => setTheme(theme === "light" ? "dark" : "light")}
        checked={theme === "dark"}
      />
    </>
  );
}

const MemoizedThemeSwitcher = React.memo(ThemeSwitcher);
export default MemoizedThemeSwitcher;
