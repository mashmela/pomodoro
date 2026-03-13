import React from "react";
import { observer } from "mobx-react-lite";

import { themeStore } from "store/ThemeStore";

interface ThemeProviderProps {
  children: React.ReactNode;
}

function ThemeProvider({ children }: ThemeProviderProps) {
  return <div className={themeStore.currentThemeStyles}>{children}</div>;
}

export default observer(ThemeProvider);
