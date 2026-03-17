import { style } from "@vanilla-extract/css";

import { vars } from "themes/contract.css";

export const statsCardStyles = style({
  background: vars.color.glass,
  backdropFilter: vars.color.glassBlur,
  border: `1px solid ${vars.color.glassBorder}`,
  borderRadius: "16px",
  boxShadow: vars.color.glassShadow,
  overflow: "hidden",

  "@media": {
    "(max-width: 768px)": {
      borderRadius: "20px",
    },
  },
});

export const statsHeaderStyles = style({
  padding: "16px 20px 8px 20px",
  borderBottom: `1px solid ${vars.color.glassBorder}`,

  "@media": {
    "(max-width: 768px)": {
      padding: "14px 16px 8px",
    },
  },
});

export const motivationTextStyles = style({
  fontSize: "15px",
  fontWeight: "500",
  color: vars.color.text,
  display: "block",
  textAlign: "center" as const,

  "@media": {
    "(max-width: 768px)": {
      fontSize: "14px",
    },
  },
});

export const statsGridStyles = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",

  "@media": {
    "(max-width: 768px)": {
      flexDirection: "column",
      alignItems: "stretch",
    },
  },
});

export const statItemStyles = style({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  flex: 1,
  justifyContent: "center",
  padding: "4px",

  "@media": {
    "(max-width: 768px)": {
      justifyContent: "flex-start",
      padding: "12px 16px",
    },
  },
});

export const statIconStyles = style({
  fontSize: "24px",
  opacity: 0.9,

  "@media": {
    "(max-width: 768px)": {
      fontSize: "20px",
    },
  },
});

export const statContentStyles = style({
  display: "flex",
  flexDirection: "column",
});

export const statValueStyles = style({
  fontSize: "22px",
  fontWeight: "bold",
  color: vars.color.accent,
  lineHeight: "1.2",

  "@media": {
    "(max-width: 768px)": {
      fontSize: "20px",
    },
  },
});

export const statLabelStyles = style({
  fontSize: "11px",
  color: vars.color.textMuted,
  textTransform: "uppercase" as const,
  letterSpacing: "0.3px",

  "@media": {
    "(max-width: 768px)": {
      fontSize: "10px",
    },
  },
});

export const dividerStyles = style({
  width: "1px",
  height: "30px",
  background: vars.color.glassBorder,
  margin: "0 8px",

  "@media": {
    "(max-width: 768px)": {
      width: "100%",
      height: "1px",
      margin: 0,
    },
  },
});

export const weekStatsStyles = style({
  display: "flex",
  justifyContent: "space-between",
  gap: "4px",
  padding: "12px 20px 16px 20px",
  borderTop: `1px solid ${vars.color.glassBorder}`,

  "@media": {
    "(max-width: 768px)": {
      gap: "2px",
      padding: "10px 12px 14px",
    },
  },
});

export const weekDayStyles = style({
  flex: 1,
  textAlign: "center" as const,
  padding: "4px 2px",
  borderRadius: "6px",
  transition: "background 0.2s",
  ":hover": {
    background: vars.color.glassHover,
  },

  "@media": {
    "(max-width: 768px)": {
      padding: "4px 0",
    },
  },
});

export const weekDayLabelStyles = style({
  fontSize: "11px",
  color: vars.color.textMuted,
  marginBottom: "4px",
  fontWeight: "500",

  "@media": {
    "(max-width: 768px)": {
      fontSize: "10px",
      marginBottom: "2px",
    },
  },
});

export const weekDayValueStyles = style({
  fontSize: "14px",
  fontWeight: "bold",
  color: vars.color.accent,
  minHeight: "20px",

  "@media": {
    "(max-width: 768px)": {
      fontSize: "12px",
      minHeight: "16px",
    },
  },
});

export const streakLabelStyles = style({
  textAlign: "center" as const,
  fontSize: "12px",
  color: vars.color.textMuted,
  padding: "0 20px 16px 20px",
  marginTop: "-4px",

  "@media": {
    "(max-width: 768px)": {
      fontSize: "11px",
      padding: "0 16px 14px",
      marginTop: 0,
    },
  },
});

export const loadingStyles = style({
  textAlign: "center" as const,
  padding: "40px",
  color: vars.color.textMuted,
  background: vars.color.glass,
  backdropFilter: vars.color.glassBlur,
  border: `1px solid ${vars.color.glassBorder}`,
  borderRadius: "16px",
  marginBottom: "24px",

  "@media": {
    "(max-width: 768px)": {
      padding: "24px 16px",
      marginBottom: "16px",
    },
  },
});
