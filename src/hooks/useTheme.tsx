import React, { createContext, ReactNode, useContext, useState } from "react";

import { ThemeContext } from "../ThemeProvider";
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be with value");
  }
  return context;
};
