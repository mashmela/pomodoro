import { style } from "@vanilla-extract/css";

import { vars } from "themes/contract.css";

export const statsCardStyles = style({
  background: vars.color.glass,
  backdropFilter: vars.color.glassBlur,
  border: `1px solid ${vars.color.glassBorder}`,
  borderRadius: "16px",
  boxShadow: vars.color.glassShadow,
  overflow: "hidden",
});

export const statsHeaderStyles = style({
  padding: "16px 20px 8px 20px",
  borderBottom: `1px solid ${vars.color.glassBorder}`,
});

export const motivationTextStyles = style({
  fontSize: "15px",
  fontWeight: "500",
  color: vars.color.text,
  display: "block",
  textAlign: "center" as const,
});

export const statsGridStyles = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
});

export const statItemStyles = style({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  flex: 1,
  justifyContent: "center",
  padding: "4px",
});

export const statIconStyles = style({
  fontSize: "24px",
  opacity: 0.9,
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
});

export const statLabelStyles = style({
  fontSize: "11px",
  color: vars.color.textMuted,
  textTransform: "uppercase" as const,
  letterSpacing: "0.3px",
});

export const dividerStyles = style({
  width: "1px",
  height: "30px",
  background: vars.color.glassBorder,
  margin: "0 8px",
});

export const weekStatsStyles = style({
  display: "flex",
  justifyContent: "space-between",
  gap: "4px",
  padding: "12px 20px 16px 20px",
  borderTop: `1px solid ${vars.color.glassBorder}`,
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
});

export const weekDayLabelStyles = style({
  fontSize: "11px",
  color: vars.color.textMuted,
  marginBottom: "4px",
  fontWeight: "500",
});

export const weekDayValueStyles = style({
  fontSize: "14px",
  fontWeight: "bold",
  color: vars.color.accent,
  minHeight: "20px",
});

export const streakLabelStyles = style({
  textAlign: "center" as const,
  fontSize: "12px",
  color: vars.color.textMuted,
  padding: "0 20px 16px 20px",
  marginTop: "-4px",
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
});
