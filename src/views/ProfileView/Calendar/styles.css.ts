import { style } from "@vanilla-extract/css";

import { vars } from "themes/contract.css";

export const calendarStyles = style({
  width: "100%",
  padding: "24px",
  borderRadius: "24px",
  backgroundColor: vars.color.glass,
  border: `1px solid ${vars.color.glassBorder}`,
  backdropFilter: vars.color.glassBlur,
  WebkitBackdropFilter: vars.color.glassBlur,
  boxShadow: vars.color.glassShadow,
  transition: "background-color 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease",

  "@media": {
    "(max-width: 768px)": {
      padding: "16px 12px 14px",
      borderRadius: "20px",
    },
  },
});

export const calendarHeaderStyles = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "20px",

  "@media": {
    "(max-width: 768px)": {
      marginBottom: "14px",
    },
  },
});

export const monthLabelStyles = style({
  fontSize: "16px",
  fontWeight: 600,
  color: vars.color.text,

  "@media": {
    "(max-width: 768px)": {
      fontSize: "14px",
    },
  },
});

export const arrowButtonStyles = style({
  background: "none",
  border: `1px solid ${vars.color.glassBorder}`,
  borderRadius: "9999px",
  width: "34px",
  height: "34px",
  cursor: "pointer",
  fontSize: "18px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: vars.color.textMuted,
  transition: "all 0.2s ease",
  backgroundColor: vars.color.glass,

  ":hover": {
    backgroundColor: vars.color.glassHover,
    color: vars.color.text,
  },

  ":disabled": {
    opacity: 0.3,
    cursor: "not-allowed",
    pointerEvents: "none",
    backgroundColor: vars.color.glass,
    color: vars.color.textMuted,
  },

  "@media": {
    "(max-width: 768px)": {
      width: "30px",
      height: "30px",
      fontSize: "16px",
    },
  },
});

export const calendarGridStyles = style({
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
  gap: "4px",

  "@media": {
    "(max-width: 768px)": {
      gap: "2px",
    },
  },
});

export const dayHeaderStyles = style({
  textAlign: "center",
  fontSize: "12px",
  fontWeight: 600,
  color: vars.color.textMuted,
  padding: "6px 0 10px",
  letterSpacing: "0.04em",
  textTransform: "uppercase",

  "@media": {
    "(max-width: 768px)": {
      fontSize: "10px",
      padding: "4px 0 6px",
    },
  },
});

export const dayCellStyles = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: "8px 4px 6px",
  gap: "5px",
  borderRadius: "10px",
  minHeight: "60px",
  fontSize: "13px",
  color: vars.color.text,
  cursor: "default",
  transition: "background-color 0.15s ease",

  ":hover": {
    backgroundColor: vars.color.glassHover,
  },

  "@media": {
    "(max-width: 768px)": {
      minHeight: "48px",
      padding: "6px 2px 4px",
      gap: "4px",
      fontSize: "11px",
      borderRadius: "8px",
    },
  },
});

export const pomodoroCircleStyles = style({
  width: "22px",
  height: "22px",
  borderRadius: "50%",
  backgroundColor: vars.color.pomodoroFilled,
  color: vars.color.accentText,
  fontSize: "10px",
  fontWeight: 700,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "@media": {
    "(max-width: 768px)": {
      width: "18px",
      height: "18px",
      fontSize: "9px",
    },
  },
});
