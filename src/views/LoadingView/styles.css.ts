import { style, keyframes } from "@vanilla-extract/css";

import { vars } from "themes/contract.css";

const spin = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

const pulse = keyframes({
  "0%, 100%": { opacity: 1 },
  "50%": { opacity: 0.5 },
});

export const loadingContainerStyles = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minminHeight: "100vh",
  width: "100%",
  padding: "20px",
  boxSizing: "border-box",
});

export const spinnerStyles = style({
  width: "44px",
  height: "44px",
  border: `3px solid ${vars.color.glassBorder}`,
  borderTop: `3px solid ${vars.color.accent}`,
  borderRadius: "50%",
  animation: `${spin} 0.9s linear infinite`,
  marginBottom: "20px",
});

export const messageStyles = style({
  fontSize: "16px",
  color: vars.color.textMuted,
  marginBottom: "24px",
  textAlign: "center",
  lineHeight: "1.5",
  animation: `${pulse} 2s ease-in-out infinite`,
});

export const offlineButtonStyles = style({
  padding: "12px 28px",
  fontSize: "14px",
  fontWeight: 500,
  color: vars.color.accentText,
  backgroundColor: vars.color.accent,
  border: "none",
  borderRadius: "9999px",
  cursor: "pointer",
  transition: "all 0.2s ease",

  ":hover": {
    opacity: 0.88,
    transform: "translateY(-1px)",
  },

  ":active": {
    transform: "scale(0.96)",
  },
});

export const offlineMessageStyles = style({
  fontSize: "13px",
  color: vars.color.textMuted,
  marginTop: "14px",
  textAlign: "center",
  lineHeight: 1.5,
});
