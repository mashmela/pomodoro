import { style } from "@vanilla-extract/css";

import { vars } from "themes/contract.css";

export const settingsPageWrapperStyles = style({
  position: "relative",
  width: "100%",
  minHeight: "100%",
});

export const settingsPageContainerStyles = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  width: "min(100%, 480px)",
  margin: "0 auto",
  padding: "0 20px",
  transition: "transform 0.32s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",

  "@media": {
    "(max-width: 768px)": {
      gap: "10px",
      padding: 0,
      width: "100%",
    },
  },
});

export const settingsTitleStyles = style({
  fontSize: "22px",
  fontWeight: 700,
  color: vars.color.text,
  marginBottom: "8px",
  letterSpacing: "-0.01em",

  "@media": {
    "(max-width: 768px)": {
      fontSize: "18px",
      marginBottom: "4px",
    },
  },
});

export const settingsPageShiftedStyles = style({
  transform: "translateX(-320px)",

  "@media": {
    "(max-width: 768px)": {
      transform: "none",
      opacity: 0.35,
      pointerEvents: "none",
    },
  },
});

export const inputContainerStyles = style({
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  color: vars.color.textMuted,
  fontSize: "14px",
  fontWeight: 300,
  lineHeight: 1.5,

  "@media": {
    "(max-width: 768px)": {
      fontSize: "13px",
    },
  },
});

export const optionsPanelWrapperStyles = style({
  position: "absolute",
  top: 0,
  right: "-320px",
  width: "320px",
  height: "100%",
  transition: "right 0.32s cubic-bezier(0.4, 0, 0.2, 1)",
  borderRadius: "24px",
  backgroundColor: vars.color.glass,
  border: `1px solid ${vars.color.glassBorder} `,
  backdropFilter: vars.color.glassBlur,
  WebkitBackdropFilter: vars.color.glassBlur,
  zIndex: 10,

  "@media": {
    "(max-width: 768px)": {
      width: "min(100vw - 20px, 360px)",
      right: "calc(-1 * min(100vw - 20px, 360px))",
      height: "calc(100% - 12px)",
      top: "6px",
      borderRadius: "20px",
    },
  },
});

export const optionsPanelVisibleStyles = style({
  right: "0",
});

export const optionsPanelContentStyles = style({
  padding: "24px",
  height: "100%",
  overflowY: "auto",

  "@media": {
    "(max-width: 768px)": {
      padding: "18px 16px",
    },
  },
});

export const optionsHeaderStyles = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
  paddingBottom: "14px",
  borderBottom: `1px solid ${vars.color.glassBorder}`,

  "@media": {
    "(max-width: 768px)": {
      marginBottom: "16px",
      paddingBottom: "12px",
    },
  },
});

export const optionsTitleStyles = style({
  fontSize: "18px",
  fontWeight: 600,
  color: vars.color.text,
  margin: 0,

  "@media": {
    "(max-width: 768px)": {
      fontSize: "16px",
    },
  },
});

export const closeButtonStyles = style({
  background: "none",
  border: "none",
  fontSize: "22px",
  cursor: "pointer",
  color: vars.color.textMuted,
  padding: "4px 8px",
  borderRadius: "9999px",
  transition: "all 0.2s ease",
  lineHeight: 1,

  ":hover": {
    backgroundColor: vars.color.glassHover,
    color: vars.color.text,
  },

  "@media": {
    "(max-width: 768px)": {
      fontSize: "20px",
      padding: "4px 6px",
    },
  },
});

export const optionsListStyles = style({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  gap: "8px",

  "@media": {
    "(max-width: 768px)": {
      gap: "6px",
    },
  },
});

export const optionItemStyles = style({
  padding: "14px 16px",
  borderRadius: "12px",
  cursor: "pointer",
  transition: "all 0.18s ease",
  fontSize: "15px",
  color: vars.color.text,
  border: `1px solid transparent`,
  backgroundColor: vars.color.glass,

  ":hover": {
    backgroundColor: vars.color.glassHover,
    borderColor: vars.color.glassBorder,
  },

  "@media": {
    "(max-width: 768px)": {
      padding: "12px 14px",
      fontSize: "14px",
    },
  },
});

export const selectedOptionStyles = style({
  borderColor: vars.color.accent,
  color: vars.color.accent,
  fontWeight: 600,
  position: "relative",

  "::after": {
    content: '"✓"',
    position: "absolute",
    right: "16px",
    color: vars.color.accent,
  },
});

export const toggleRowStyles = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "18px 20px",
  borderRadius: "16px",
  backgroundColor: vars.color.glass,
  border: `1px solid ${vars.color.glassBorder}`,
  backdropFilter: vars.color.glassBlur,
  WebkitBackdropFilter: vars.color.glassBlur,
  boxShadow: vars.color.glassShadow,
  color: vars.color.text,
  fontSize: "15px",
  fontWeight: 500,
  cursor: "pointer",

  ":hover": {
    backgroundColor: vars.color.glassHover,
    transform: "translateY(-1px)",
  },

  ":active": {
    transform: "translateY(0)",
  },

  "@media": {
    "(max-width: 768px)": {
      padding: "15px 16px",
      borderRadius: "14px",
      fontSize: "14px",
    },
  },
});

export const toggleLabelStyles = style({
  color: vars.color.text,
  fontSize: "15px",
  fontWeight: 500,
  userSelect: "none",

  "@media": {
    "(max-width: 768px)": {
      fontSize: "14px",
    },
  },
});

export const toggleTrackStyles = style({
  position: "relative",
  width: "44px",
  height: "26px",
  borderRadius: "9999px",
  backgroundColor: vars.color.glassBorder,
  border: `1px solid ${vars.color.glassBorder}`,
  cursor: "pointer",
  transition: "background-color 0.25s ease",
  flexShrink: 0,

  "@media": {
    "(max-width: 768px)": {
      width: "40px",
      height: "24px",
    },
  },
});

export const toggleTrackActiveStyles = style({
  backgroundColor: vars.color.accent,
  borderColor: vars.color.accent,
});

export const toggleThumbStyles = style({
  position: "absolute",
  top: "2px",
  left: "2px",
  width: "20px",
  height: "20px",
  borderRadius: "50%",
  backgroundColor: "white",
  boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
  transition: "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)",

  "@media": {
    "(max-width: 768px)": {
      width: "18px",
      height: "18px",
    },
  },
});

export const toggleThumbActiveStyles = style({
  transform: "translateX(18px)",

  "@media": {
    "(max-width: 768px)": {
      transform: "translateX(16px)",
    },
  },
});

export const sectionDividerStyles = style({
  fontSize: "11px",
  fontWeight: 600,
  color: vars.color.textMuted,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  padding: "8px 4px 4px",

  "@media": {
    "(max-width: 768px)": {
      fontSize: "10px",
      padding: "6px 2px 2px",
    },
  },
});

export const errorMessageStyles = style({
  color: " #ff4444",
  fontSize: "14px",
  margin: "8px 0",
  padding: "8px",
  backgroundColor: "rgba(255, 68, 68, 0.1)",
  borderRadius: "4px",

  "@media": {
    "(max-width: 768px)": {
      fontSize: "13px",
    },
  },
});

export const successMessageStyles = style({
  color: " #00c851",
  fontSize: "14px",
  margin: "8px 0",
  padding: "8px",
  backgroundColor: "rgba(0, 200, 81, 0.1)",
  borderRadius: "4px",

  "@media": {
    "(max-width: 768px)": {
      fontSize: "13px",
    },
  },
});

export const buttonContainerStyles = style({
  marginTop: "16px",
  display: "flex",
  justifyContent: "flex-end",
});
