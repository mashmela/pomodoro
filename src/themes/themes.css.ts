import { createTheme } from "@vanilla-extract/css";

import { breakThemeBackground, darkThemeBackground, lightThemeBackground } from "./backgrounds";

import { vars } from "./contract.css";

export const lightTheme = createTheme(vars, {
  color: {
    bg: lightThemeBackground,
    glass: "rgba(255, 255, 255, 0.50)",
    glassBorder: "rgba(255, 255, 255, 0.75)",
    glassHover: "rgba(255, 255, 255, 0.65)",
    glassShadow:
      "0 8px 32px rgba(120, 120, 165, 0.18), 0 2px 8px rgba(120, 120, 165, 0.10), inset 0 1px 0 rgba(255, 255, 255, 0.80)",
    glassBlur: "blur(16px)",
    text: "#1c1c2e",
    textMuted: "rgba(60, 60, 100, 0.65)",
    accent: "#5b5ea6",
    accentText: "#ffffff",
    pomodoroFilled: "rgba(80, 80, 130, 0.70)",
    timerText: "rgba(28, 28, 46, 0.88)",
    inputBorder: "rgba(150, 150, 200, 0.40)",
  },
});

export const darkTheme = createTheme(vars, {
  color: {
    bg: darkThemeBackground,
    glass: "rgba(255, 255, 255, 0.07)",
    glassBorder: "rgba(255, 255, 255, 0.13)",
    glassHover: "rgba(255, 255, 255, 0.12)",
    glassShadow:
      "0 8px 32px rgba(0, 0, 0, 0.50), 0 2px 8px rgba(0, 0, 0, 0.30), inset 0 1px 0 rgba(255, 255, 255, 0.07)",
    glassBlur: "blur(16px)",
    text: "rgba(255, 255, 255, 0.93)",
    textMuted: "rgba(255, 255, 255, 0.52)",
    accent: "#8080d0",
    accentText: "#ffffff",
    pomodoroFilled: "rgba(180, 180, 255, 0.65)",
    timerText: "rgba(255, 255, 255, 0.93)",
    inputBorder: "rgba(255, 255, 255, 0.18)",
  },
});

export const restTheme = createTheme(vars, {
  color: {
    bg: breakThemeBackground,
    glass: "rgba(255, 255, 255, 0.45)",
    glassBorder: "rgba(200, 240, 200, 0.75)",
    glassHover: "rgba(255, 255, 255, 0.60)",
    glassShadow:
      "0 8px 32px rgba(40, 100, 40, 0.15), 0 2px 8px rgba(40, 100, 40, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.75)",
    glassBlur: "blur(16px)",
    text: "#1a2e1a",
    textMuted: "rgba(30, 70, 30, 0.62)",
    accent: "#4a8a4a",
    accentText: "#ffffff",
    pomodoroFilled: "rgba(60, 120, 60, 0.70)",
    timerText: "rgba(26, 46, 26, 0.88)",
    inputBorder: "rgba(90, 160, 90, 0.40)",
  },
});
