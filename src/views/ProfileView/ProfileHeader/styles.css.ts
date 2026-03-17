import { style } from "@vanilla-extract/css";

import { vars } from "themes/contract.css";

export const containerStyles = style({
  display: "flex",
  flexDirection: "column",
  gap: "24px",

  "@media": {
    "(max-width: 768px)": {
      gap: "16px",
    },
  },
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

  "@media": {
    "(max-width: 768px)": {
      flexDirection: "column",
      alignItems: "center",
      gap: "18px",
      padding: "18px",
      borderRadius: "20px",
    },
  },
});

export const avatarSectionStyles = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
  flexShrink: 0,

  "@media": {
    "(max-width: 768px)": {
      width: "100%",
    },
  },
});

export const userImgStyles = style({
  width: "88px",
  height: "88px",
  borderRadius: "50%",
  objectFit: "cover",
  border: `2px solid ${vars.color.glassBorder}`,
  boxShadow: vars.color.glassShadow,

  "@media": {
    "(max-width: 768px)": {
      width: "72px",
      height: "72px",
    },
  },
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

  "@media": {
    "(max-width: 768px)": {
      padding: "4px 12px",
      fontSize: "11px",
    },
  },
});

export const userInfoStyles = style({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  flex: 1,

  "@media": {
    "(max-width: 768px)": {
      width: "100%",
      alignItems: "center",
      textAlign: "center",
    },
  },
});

export const userNameStyles = style({
  fontSize: "20px",
  fontWeight: 600,
  color: vars.color.text,

  "@media": {
    "(max-width: 768px)": {
      fontSize: "18px",
    },
  },
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

  "@media": {
    "(max-width: 768px)": {
      padding: "5px 12px",
      fontSize: "11px",
    },
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

  "@media": {
    "(max-width: 768px)": {
      padding: "5px 0",
      fontSize: "11px",
    },
  },
});

export const headerActionsStyles = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  "@media": {
    "(max-width: 768px)": {
      gap: "12px",
      flexWrap: "wrap",
    },
  },
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

  "@media": {
    "(max-width: 768px)": {
      maxWidth: "100%",
      width: "100%",
      fontSize: "13px",
    },
  },
});

export const editActionsStyles = style({
  display: "flex",
  gap: "8px",

  "@media": {
    "(max-width: 768px)": {
      justifyContent: "center",
      flexWrap: "wrap",
    },
  },
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

  "@media": {
    "(max-width: 768px)": {
      padding: "8px 18px",
      fontSize: "12px",
    },
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

  "@media": {
    "(max-width: 768px)": {
      padding: "8px 18px",
      fontSize: "12px",
    },
  },
});
