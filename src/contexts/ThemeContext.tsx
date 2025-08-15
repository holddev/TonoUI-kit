import { createContext } from "react";
import type { Themes } from "../types/types";

interface ThemeContextType {
  theme: Themes;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)