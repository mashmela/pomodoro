import { style } from "@vanilla-extract/css";

import { breakThemeBackground, darkThemeBackground, lightThemeBackground } from "themes/backgrounds";

const baseBackgroundStyles = style({
  minHeight: "100vh",
  width: "100vw",
  position: "fixed",
  opacity: 1,
  transition: "opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
});

export const lightBackgroundStyles = style([
  baseBackgroundStyles,
  {
    background: lightThemeBackground,
  },
]);

export const darkBackgroundStyles = style([
  baseBackgroundStyles,
  {
    background: darkThemeBackground,
  },
]);

export const breakBackgroundStyles = style([
  baseBackgroundStyles,
  {
    background: breakThemeBackground,
  },
]);
