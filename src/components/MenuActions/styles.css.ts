import { style } from "@vanilla-extract/css";

import { vars } from "themes/contract.css";

export const actionsStyles = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "column",
  width: "76px",
  padding: "20px 14px",
  top: "24px",
  left: "24px",
  bottom: "24px",
  borderRadius: "24px",
  backgroundColor: vars.color.glass,
  border: `1px solid ${vars.color.glassBorder}`,
  backdropFilter: vars.color.glassBlur,
  WebkitBackdropFilter: vars.color.glassBlur,
  boxShadow: vars.color.glassShadow,
  flexShrink: 0,
  transition: "background-color 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease",
  position: "absolute",
  zIndex: 1,
});

export const actionsGroupStyles = style({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "6px",
});

export const buttonIconStyles = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  background: "none",
  cursor: "pointer",
  borderRadius: "50%",
  padding: "9px",
  transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
  width: "46px",
  height: "46px",

  ":hover": {
    backgroundColor: vars.color.glassHover,
    transform: "scale(1.08)",
  },

  ":active": {
    transform: "scale(0.92)",
  },
});

export const iconStyles = style({
  height: "22px",
  width: "22px",
  opacity: 0.75,
  filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.15))",
  transition: "opacity 0.2s ease",

  selectors: {
    [`${buttonIconStyles}:hover &`]: {
      opacity: 1,
    },
  },
});

export const imgUserStyles = style({
  height: "46px",
  width: "46px",
  cursor: "pointer",
  borderRadius: "50%",
  objectFit: "cover",
  border: `2px solid ${vars.color.glassBorder}`,
  boxShadow: vars.color.glassShadow,
  transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",

  ":hover": {
    transform: "scale(1.08)",
    borderColor: vars.color.accent,
  },
});
