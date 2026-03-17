import { style } from "@vanilla-extract/css";

import { vars } from "themes/contract.css";

export const viewStyles = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "28px",
  width: "100%",
  overflow: "hidden",
  margin: "auto",

  "@media": {
    "(max-width: 768px)": {
      gap: "20px",
      paddingBottom: "8px",
    },
  },
});

export const modeLabelStyles = style({
  fontSize: "12px",
  fontWeight: 600,
  color: vars.color.textMuted,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  transition: "color 0.4s ease",

  "@media": {
    "(max-width: 768px)": {
      fontSize: "11px",
    },
  },
});

export const pomadorosContainerStyles = style({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  maxWidth: "400px",

  "@media": {
    "(max-width: 768px)": {
      maxWidth: "300px",
    },
  },
});
