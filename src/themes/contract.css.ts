import { createThemeContract } from "@vanilla-extract/css";

export const vars = createThemeContract({
  color: {
    bg: null,
    glass: null,
    glassBorder: null,
    glassHover: null,
    glassShadow: null,
    glassBlur: null,
    text: null,
    textMuted: null,
    accent: null,
    accentText: null,
    pomodoroFilled: null,
    timerText: null,
    inputBorder: null,
  },
});
