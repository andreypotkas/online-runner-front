import React, { useContext, useEffect } from "react";
import { ThemeContext } from "@/context/themeContext";
import { ThemeModes } from "@/types/common.types";
import { Button } from "primereact/button";

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
    <Button
      raised
      rounded
      text
      outlined={theme === "light"}
      icon={theme === "light" ? "pi pi-sun" : "pi pi-moon"}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    ></Button>
  );
}

const MemoizedThemeSwitcher = React.memo(ThemeSwitcher);
export default MemoizedThemeSwitcher;
