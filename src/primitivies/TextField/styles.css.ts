import { style } from "@vanilla-extract/css";

import { vars } from "themes/contract.css";

export const inputStyles = style({
  padding: "14px 20px",
  fontSize: "15px",
  outline: "none",
  border: `1px solid ${vars.color.inputBorder}`,
  borderRadius: "12px",
  backgroundColor: vars.color.glass,
  backdropFilter: vars.color.glassBlur,
  WebkitBackdropFilter: vars.color.glassBlur,
  color: vars.color.text,
  transition: "all 0.2s ease",
  width: "100%",

  "::placeholder": {
    color: vars.color.textMuted,
  },

  ":focus": {
    borderColor: vars.color.accent,
    backgroundColor: vars.color.glassHover,
    boxShadow: `0 0 0 3px ${vars.color.accent}26`,
  },
});
