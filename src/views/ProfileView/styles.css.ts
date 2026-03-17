import { style } from "@vanilla-extract/css";

export const userContainerStyles = style({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  width: "100%",
  maxWidth: "900px",
  margin: "0 auto",

  "@media": {
    "(max-width: 768px)": {
      gap: "16px",
      maxWidth: "100%",
    },
  },
});
