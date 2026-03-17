import { style } from "@vanilla-extract/css";

import { vars } from "themes/contract.css";

export const createUserPageWrapperStyles = style({
  width: "100%",
  height: "100%",
  display: "flex",
  position: "relative",
});

export const inputContainerStyles = style({
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  color: vars.color.text,
  fontSize: "14px",
  fontWeight: 500,
  lineHeight: 1.5,
});

export const inputsContainerStyles = style({
  display: "flex",
  flexDirection: "column",
  gap: "14px",
  padding: "32px",
  borderRadius: "24px",
  backgroundColor: vars.color.glass,
  border: `1px solid ${vars.color.glassBorder}`,
  backdropFilter: vars.color.glassBlur,
  WebkitBackdropFilter: vars.color.glassBlur,
  boxShadow: vars.color.glassShadow,
  minWidth: "320px",

  "@media": {
    "(max-width: 768px)": {
      minWidth: 0,
      width: "100%",
      padding: "24px 18px",
      borderRadius: "20px",
    },
  },
});

export const errorTextStyles = style({
  fontSize: "12px",
  color: "#ef4444",
  marginTop: "2px",
});

export const toggleLinkStyles = style({
  display: "inline-block",
  color: vars.color.accent,
  textDecoration: "none",
  cursor: "pointer",
  fontSize: "13px",
  transition: "opacity 0.2s ease",
  background: "none",
  border: "none",
  padding: 0,
  alignSelf: "flex-start",

  ":hover": {
    opacity: 0.75,
    textDecoration: "underline",
  },
});

export const pageContainerStyles = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  minHeight: "100vh",
});
