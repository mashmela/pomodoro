import { style } from "@vanilla-extract/css";

import { vars } from "themes/contract.css";

export const goalCompleteContainerStyles = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  width: "min(100%, 480px)",
  margin: "0 auto",
  padding: "0 20px",
  position: "relative",

  "@media": {
    "(max-width: 768px)": {
      width: "100%",
      padding: 0,
    },
  },
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

  "@media": {
    "(max-width: 768px)": {
      fontSize: "11px",
      textAlign: "center",
      padding: "4px 0",
    },
  },
});
