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
  position: "fixed",
  zIndex: 1,

  "@media": {
    "(max-width: 768px)": {
      display: "none",
    },
  },
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

  "@media": {
    "(max-width: 768px)": {
      width: "44px",
      height: "44px",
      padding: "8px",
      flexShrink: 0,
    },
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

  "@media": {
    "(max-width: 768px)": {
      width: "20px",
      height: "20px",
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

  "@media": {
    "(max-width: 768px)": {
      width: "44px",
      height: "44px",
    },
  },
});

export const mobileActionsStyles = style({
  display: "none",

  "@media": {
    "(max-width: 768px)": {
      display: "grid",
      gridTemplateColumns: "44px minmax(20px, 1fr) 44px 44px 44px",
      alignItems: "center",
      gap: "10px",
      position: "fixed",
      left: "16px",
      right: "16px",
      bottom: "calc(16px + env(safe-area-inset-bottom, 0px))",
      padding: "10px 14px",
      borderRadius: "22px",
      backgroundColor: vars.color.glass,
      border: `1px solid ${vars.color.glassBorder}`,
      backdropFilter: vars.color.glassBlur,
      WebkitBackdropFilter: vars.color.glassBlur,
      boxShadow: vars.color.glassShadow,
      zIndex: 20,
    },
  },
});

export const mobileSpacerStyles = style({
  width: "100%",
  minWidth: "20px",
  height: "1px",
});

export const mobileProfileButtonStyles = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 0,
  border: "none",
  background: "none",
  cursor: "pointer",
  borderRadius: "50%",
  transition: "transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)",

  ":active": {
    transform: "scale(0.92)",
  },
});
