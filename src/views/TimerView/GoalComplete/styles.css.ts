import { style } from "@vanilla-extract/css";

import { vars } from "themes/contract.css";

export const goalCompleteContainerStyles = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  width: "480px",
  margin: "0 auto",
  padding: "0 20px",
  position: "relative",
});

export const messageStyles = style({
  fontSize: "clamp(4rem, 12vw, 7rem)",
  fontWeight: 700,
  textAlign: "center",
  letterSpacing: "-0.04em",
  color: vars.color.timerText,
  transition: "color 0.4s ease",
  lineHeight: 1,

  selectors: {
    "&:hover": {
      transform: "scale(1.015)",
    },
  },

  "@media": {
    "(max-width: 768px)": {
      fontSize: "clamp(3rem, 10vw, 5rem)",
      letterSpacing: "-0.02em",
    },
  },
});

export const comletedButtonStyles = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "4px",
  background: "none",
  padding: "5px 14px",
  fontSize: "12px",
  color: vars.color.textMuted,
  cursor: "pointer",
  transition: "all 0.2s ease",
  border: "none",

  ":hover": {
    color: vars.color.text,
  },
});
