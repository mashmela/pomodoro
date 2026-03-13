import { style } from "@vanilla-extract/css";

import { vars } from "themes/contract.css";

export const containerStyles = style({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});

export const infoContainerStyles = style({
  display: "flex",
  gap: "24px",
  alignItems: "flex-start",
  padding: "24px",
  borderRadius: "24px",
  backgroundColor: vars.color.glass,
  border: `1px solid ${vars.color.glassBorder}`,
  backdropFilter: vars.color.glassBlur,
  WebkitBackdropFilter: vars.color.glassBlur,
  boxShadow: vars.color.glassShadow,
  transition: "background-color 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease",
});

export const avatarSectionStyles = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
  flexShrink: 0,
});

export const userImgStyles = style({
  width: "88px",
  height: "88px",
  borderRadius: "50%",
  objectFit: "cover",
  border: `2px solid ${vars.color.glassBorder}`,
  boxShadow: vars.color.glassShadow,
});

export const changePhotoButtonStyles = style({
  background: "none",
  border: `1px solid ${vars.color.glassBorder}`,
  borderRadius: "9999px",
  padding: "5px 14px",
  fontSize: "12px",
  color: vars.color.textMuted,
  cursor: "pointer",
  whiteSpace: "nowrap",
  transition: "all 0.2s ease",
  backgroundColor: vars.color.glass,

  ":hover": {
    backgroundColor: vars.color.glassHover,
    color: vars.color.text,
  },
});

export const userInfoStyles = style({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  flex: 1,
});

export const userNameStyles = style({
  fontSize: "20px",
  fontWeight: 600,
  color: vars.color.text,
});

export const editButtonStyles = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "4px",
  background: "none",
  border: `1px solid ${vars.color.glassBorder}`,
  borderRadius: "9999px",
  padding: "5px 14px",
  fontSize: "12px",
  color: vars.color.textMuted,
  cursor: "pointer",
  alignSelf: "flex-start",
  transition: "all 0.2s ease",
  backgroundColor: vars.color.glass,

  ":hover": {
    backgroundColor: vars.color.glassHover,
    color: vars.color.text,
  },
});

export const logoutButtonStyles = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "4px",
  background: "none",
  padding: "5px 14px",
  fontSize: "12px",
  color: vars.color.textMuted,
  cursor: "pointer",
  alignSelf: "flex-start",
  transition: "all 0.2s ease",
  border: "none",

  ":hover": {
    color: vars.color.text,
  },
});

export const headerActionsStyles = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const editFormStyles = style({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  maxWidth: "320px",
  color: vars.color.textMuted,

  fontSize: "14px",
  fontWeight: 500,
  lineHeight: 1.5,
});

export const editActionsStyles = style({
  display: "flex",
  gap: "8px",
});

export const saveButtonStyles = style({
  padding: "8px 20px",
  borderRadius: "9999px",
  border: "none",
  backgroundColor: vars.color.accent,
  color: vars.color.accentText,
  fontSize: "13px",
  fontWeight: 500,
  cursor: "pointer",
  transition: "all 0.2s ease",

  ":hover": {
    opacity: 0.88,
    transform: "translateY(-1px)",
  },
});

export const cancelButtonStyles = style({
  padding: "8px 20px",
  borderRadius: "9999px",
  border: `1px solid ${vars.color.glassBorder}`,
  backgroundColor: vars.color.glass,
  color: vars.color.textMuted,
  fontSize: "13px",
  fontWeight: 500,
  cursor: "pointer",
  transition: "all 0.2s ease",

  ":hover": {
    backgroundColor: vars.color.glassHover,
    color: vars.color.text,
  },
});
