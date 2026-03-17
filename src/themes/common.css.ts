import { style } from "@vanilla-extract/css";

export const pageWrapperStyles = style({
  minHeight: "100vh",
  display: "flex",
  position: "relative",
  overflow: "hidden",
  padding: 24,

  "@media": {
    "(max-width: 768px)": {
      padding: "16px 16px calc(96px + env(safe-area-inset-bottom, 0px))",
    },
  },
});
