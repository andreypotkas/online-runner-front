import { ThemeModes } from "@/types/common.types";
import { createContext, Dispatch, SetStateAction } from "react";

type ThemeContextType = {
  theme: ThemeModes;
  setTheme: Dispatch<SetStateAction<ThemeModes>>;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);
