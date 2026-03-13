import { style } from "@vanilla-extract/css";

import { vars } from "themes/contract.css";

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
  lineHeight: 1.5,
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

  ":disabled": {
    opacity: 0.45,
    cursor: "not-allowed",
    transform: "none",
  },
});
