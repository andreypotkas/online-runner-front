import { createContext, Dispatch, SetStateAction } from "react";

import { ThemeModes } from "@/types/common.types";

type ThemeContextType = {
  theme: ThemeModes;
  setTheme: Dispatch<SetStateAction<ThemeModes>>;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);
