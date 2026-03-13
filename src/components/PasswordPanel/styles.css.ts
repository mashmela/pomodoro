import { keyframes, style } from "@vanilla-extract/css";

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

export const passwordPanelContainerStyles = style({
  position: "fixed",
  top: 0,
  right: 0,
  width: "400px",
  minHeight: "100vh",
  backgroundColor: vars.color.glass, // ← используем одно свойство
  backdropFilter: vars.color.glassBlur,
  borderLeft: `1px solid ${vars.color.glassBorder}`,
  boxShadow: vars.color.glassShadow,
  zIndex: 1000,
  display: "flex",
  flexDirection: "column",
  overflowY: "auto",
  animation: `${slideIn} 0.3s ease forwards`, // ← только animation
  borderRadius: "24px 0 0 24px",

  "@media": {
    "(max-width: 768px)": {
      width: "85%",
    },
  },
});

export const passwordPanelClosingStyles = style({
  animation: `${slideOut} 0.3s ease forwards`, // ← animation для закрытия
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
});

export const passwordHeaderStyles = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "24px 24px 16px", // ← как в OptionsPanel
  borderBottom: `2px solid ${vars.color.inputBorder}`, // ← как в OptionsPanel
});

export const passwordTitleStyles = style({
  fontSize: "22px", // ← как в OptionsPanel
  fontWeight: "600",
  color: vars.color.text,
  margin: 0,
  letterSpacing: "-0.3px",
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
});

export const passwordContentStyles = style({
  padding: "8px 16px 24px", // ← как в OptionsPanel
});

export const inputGroupStyles = style({
  marginBottom: "16px", // ← уменьшил для единообразия
});

export const inputLabelStyles = style({
  display: "block",
  fontSize: "14px",
  fontWeight: "500", // ← добавил жирность
  color: vars.color.textMuted,
  marginBottom: "8px",
  padding: "0 4px",
});

export const errorMessageStyles = style({
  backgroundColor: "rgba(255, 68, 68, 0.1)",
  border: `1px solid ${vars.color.accent}40`, // ← использую accent с прозрачностью
  color: vars.color.accent, // ← использую accent для текста
  fontSize: "14px",
  marginBottom: "16px",
  padding: "12px 16px",
  borderRadius: "8px",
});

export const successMessageStyles = style({
  backgroundColor: "rgba(0, 200, 81, 0.1)",
  border: `1px solid #00C85140`,
  color: "#00C851",
  fontSize: "14px",
  marginBottom: "16px",
  padding: "12px 16px",
  borderRadius: "8px",
});

export const buttonContainerStyles = style({
  marginTop: "16px",
  padding: "8px 4px",
});
