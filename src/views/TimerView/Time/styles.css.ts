import { style } from "@vanilla-extract/css";

import { vars } from "themes/contract.css";

export const timersStyles = style({
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
