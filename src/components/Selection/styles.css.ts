import { style } from "@vanilla-extract/css";

import { vars } from "themes/contract.css";

export const settingContainerStyles = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "18px 20px",
  borderRadius: "16px",
  backgroundColor: vars.color.glass,
  border: `1px solid ${vars.color.glassBorder}`,
  backdropFilter: vars.color.glassBlur,
  WebkitBackdropFilter: vars.color.glassBlur,
  boxShadow: vars.color.glassShadow,
  cursor: "pointer",
  transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
  color: vars.color.text,
  fontSize: "15px",
  fontWeight: 500,

  ":hover": {
    backgroundColor: vars.color.glassHover,
    transform: "translateY(-1px)",
  },

  ":active": {
    transform: "translateY(0)",
  },

  "@media": {
    "(max-width: 768px)": {
      padding: "15px 16px",
      borderRadius: "14px",
      fontSize: "14px",
    },
  },
});

export const selectionContainerStyles = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  color: vars.color.accent,
  fontWeight: 600,
  fontSize: "14px",

  "@media": {
    "(max-width: 768px)": {
      gap: "6px",
      fontSize: "13px",
    },
  },
});

export const arrowStyles = style({
  width: "8px",
  height: "8px",
  borderRight: `2px solid ${vars.color.accent}`,
  borderBottom: `2px solid ${vars.color.accent}`,
  transform: "rotate(-45deg)",
  transition: "transform 0.3s ease",
  marginLeft: "2px",
  marginTop: "-2px",
});

export const arrowOpenStyles = style({
  transform: "rotate(45deg)",
  marginTop: "2px",
});
