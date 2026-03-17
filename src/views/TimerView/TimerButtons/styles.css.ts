import { style } from "@vanilla-extract/css";

import { vars } from "themes/contract.css";

export const viewStyles = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "28px",
  width: "100%",
  height: "100%",
  overflow: "hidden",

  "@media": {
    "(max-width: 768px)": {
      gap: "18px",
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
});

export const comletedButtonsContainerStyles = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
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
    },
  },
});

export const buttonsContainerStyles = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "12px",

  "@media": {
    "(max-width: 768px)": {
      gap: "10px",
      flexWrap: "wrap",
    },
  },
});

export const buttonStyles = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "12px 28px",
  border: `1px solid ${vars.color.glassBorder}`,
  borderRadius: "9999px",
  backgroundColor: vars.color.glass,
  backdropFilter: vars.color.glassBlur,
  WebkitBackdropFilter: vars.color.glassBlur,
  boxShadow: vars.color.glassShadow,
  color: vars.color.text,
  fontSize: "14px",
  fontWeight: 500,
  cursor: "pointer",
  transition: "all 0.22s cubic-bezier(0.4, 0, 0.2, 1)",
  outline: "none",
  letterSpacing: "0.01em",

  ":hover": {
    backgroundColor: vars.color.glassHover,
    transform: "translateY(-1px)",
  },

  ":active": {
    transform: "scale(0.96)",
  },

  "@media": {
    "(max-width: 768px)": {
      padding: "11px 20px",
      fontSize: "13px",
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
