import React, { createContext, ReactNode, useContext, useState } from "react";
import { changeTheme, changeTheme as toggleTheme } from "@helpers/changeTheme";
import { themes } from "@themes/theme";

interface ThemeContextType {
  currentTheme: typeof themes.light | typeof themes.dark;
  changeTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

const storedTheme = (localStorage.getItem("theme") as "light" | "dark") || null;
const initialTheme = storedTheme === "light" ? themes.light : themes.dark;

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState(initialTheme);
  const changeTheme = () => {
    toggleTheme(currentTheme, setCurrentTheme);
  };
  return (
    <ThemeContext.Provider value={{ currentTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
