import React from "react";
import { observer } from "mobx-react-lite";

import { themeStore } from "store/ThemeStore";

import { breakBackgroundStyles, darkBackgroundStyles, lightBackgroundStyles } from "./styles.css";

function Background() {
  const { currentTheme } = themeStore;
  return (
    <>
      <div className={lightBackgroundStyles} style={{ opacity: currentTheme === "light" ? 1 : 0 }} />
      <div className={breakBackgroundStyles} style={{ opacity: currentTheme === "break" ? 1 : 0 }} />
      <div className={darkBackgroundStyles} style={{ opacity: currentTheme === "dark" ? 1 : 0 }} />
    </>
  );
}

export default observer(Background);
