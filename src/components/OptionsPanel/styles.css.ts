import { style, keyframes } from "@vanilla-extract/css";

import { vars } from "themes/contract.css";

const slideIn = keyframes({
  "0%": { transform: "translateX(100%)" },
  "100%": { transform: "translateX(0)" },
});

const slideOut = keyframes({
  "0%": { transform: "translateX(0)" },
  "100%": { transform: "translateX(100%)" },
});

const fadeIn = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

export const optionsPanelContainerStyles = style({
  position: "fixed",
  top: 0,
  right: 0,
  width: "320px",
  minHeight: "100vh",
  backgroundColor: vars.color.glass,
  backdropFilter: vars.color.glassBlur,
  boxShadow: vars.color.glassShadow,
  border: `1px solid ${vars.color.glassBorder}`,
  zIndex: 1000,
  overflowY: "auto",
  animation: `${slideIn} 0.3s ease forwards`,
  borderRadius: "24px 0 0 24px",

  "@media": {
    "(max-width: 768px)": {
      width: "min(100vw - 20px, 360px)",
      borderRadius: "20px 0 0 20px",
    },
  },
});

export const optionsPanelClosingStyles = style({
  animation: `${slideOut} 0.3s ease forwards`,
});

export const optionsHeaderStyles = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "24px 24px 16px",
  borderBottom: `2px solid ${vars.color.inputBorder}`,
  marginBottom: "8px",

  "@media": {
    "(max-width: 768px)": {
      padding: "18px 16px 14px",
    },
  },
});

export const optionsTitleStyles = style({
  fontSize: "22px",
  fontWeight: "600",
  color: vars.color.text,
  margin: 0,
  letterSpacing: "-0.3px",

  "@media": {
    "(max-width: 768px)": {
      fontSize: "18px",
    },
  },
});

export const closeButtonStyles = style({
  background: "none",
  border: "none",
  fontSize: "28px",
  lineHeight: "1",
  cursor: "pointer",
  color: vars.color.textMuted,
  padding: "8px 12px",
  borderRadius: "10px",
  transition: "all 0.2s ease",

  ":hover": {
    backgroundColor: vars.color.glassHover,
    color: vars.color.accent,
    transform: "scale(1.1)",
  },

  ":active": {
    transform: "scale(0.95)",
  },

  "@media": {
    "(max-width: 768px)": {
      fontSize: "24px",
      padding: "6px 10px",
    },
  },
});

export const optionsListStyles = style({
  padding: "8px 16px 24px",

  "@media": {
    "(max-width: 768px)": {
      padding: "6px 12px 18px",
    },
  },
});

export const optionItemStyles = style({
  backgroundColor: vars.color.glassHover,
  color: vars.color.text,
  border: `2px solid transparent`,
  padding: "16px 20px",
  marginBottom: "8px",
  borderRadius: "12px",
  cursor: "pointer",
  transition: "all 0.2s ease",
  fontSize: "16px",
  fontWeight: "500",
  listStyle: "none",
  position: "relative",

  ":hover": {
    backgroundColor: vars.color.glass,
    borderColor: vars.color.accent,
    transform: "translateX(6px)",
    boxShadow: `0 4px 12px ${vars.color.accent}40`,
  },

  ":active": {
    transform: "translateX(3px)",
  },

  "@media": {
    "(max-width: 768px)": {
      padding: "14px 16px",
      fontSize: "14px",
    },
  },
});

export const selectedOptionStyles = style({
  backgroundColor: vars.color.accent,
  color: vars.color.accentText,
  borderColor: vars.color.accent,
  fontWeight: "600",
  boxShadow: `0 4px 12px ${vars.color.accent}60`,

  "::after": {
    content: '"✓"',
    position: "absolute",
    right: "20px",
    color: vars.color.accentText,
    fontSize: "18px",
    fontWeight: "bold",
  },

  ":hover": {
    backgroundColor: vars.color.accent,
    borderColor: vars.color.accent,
    transform: "translateX(6px)",
  },
});

export const overlayStyles = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 999,
  animation: `${fadeIn} 0.3s ease`,
  backdropFilter: "blur(3px)",
  borderRadius: "24px 0 0 24px",
});

export const noOptionsStyles = style({
  padding: "40px 20px",
  textAlign: "center",
  color: vars.color.textMuted,
  fontSize: "16px",
  fontStyle: "italic",

  "@media": {
    "(max-width: 768px)": {
      padding: "28px 16px",
      fontSize: "14px",
    },
  },
});

export const optionGroupStyles = style({
  marginBottom: "16px",

  "@media": {
    "(max-width: 768px)": {
      marginBottom: "12px",
    },
  },
});

export const optionGroupTitleStyles = style({
  padding: "12px 20px 8px",
  fontSize: "14px",
  fontWeight: "600",
  color: vars.color.textMuted,
  textTransform: "uppercase",
  letterSpacing: "0.5px",

  "@media": {
    "(max-width: 768px)": {
      padding: "10px 16px 6px",
      fontSize: "12px",
    },
  },
});
